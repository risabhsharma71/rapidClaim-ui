import Ember from 'ember';
import CONFIG from 'cm-insurance/config/environment';


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
                message: 'This field must be a Valid Password (minimum 6 digits required)'
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

export default Ember.Controller.extend(Validations, {


    showUser: false,
    isShowingModal: false,
    isinsurer: false,
    isothers: false,
    isshowalways: true,
    insurerloginactiondone: false,
    examinerloginactiondone: false,
    claimadjusterloginactiondone: false,
    publicadjusterloginactiondone: false,
    showerrormsg:false,
    email: null,
    password: null,
    insurershow: false,
    userlist: ['Insurer', 'Public-Adjuster', 'Examinar', 'Claim-Adjuster'],
    loginaction: null,
    //showUser:false,

    actions: {
        //for pop-up modal
        toggleModal: function() {

            this.toggleProperty('isShowingModal');
        },
        //for showing insurer login
        iminsurer: function() {

            this.set("iminsurer", true);
            this.set("isothers", false);
            this.set("isshowalways", false);
        },
        imothers: function() {
            this.set("iminsurer", false);
            this.set("isothers", true);
            this.set("isshowalways", false);
        },
        login: function(arg1, arg2, arg3) {
            var email = this.get('email');
            var password = this.get('password');
            var policyno = this.get('policyno');
            console.log('policyno' + policyno);


            if (policyno === null || policyno === "" || policyno === undefined) {
                let {
                    email,
                    password
                } = this.getProperties('email', 'password');

                //to check field are blank or not
                if (email === null || email === undefined || email === "" || password === null || password === undefined || password === "") {
                    alert("please fill details for login");
                } else {

                    var datastring = {
                        "email": email,
                        "password": password
                    };
                    console.log(JSON.stringify(datastring));
                    console.log(CONFIG.GOURL);
                    var mycontroller = this;
                    var message;
                    var token;
                    var usertype;
                    return $.ajax({
                        url: CONFIG.GOURL +'/login',
                        type: 'POST',
                        contentType: 'application/json',
                        data: JSON.stringify(datastring),
                        success: function(response) {
                            console.log(JSON.stringify(response));
                            message = response.message;
                            console.log("message" + message);
                            token = response.token;
                            console.log("token" + token);
                            sessionStorage.setItem('token', token);
                            usertype = response.usertype;
                            console.log("usertype :" + usertype);
                            sessionStorage.setItem('usertype', usertype);
                            if (usertype === "examiner") {
                                mycontroller.set('examinerloginactiondone', true);
                                mycontroller.set('isothers', false);
                                mycontroller.send('gotoexaminer');
                                mycontroller.set('usertype',"Examiner");
                                mycontroller.set('showUser', true);
                            } else if (usertype === "claimadjuster") {
                                mycontroller.set('claimadjusterloginactiondone', true);
                                mycontroller.set('isothers', false);
                                mycontroller.send('gotoclaimadjuster');
                                mycontroller.set('usertype',"ClaimAdjuster");
                                mycontroller.set('showUser', true);
                            } else if (usertype === "publicadjuster") {
                                mycontroller.set('publicadjusterloginactiondone', true);
                                mycontroller.set('isothers', false);
                                mycontroller.send('gotopublicdjuster');
                                mycontroller.set('usertype',"PublicAdjuster");
                                mycontroller.set('showUser', true);
                            }


                        },
                        error: function(response) {
                            console.log('DEBUG: GET Enquiries Failed');
                            console.log(JSON.stringify(response));
                            var errmsg = response.responseJSON.message;
                            console.log("Error Message: " + errmsg);
                            if(errmsg === "Invalid Credentials emailid or password must be incorrect!"){
                                alert("Your Email id or Password is Incorrect");
                                //mycontroller.set("showerrormsg",true);
                                // mycontroller.set('isothers', false);
                            }
                        }
                    });
                }

            } else {
                let {
                    email,
                    password,
                    policyno
                } = this.getProperties('email', 'password', 'policyno');

                var datastring = {
                    "email": email,
                    "password": password,
                    "policyno": policyno
                }
                if (email === null || email === undefined || email === "" || password === null || password === undefined || password === "" || policyno === null || policyno === "" || policyno === undefined) {
                    alert("Please fill details for login");
                } else {
                    console.log(JSON.stringify(datastring));
                    var mycontroller = this;
                    var message;
                    var insurertoken;
                    var usertype;
                    return $.ajax({
                        url:  CONFIG.GOURL +'/login',
                        type: 'POST',
                        contentType: 'application/json',
                        data: JSON.stringify(datastring),
                        success: function(response) {
                            console.log(JSON.stringify(response));
                            message = response.message;
                            console.log("message" + message);
                            insurertoken = response.token;
                            console.log("token" + insurertoken);
                            sessionStorage.setItem('insurertoken', insurertoken);
                            usertype = response.usertype;
                               sessionStorage.setItem('usertype', usertype);
                            if (usertype === "insured") {
                                mycontroller.set('insurerloginactiondone', true);
                                mycontroller.set('iminsurer', false);
                                mycontroller.send('gotoinsurer');
                                 mycontroller.set('usertype',"Insured");
                                mycontroller.set('showUser', true);
                            }
                            mycontroller.set('insurertoken', insurertoken);
                        },
                        error: function(response) {
                            console.log('DEBUG: GET Enquiries Failed');
                            console.log(JSON.stringify(response));
                            var errmsg = response.responseJSON.message;
                            console.log("Error Message: " + errmsg);
                            if(errmsg === "Invalid Credentials emailid or password must be incorrect!"){
                                alert("Your Email id or Password is Incorrect");
                                //mycontroller.set("showerrormsg",true);
                                // mycontroller.set('isothers', false);
                            }
                        }
                    });

                }
            }


        },
        backtohome: function() {
            this.set('isShowingModal', false);
            this.transitionToRoute('dashboard1');
        },
        gotoinsurer: function() {
            this.set('isShowingModal', false);
            this.set('insurerloginactiondone', false);
            this.transitionToRoute('insurerdashboard');
        },
        gotoexaminer: function() {
            this.set('isShowingModal', false);
            this.set('examinerloginactiondone', false);
            this.transitionToRoute('examinerdashbord');
        },
        gotoclaimadjuster: function() {
            this.set('isShowingModal', false);
            this.set('claimadjusterloginactiondone', false);
            this.transitionToRoute('claimadjdashboard');
        },
        gotopublicdjuster: function() {
            this.set('isShowingModal', false);
            this.set('publicadjusterloginactiondone', false);
            this.transitionToRoute('pubadjdashboard');
        },
        logout: function() {
            console.log("logout")
            sessionStorage.removeItem('usertype');
            sessionStorage.removeItem('token');
            window.location.reload(true);
        }
    }
});