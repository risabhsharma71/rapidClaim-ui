import Ember from 'ember';
import CONFIG from 'cm-insurance/config/environment';
import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    title: [
        validator('presence', true),
        validator('length', {
            max: 80,
        })
    ],
    damagecontent: [
        validator('presence', true),
        validator('format', {
            type: 'name'
        })
    ],
totaldamagevalue:[
        validator('presence', true),
        validator('format', {
            regex: /^[0-9]{4,10}$/,
            message: 'This field must be a valid damage value'
        })
    ],
totalclaimvalue:[
        validator('presence', true),
        validator('format', {
            regex: /^[0-9]{4,10}$/,
            message: 'This field must be a valid claim value'
        })
    ],
});

export default Ember.Controller.extend(Validations,{
//claimno:null,
isShowingModal:false,
showformdetails:true,
showotherformdetails:false,
    actions:{
        notifyclaim: function(){
            let{
                title,
                damagecontent
                }=this.getProperties('title','damagecontent');
           
            var datastring={
                    "title":title,
                    "damagedetails": damagecontent
           
            };
            console.log(JSON.stringify(datastring));
            var mycontroller =this;
            var message;
            var token =sessionStorage.getItem('insurertoken');
            console.log('token',token);
            var usertype;
            return $.ajax({
                url:  CONFIG.GOURL +'/notifyClaim',
                type: 'POST',
                contentType: 'application/json',
                headers:{
                    'x-access-token':token
                },
                
                data:JSON.stringify(datastring),
                success: function(response) {
                    console.log(JSON.stringify(response));
                   message = response.message;
                   console.log("message"+message);
                   if(message === 'claim notified  Sucessfully !'){
                       console.log("in if loop");
                        mycontroller.toggleProperty('isShowingModal');  
                        //mycontroller.set("showotherformdetails",true);
                   }
                   
                    
                },      
                error: function(response) {
                   console.log('DEBUG: GET Enquiries Failed');
                   console.log(JSON.stringify(response));
                   var errmsg=response.responseJSON.message;
                   console.log("Error Message: "+ errmsg);      
                }   
            });
            

        
        },
        afternotify:function(arg){
            var showclaim=arg;
            console.log("agr :"+showclaim);
            if(showclaim === "claimgetnotified"){
                this.set('showformdetails',false);
                //this.set('showotherformdetails',true);
            }
          // this.set('isShowingModal',false);
          this.transitionToRoute('insurerdashboard');
     
        },

        submitdetails:function(){
           /* var totaldamagevalue =this.get('totaldamagevalue');
            var totalclaimvalue=this.get('totalclaimvalue');
            console.log("totalclaimvalue :"+totalclaimvalue);*/
            var myclaimno=this.get('claimno');
            console.log('claimno:'+myclaimno);

            var claimno=JSON.stringify(myclaimno)
            console.log("cl:::"+claimno);
            let{
                totaldamagevalue,
                totalclaimvalue
                }=this.getProperties('totaldamagevalue','totalclaimvalue');
           
            var datastring={
                    "claimno": claimno,
            "totaldamagevalue": totaldamagevalue,
           "totalclaimvalue":totalclaimvalue,
           "publicadjusterid":"5969c4348ffe617eb217b5c7"
           
            };
            console.log(JSON.stringify(datastring));
            var mycontroller =this;
            var message;
            var token =sessionStorage.getItem('insurertoken');
            console.log('token frm :::',token);
            var usertype;
            return $.ajax({
                url: CONFIG.GOURL+'/createClaim',
                type: 'POST',
                
                headers:{
                    'x-access-token':token
                },
                contentType: 'application/json', 
                data:JSON.stringify(datastring),
                success: function(response) {
                    console.log(JSON.stringify(response));
                   message = response.message;
                   console.log("message"+message);
                   if(message === 'claim value updated Sucessfully !'){
                       console.log("in if loop");
                        mycontroller.toggleProperty('isShowingModals');  
                        //mycontroller.set("showotherformdetails",true);
                   }
                   
                  
                   
                    
                },      
                error: function(response) {
                   console.log('DEBUG: GET Enquiries Failed');
                   console.log(JSON.stringify(response));
                   var errmsg=response.responseJSON.message;
                   console.log("Error Message: "+ errmsg);      
                }   
            });

        },
        upload:function(file){
           console.log(" Test", file);
           //var myfile =file.get('#upload_file');
           //console.log("myfile",myfile); 
           var reqid =file.get('name');
           console.log("FileName: ", reqid);
           var myurl =file.get('id');
           console.log("myurl: ", myurl);
           var files = file[1];
           console.log("files",files);
          //s event.preventDefault();
           var formData = new FormData($(this)[0]);
           
        var fieldName =reqid ;
       // var formseralize = file.serialize();
       
        formData.append(fieldName, file[0]);
        console.log(formData);
        var token =sessionStorage.getItem('insurertoken');
            console.log('token frm :::',token);
         
          /* file.upload("http://192.168.0.20:8082"+ "/UploadDocs"+token ).then(function(response) {
         console.log(JSON.stringify(response));
              
           },
           function() {
              // image.rollback();
           });*/
              

             
              $.ajax({
                    
                    url: 'http://192.168.0.20:8082/UploadDocs',
                    type: 'POST',
                    headers:{
                    'x-access-token':token,
                   // 'Content-Type': multipart/form-data
                },
                  processData: false,
                    contentType:false,
                    enctype: 'multipart/form-data',
                    data: formData,
                    
                    success: function(response) {
                        console.log(JSON.stringify(response));
                         console.log(JSON.stringify(response.files));
                    },
                    error: function(err) {
                        console.error(err);
                    }
                    });
        
           /*var token =sessionStorage.getItem('insurertoken');
            console.log('token frm :::',token);
            var test =event ;
            console.log(test);
            var myfile= this.get('photo');
            console.log('myfile'+myfile);
            console.log("event :"+event.target);
            var  inputFiles = event.target.files;
            console.log("inputFiles :"+JSON.stringify(inputFiles));
             var imgFile = inputFiles;
             var Data = new FormData();
             Data.append('photo', inputFiles[0]);
             //formData.append('photo', inputFiles[0], 'a1.jpg');

             //console.log(JSON.stringify(formData));
                    $.ajax({
                    
                    url: 'http://192.168.0.20:8082/UploadDocs',
                    type: 'POST',
                     headers:{
                    'x-access-token':token
                },
                    contentType: 'multipart/form-data',
                    data: Data,
                    
                    success: function(response) {
                        console.log(JSON.stringify(response));
                    },
                    error: function(err) {
                        console.error(err);
                    }
                    });*/
        },
  okbutton:function(){
         this.set('isShowingrejection', false);
    }
       
    /*    uploadImage:function(file){
                console.log(file)
                let filename = file.get('name');
                file.read().then(function (url) {
                console.log(filename)
                console.log(url)
                }
        */
                        
              
    }
});