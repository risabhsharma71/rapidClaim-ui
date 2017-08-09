import Ember from 'ember';
import CONFIG from 'cm-insurance/config/environment';
export default Ember.Controller.extend({
    claimno:null,
    title:null,
    details:null,
    approvedclaim:null,
    newclaimunable:false,
    isgetclaim:false,
    showformdetails:false,
    isShowingrejection:false,
    actions:{
        newclaim:function(){
            this.set("claimno",null);
           this.set("title",null);
            this.set("details",null);
            this.set("approvedclaim",null);
                this.set("totaldamagevalue",null);
                this.set("totalclaimvalue",null);
                this.set("assesseddamagevalue",null);
                this.set("assessedclaimvalue",null);
                this.set("negotiationlist",null);
           this.set("showformdetails",true);
           this.set("showotherformdetails",false);
            this.transitionToRoute('insurerdashboard2');
           
        },

       /* getclaim:function(){
            this.set('isgetclaim',true);

            var data;
        var token = sessionStorage.getItem('insurertoken');
        console.log(token);
        var mycontroller =this;
        var claimno;
        var status;
        var claimtitle;
        var claims=[];
        return $.ajax({
            url: 'http://192.168.0.20:8082/claim/UserClaims',
            type: 'GET',
            accepts: 'application/json',
            headers:{
               'x-access-token':token,
             } ,
             success: function(data) {
                console.log(JSON.stringify(data));

                //var totalno=JSON.stringify(data.userClaims.length);
                var totalnoList = JSON.stringify(data.userClaims);
                console.log("totalno ::"+totalnoList);
              /* for(var i=0;i< totalno ;i++){
                   claimno=JSON.stringify(data.userClaims[i].claimno);
                   console.log("clamino"+claimno);
                    mycontroller.set('claimno ::',claimno);

                status =JSON.stringify(data.userClaims[i].status);
                console.log("status"+status);
                mycontroller.set('claimstatus',status);

                claimtitle=JSON.stringify(data.userClaims[i].title);
                console.log(" claim title :"+claimtitle);
                 mycontroller.set('claimtitle',claimtitle);
                    
               }

              
                //return data;
                    
            },
            error: function(err) {
                console.log(data);
                console.log(err);
                console.log('DEBUG: GET Enquiries Failed');
            }
        });
    },*/
     claimaction:function(claimno,status,title,damagedetails,totaldamagevalue,totalclaimvalue,remark,assesseddamagevalue,assessedclaimvalue,negotiationlist,claimnotifieddate,claimsubmitteddate,claimexamineddate,claimvalidateddate,claimapproveddate,claimsettleddate,approvedclaim){
                var claimno =claimno ;
                console.log("claimno ::::",claimno);
                this.set("claimno",claimno);
                 var status =status ;
                 console.log("status ::::",status);
                 if(status === "Rejected"){
                    // alert("Remark :"+remark);
                // alert("You have to again Submit Your Claim with Proper Documents ...!!!!");
              
              this.toggleProperty('isShowingrejection');
              var remark =remark;
                console.log("remark ::::",remark);
                this.set("remark",remark);
             }else{
                 this.set("status",status);

                  var title =title ;
                 console.log("status ::::",title);
                 this.set("title",title);

                 var damagedetails =damagedetails ;
                 console.log("status ::::",damagedetails);
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
              if(status === "Notified" || status === "Submitted" || status === "Examined"){} 
              if(negotiation === null){
                  console.log("my if loop");
                   this.set("showformdetails",false);
           this.set("showotherformdetails",true);
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
                       
                         oddarray.push(negotiation[i]);
                        console.log("oddarray :"+JSON.stringify(oddarray));
                        this.set("pubadjusterarray",oddarray);
                    }
                }
                 this.set("showformdetails",false);
                this.set("showotherformdetails",true);
                this.set("approvedclaim",approvedclaim);
                this.set("notifieddate",notifieddate);
                this.set("submitdate",submitdate);
                this.set("examinedate",examinedate);
                this.set("validatedate",validatedate);
                this.set("approvrdate",approvrdate);
                this.set("settledate",settledate);
               
              }
                this.transitionToRoute('insurerdashboard2');
                 }   
        },
        toggleModal:function(){
         this.toggleProperty("isShowingrejection");
    }
    }    
});