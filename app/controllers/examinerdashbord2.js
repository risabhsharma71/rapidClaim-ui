import Ember from 'ember';
import CONFIG from 'cm-insurance/config/environment';
import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    assessedclaimvalue: [
        validator('presence', true),
        validator('format', {
          regex: /^[0-9]{4,10}$/,
            message: 'This field must be a valid value'
        })
    ],
    
    assesseddamagevalue: [
        validator('presence', true),
        validator('format', {
            regex: /^[0-9]{4,10}$/,
            message: 'This field must be a valid value'
        })
    ],


});

export default Ember.Controller.extend(Validations,{
    actions:{
        submit:function(){
           
            var myclaimno=this.get('claimno');
            console.log('claimno:'+myclaimno);

            var claimno=JSON.stringify(myclaimno)
            console.log("cl:::"+claimno);

            let{
                
                assesseddamagevalue,
                assessedclaimvalue
                }=this.getProperties('assesseddamagevalue','assessedclaimvalue');
           
            var datastring={
                    "claimno": claimno,
            "assesseddamagevalue": assesseddamagevalue,
           "assessedclaimvalue":assessedclaimvalue,
          
           
            };
            console.log(JSON.stringify(datastring));
            var mycontroller =this;
            var message;
            var token =sessionStorage.getItem('token');
            console.log('token frm :::',token);
            var usertype;
            return $.ajax({
                url: CONFIG.GOURL+'/examineClaim',
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
                   if(message === 'claim value examined Sucessfully !'){
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
        afterexamined:function(){
            this.transitionToRoute('examinerdashbord');
        },
        addremark:function(){
            var myclaimno=this.get('claimno');
            console.log('claimno:'+myclaimno);

            var claimno=JSON.stringify(myclaimno)
            console.log("cl:::"+claimno);

            var remarkcontent = this.get('remarkcontent');
            console.log('remarkcontent :'+remarkcontent);

            var datastring={
                    "claimno": claimno,
            "remarks": remarkcontent,
           
            };
            console.log(JSON.stringify(datastring));
            var mycontroller =this;
            var message;
            var token =sessionStorage.getItem('token');
            console.log('token frm :::',token);
            var usertype;
            return $.ajax({
                url:'http://192.168.0.20:8082/rejectClaim',
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
                   if(message === 'claim  rejected  !'){
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
        }
    }

    
});