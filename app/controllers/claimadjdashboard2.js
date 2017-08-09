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
                message: 'This field must be a Valid Password'
            })
        ],
    },
});

export default Ember.Controller.extend(Validations, {

    isshowclaimform: false,
    nextajaxcall: false,
    isShowapprovedclaim:false,
    actions: {
        //action on negotiation button
        negotiationsubmit: function() {

            var myclaimno = this.get('claimno');
            console.log('claimno:' + myclaimno);

            var claimno = JSON.stringify(myclaimno)
            console.log("cl:::" + claimno);

            let {

                negotiation1,
                basis
            } = this.getProperties('negotiation1', 'basis');

            var datastring = {
                "claimno": claimno,
                "negotiationamount": negotiation1,
                "asperterm2B": basis,


            };
            console.log(JSON.stringify(datastring));
            var mycontroller = this;
            var message;
            var token = sessionStorage.getItem('token');
            console.log('token frm :::', token);
            var usertype;
            return $.ajax({
                url: CONFIG.GOURL+'/negotiateClaim',
                type: 'POST',

                headers: {
                    'x-access-token': token
                },
                contentType: 'application/json',
                data: JSON.stringify(datastring),
                success: function(response) {
                    console.log(JSON.stringify(response));
                    message = response.message;
                    console.log("message" + message);
                    if (message === 'claim  negotiated Sucessfully !') {
                        console.log("in if loop");
                        mycontroller.toggleProperty('isShowingModal');
                        //mycontroller.set("showotherformdetails",true);
                    }

                },
                error: function(response) {
                    console.log('DEBUG: GET Enquiries Failed');
                    console.log(JSON.stringify(response));
                    var errmsg = response.responseJSON.message;
                    console.log("Error Message: " + errmsg);
                }
            });

        },

        okbutton: function() {
            this.set("isShowingModal", false);
            this.set("isShowingModals", false);
            this.set("isShowingModalss", false);
            this.transitionToRoute('claimadjdashboard');
        },

        agreeclaimadjuster: function() {

            var myclaimno = this.get('claimno');
            console.log('claimno:' + myclaimno);

            var claimno = JSON.stringify(myclaimno)
            //console.log("cl:::" + claimno);

            var datastring = {
                "claimno": claimno,

            };
            console.log(JSON.stringify(datastring));
            var mycontroller = this;
            var approvedclaim;
            var message;
            var token = sessionStorage.getItem('token');
            console.log('token frm :::', token);
            var usertype;
            $.ajax({
                url: CONFIG.GOURL+'/approveClaim',
                type: 'POST',

                headers: {
                    'x-access-token': token
                },
                contentType: 'application/json',
                data: JSON.stringify(datastring),
                success: function(response) {
                    console.log(JSON.stringify(response));
                    message = response.message;
                    console.log("message" + message);
                    /* approvedclaim=response.approvedclaim;
                       console.log("approvedclaim :"+approvedclaim);
                       mycontroller.set('approvedclaim',approvedclaim);*/
                    if (message === 'claim  approved Sucessfully !') {
                        mycontroller.set("showapprovedclaim", true);
                       mycontroller.toggleProperty('isShowingModals',true);
                       

                        //inside ajax call to get approve-claim value
                        $.ajax({
                            url: CONFIG.GOURL+'/approveClaimValue',
                            type: 'POST',

                            headers: {
                                'x-access-token': token
                            },
                            contentType: 'application/json',
                            data: JSON.stringify(datastring),
                            success: function(response) {
                                console.log(JSON.stringify(response));
                                message = response.message;
                                console.log("message" + message);
                                approvedclaim = response.approvedclaim;
                                console.log("approvedclaim :" + approvedclaim);
                                mycontroller.set('approvedclaim', approvedclaim);
                                if (message === 'claim  approved Sucessfully !') {
                                    mycontroller.set("isShowapprovedclaim", true);
                                    mycontroller.toggleProperty('isShowapprovedclaim');
                                    //mycontroller.set("showotherformdetails",true);
                                }

                            },
                            error: function(response) {
                                console.log('DEBUG: GET Enquiries Failed');
                                console.log(JSON.stringify(response));
                                var errmsg = response.responseJSON.message;
                                console.log("Error Message: " + errmsg);
                            }
                        });
                         mycontroller.toggleProperty('isShowapprovedclaim');
                    }

                },
                error: function(response) {
                    console.log('DEBUG: GET Enquiries Failed');
                    console.log(JSON.stringify(response));
                    var errmsg = response.responseJSON.message;
                    console.log("Error Message: " + errmsg);
                }
            });

        },
        paymentsubmit: function() {

            var myclaimno = this.get('claimno');
            console.log('claimno:' + myclaimno);

            var claimno = JSON.stringify(myclaimno)
            console.log("cl:::" + claimno);

            var datastring = {
                "claimno": claimno,

            };
            console.log(JSON.stringify(datastring));
            var mycontroller = this;
            var message;
            var token = sessionStorage.getItem('token');
            console.log('token frm :::', token);
            var usertype;
            return $.ajax({
                url: CONFIG.GOURL+'/settleClaim',
                type: 'POST',

                headers: {
                    'x-access-token': token
                },
                contentType: 'application/json',
                data: JSON.stringify(datastring),
                success: function(response) {
                    console.log(JSON.stringify(response));
                    message = response.message;
                    console.log("message" + message);

                    if (message === 'claim  settled Sucessfully !') {

                        mycontroller.toggleProperty('isShowingModalss');
                        //mycontroller.set("showotherformdetails",true);
                    }

                },
                error: function(response) {
                    console.log('DEBUG: GET Enquiries Failed');
                    console.log(JSON.stringify(response));
                    var errmsg = response.responseJSON.message;
                    console.log("Error Message: " + errmsg);
                }
            });



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
                url:CONFIG.GOURL+'/rejectClaim',
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
                        mycontroller.toggleProperty('isShowingModalsss');  
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