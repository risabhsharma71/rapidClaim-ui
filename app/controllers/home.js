import Ember from 'ember';
import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    email: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],
    password: {
    description: 'Password',
    validators: [
      validator('presence', true),
      validator('format', {
            regex: /^[a-zA-Z0-9]{6,8}$/,
            message: 'This field must be a Valid Password'
        })
    ],
},
    policyno: [
        validator('presence', true),
        validator('format', {
            regex: /^[0-9]{5}$/,
            message: 'This field must be a valid policy Number'
        })
    ],


});

export default Ember.Controller.extend(Validations,{
   isShowingModal: false,
    email:null,
    password:null,
    userlist: ['Insurer', 'Public-Adjuster', 'Examinar','Claim-Adjuster' ],
    loginaction:null,
    actions: {
       /*toggleModal: function() {
           console.log("Sign: ");
            this.toggleProperty('isShowingModal');            
        
        },
        
        login: function() {
      
            console.log("Action Loginss");
           var email= this.get('email');
           console.log('email'+email);
           this.set('email',null);
           var password=this.get('password');
           console.log('password'+password);
           this.set('password',null);
           var usertype=this.get('selectedtest');
           console.log('selectedtest',usertype);
            
            this.set('loginaction',"Your Login is Done....");
            this.transitionToRoute('login');

        }*/
    }

});