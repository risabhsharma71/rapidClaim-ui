import Ember from 'ember';
import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    title: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z]{4,15}$/,
            message: 'This field must be a valid title'
        })
    ],
    password: {
    description: 'Password',
    validators: [
      validator('presence', true),
      validator('length', {
      })
    ],
    }

});

export default Ember.Controller.extend(Validations,{

    isShowingModal:false,
    actions:{
        insurerform: function(){
            console.log('abc');
             this.toggleProperty('isShowingModal');           
        },
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
                url:'http://192.168.0.20:8082/notifyClaim',
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
                    token=response.token;
                    console.log("token"+token);
                    usertype = response.usertype;
                    
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