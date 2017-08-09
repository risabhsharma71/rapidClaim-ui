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
      validator('length', {
      })
    ],
    }

});

export default Ember.Controller.extend(Validations,{
   
    isShowingModal: false,
    email:null,
    password:null,
    userlist: ['Insurer', 'Public-Adjuster', 'Examinar','Claim-Adjuster' ],
    actions: {
       
    }
});