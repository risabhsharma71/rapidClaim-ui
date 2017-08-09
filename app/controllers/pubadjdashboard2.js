import Ember from 'ember';
import CONFIG from 'cm-insurance/config/environment';
import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    negotiation2: [
        validator('presence', true),
        validator('format', {
            regex: /^[0-9]{4,10}$/,
            message: 'This field must be valid neogiation value'
        })
    ],
    basis2:[
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z]{4,15}$/,
            message: 'This field must be valid description'
        })

    ],
    
});

export default Ember.Controller.extend(Validations,{

    actions:{
        submitnegotiation:function(){
            var myclaimno=this.get('claimno');
            console.log('claimno:'+myclaimno);

            var claimno=JSON.stringify(myclaimno)
            console.log("cl:::"+claimno);

            let{
                
                negotiation2,
                basis2
                }=this.getProperties('negotiation2','basis2');
           
            var datastring={
                "claimno": claimno,
                "negotiationamount": negotiation2,
                "asperterm2B":basis2,
        
            };
            console.log(JSON.stringify(datastring));
            var mycontroller =this;
            var message;
            var token =sessionStorage.getItem('token');
            console.log('token frm :::',token);
            var usertype;
            return $.ajax({
                url: CONFIG.GOURL+'/negotiateClaim',
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
                  if(message === 'claim  negotiated Sucessfully !'){
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
        
        agreeclaim:function(){
            var myclaimno=this.get('claimno');
            console.log('claimno:'+myclaimno);

            var claimno=JSON.stringify(myclaimno)
            console.log("cl:::"+claimno);

             console.log(message);
            var approvedclaim;

            var datastring={
                    "claimno": claimno,
         
            };
            console.log(JSON.stringify(datastring));
            var mycontroller =this;
            var message;
            var token =sessionStorage.getItem('token');
            console.log('token frm :::',token);
            var usertype;
             $.ajax({
                url: CONFIG.GOURL+'/approveClaim',
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
                  /* approvedclaim=response.approvedclaim;
                   console.log("approvedclaim :"+approvedclaim);
                   mycontroller.set('approvedclaim',approvedclaim);*/
                   if(message === 'claim  approved Sucessfully !'){
                       mycontroller.set("showapprovedclaim",true);
                        //mycontroller.toggleProperty('isShowingModal');  

                        $.ajax({
                url: CONFIG.GOURL+'/approveClaimValue',
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
                  approvedclaim=response.approvedclaim;
                   console.log("approvedclaim :"+approvedclaim);
                   mycontroller.set('approvedclaim',approvedclaim);
                   if(message === 'claim  approved Sucessfully !'){
                       mycontroller.set("showapprovedclaim",true);
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
              mycontroller.toggleProperty('isShowingModal');  
              
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
        okbutton:function(){
            this.transitionToRoute('pubadjdashboard');
        }
        
    }

});