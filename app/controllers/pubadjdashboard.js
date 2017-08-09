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

export default Ember.Controller.extend(Validations,{
    isshowclaimform:false,
    claimno:null,
    title:null,
    actions:{
   
         claimaction:function(claimno,status,title,damagedetails,totaldamagevalue,totalclaimvalue,remark,assesseddamagevalue,assessedclaimvalue,negotiationlist,claimnotifieddate,claimsubmitteddate,claimexamineddate,claimvalidateddate,claimapproveddate,claimsettleddate,approvedclaim){
                var claimno =claimno ;
                console.log("claimno ::::",claimno);
                this.set("claimno",claimno);
                 var status =status ;
                 console.log("status ::::",status);
                 this.set("status",status);

                  var title =title ;
                 console.log("title ::::",title);
                 this.set("title",title);

                 var damagedetails =damagedetails ;
                 console.log("damagedetails ::::",damagedetails);
                 this.set("damagedetails",damagedetails);
                
                var totaldamagevalue =totaldamagevalue;
                console.log("totaldamagevalue ::::",totaldamagevalue);
                this.set("totaldamagevalue",totaldamagevalue);
               
                var totalclaimvalue =totalclaimvalue;
                console.log("totalclaimvalue ::::",totalclaimvalue);
                this.set("totalclaimvalue",totalclaimvalue);

                var remark =remark;
                console.log("remark ::::",remark);
                this.set("remark",remark);

                 
                 var assesseddamagevalue =assesseddamagevalue;
                 console.log("assesseddamagevalue ::",assesseddamagevalue);
                 this.set("assesseddamagevalue",assesseddamagevalue);

                  var assessedclaimvalue =assessedclaimvalue;
                 console.log("assessedclaimvalue ::",assessedclaimvalue);
                 this.set("assessedclaimvalue",assessedclaimvalue);


                 this.set("negotiationlist",negotiationlist);
                 var negotiation =[];
                var evenarray =[];
                var oddarray =[];
                negotiation =negotiationlist;
                console.log("negotiation :::::"+JSON.stringify(negotiation));
              console.log("negotiation.length  ::"+negotiation );

                 var notifieddate =claimnotifieddate.substr(0,10);
                 console.log(notifieddate);
                 
                 var submitdate =claimsubmitteddate.substr(0,10);
                 console.log(submitdate);
                 
                 var examinedate =claimexamineddate.substr(0,10);
                 console.log(examinedate);
                 
                 var validatedate =claimvalidateddate.substr(0,10);
                 console.log(validatedate);

                 var approvrdate =claimapproveddate.substr(0,10);
                 console.log(approvrdate);
                  
                 var settledate =claimsettleddate.substr(0,10); 
                 console.log(settledate);

               /* var negotiation =[];
                var evenarray =[];
                var oddarray =[];
                negotiation =negotiationlist;
                console.log("negotiation :::::"+JSON.stringify(negotiation));
              console.log("negotiation.length  ::"+negotiation );*/
              if(negotiation === null){
                  console.log("my if loop");
                this.set("approvedclaim",null);
                   this.set("notifieddate",notifieddate);
                this.set("submitdate",submitdate);
                this.set("examinedate",examinedate);
                this.set("validatedate",validatedate);
                this.set("approvrdate",approvrdate);
                this.set("settledate",settledate);
         

              }else{
                for(var i=0 ;i <negotiation.length;i++)
                {
                    if( (i+2)%2 == 0){
                        //evenarray[i] =negotiation[i];
                         evenarray.push(negotiation[i]);
                        console.log("evenarray :"+JSON.stringify(evenarray));
                        this.set("claimadjsterarray",evenarray);
                    }else{
                        //console.log("negotiation 1: "+ negotiation[1]);
                        //oddarray[i] =negotiation[i];
                         oddarray.push(negotiation[i]);
                        console.log("oddarray :"+JSON.stringify(oddarray));
                        this.set("pubadjusterarray",oddarray);
                    }
                }
                
                this.set("approvedclaim",approvedclaim);
                this.set("notifieddate",notifieddate);
                this.set("submitdate",submitdate);
                this.set("examinedate",examinedate);
                this.set("validatedate",validatedate);
                this.set("approvrdate",approvrdate);
                this.set("settledate",settledate);
               
              }

                this.transitionToRoute('pubadjdashboard2');
        }
    }

});