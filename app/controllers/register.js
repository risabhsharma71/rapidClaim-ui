import Ember from 'ember';
import CONFIG from 'cm-insurance/config/environment';
import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    fname: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z]{2,10}$/,
            message: 'This field must be valid first name'
        })
    ],
    lname: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z]{2,10}$/,
            message: 'This field must be a valid last name'
        })
    ],

    email: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],
    password: [
        validator('presence', true),
        validator('length', {
            min: 6,
            max: 10
        }),
        validator('format', {
            regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/,
            message: '{description} must include at least one upper case letter, one lower case letter, and a number'
        }),
        validator('length', {
            isWarning: true,
            min: 6,
            message: 'What kind of weak password is that?'
        })
    ],

    confirmpasswords: [
        validator('confirmation', {
            on: 'password',
            message: 'password do not match'
        })
    ],

    policyno: [
        validator('presence', true),
        validator('format', {
            regex: /^[0-9]{5}$/,
            message: 'This field must be a valid policy Number'
        })
    ],
    phoneno: [
        validator('presence', true),
        validator('format', {
            regex: /^[0-9]{10}$/,
            message: 'This accept only number'
        })
    ],
    licenceno: [
        validator('presence', true),
        validator('format', {
            regex: /^[0-9]{5}$/,
            message: 'This field must be a valid licence Number'
        })
    ]

});

export default Ember.Controller.extend(Validations, {

    isInsurerAuthorize: false,
    isPublicAdjusterAuthorize: false,
    isShowregisterbutton: true,
    isShowingModal: false,
    actions: {
        //to set Insurer registration form
        registerinsurer: function() {
            this.set('isShowregisterbutton', false);
            this.set('isInsurerAuthorize', true);
            this.set('isPublicAdjusterAuthorize', false);

        },
        //to set public adjuster registration form
        registerpublicadjuster: function() {
            this.set('isShowregisterbutton', false);
            this.set('isPublicAdjusterAuthorize', true);
            this.set('isInsurerAuthorize', false);

        },
        //register function for insurer
        insurerRegister: function() {
            var mypassword = this.get('password');
            console.log('password' + mypassword);
            var cnfpaswd = this.get('confirmpasswords');
            console.log('cnfpaswd :' + cnfpaswd);

            let {
                fname,
                lname,
                email,
                phoneno,
                password
            } = this.getProperties('fname', 'lname', 'email', 'phoneno', 'passwords');

            var dataString = {
                "firstname": fname,
                "lastname": lname,
                "email": email,
                "phone": phoneno,
                "password": mypassword
            };
            console.log(JSON.stringify(dataString));
            var mycontroller = this;
            $.ajax({
                url:  CONFIG.GOURL+'/registerUser',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(dataString),
                success: function(response) {
                    console.log("insuccess func");
                    console.log(JSON.stringify(response));
                    var message = response.message
                    console.log(response.message);
                    if (message === "User Registered Sucessfully !") {
                        mycontroller.toggleProperty('isShowingModal');
                    }
                    //  mycontroller.transitionToRoute('home');              

                },
                error: function(result) {
                    console.log('DEBUG: GET Enquiries Failed');
                }
            });


        },

        publicadjusterRegister: function() {
            var mypassword = this.get('password');
            console.log('passwords' + mypassword);
            let {
                fname,
                lname,
                email,
                phoneno,
                licenceno,
                password
            } = this.getProperties('fname', 'lname', 'email', 'phoneno', 'licenceno', 'passwords');

            var dataString = {
                "liscenceid": "1234",
                "firstname": fname,
                "lastname": lname,
                "email": email,
                "phone": phoneno,
                "password": mypassword
            };
            console.log(JSON.stringify(dataString));
            console.log("abc");
            var mycontroller = this;
            $.ajax({
                url:  CONFIG.GOURL+'/registerPublicAdjuster',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(dataString),
                success: function(response) {

                    console.log(JSON.stringify(response));
                    var message = response.message
                    console.log(response.message);
                    if (message === "User Registered Sucessfully !") {
                        mycontroller.toggleProperty('isShowingModal');
                    }

                },
                error: function(result) {
                    console.log('DEBUG: GET Enquiries Failed');
                    console.log("error message" + result.message);
                }
            });


        },
        homeok: function() {
            this.transitionToRoute('home');
            window.location.reload(true);
        }
    }

});