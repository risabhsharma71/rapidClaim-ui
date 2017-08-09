import Ember from 'ember';

export default Ember.Route.extend({
    model(){
         this.controllerFor('claimadjdashboard2').set('isshowclaimform',true);
         this.controllerFor('examinerdashbord2').set('isShowingModalsss',false);
       
        this.controllerFor('claimadjdashboard2').set("isShowingModalss",false);
        this.controllerFor('claimadjdashboard2').set("isShowingModals",false);
        this.controllerFor('claimadjdashboard2').set("isShowingModal",false);

         var claimadjustertoken = sessionStorage.getItem('token') ;
        console.log('claimadjustertoken from model :' +claimadjustertoken);
        this.controllerFor('claimadjdashboard2').set('claimadjustertoken', claimadjustertoken);

        var claimno =this.controllerFor('claimadjdashboard').get('claimno');
        console.log("claimno :"+claimno);
        this.controllerFor('claimadjdashboard2').set('claimno',claimno);

        var title =this.controllerFor('claimadjdashboard').get('title');
        console.log("title :"+title);
        this.controllerFor('claimadjdashboard2').set('title',title);

        var damagedetails =this.controllerFor('claimadjdashboard').get('damagedetails');
        console.log("damagedetails :"+damagedetails);
        this.controllerFor('claimadjdashboard2').set('damagedetails',damagedetails);

         var approvedclaim =this.controllerFor('claimadjdashboard').get('approvedclaim');
       console.log("approvedclaim :"+approvedclaim);
       this.controllerFor('claimadjdashboard2').set('approvedclaim',approvedclaim);

        var totaldamagevalue =this.controllerFor('claimadjdashboard').get('totaldamagevalue');
        console.log("totaldamagevalue :"+totaldamagevalue);
        this.controllerFor('claimadjdashboard2').set('totaldamagevalue',totaldamagevalue);
        
        var totalclaimvalue =this.controllerFor('claimadjdashboard').get('totalclaimvalue');
        console.log("totalclaimvalue :"+totalclaimvalue);
        this.controllerFor('claimadjdashboard2').set('totalclaimvalue',totalclaimvalue);

        var assesseddamagevalue =this.controllerFor('claimadjdashboard').get('assesseddamagevalue');
        console.log("assesseddamagevalue :"+assesseddamagevalue);
        this.controllerFor('claimadjdashboard2').set('assesseddamagevalue',assesseddamagevalue);

        var assessedclaimvalue =this.controllerFor('claimadjdashboard').get('assessedclaimvalue');
        console.log("assessedclaimvalue :"+assessedclaimvalue);
        this.controllerFor('claimadjdashboard2').set('assessedclaimvalue',assessedclaimvalue);

       var negotiationlist =this.controllerFor('claimadjdashboard').get('negotiationlist');
        console.log("negotiationlist :"+ JSON.stringify(negotiationlist));
        this.controllerFor('claimadjdashboard2').set('negotiationlist',negotiationlist);

        //to show claimadjuster and public ajuster previous negotiation
        var claimadjsterarray =this.controllerFor('claimadjdashboard').get('claimadjsterarray');
        console.log("claimadjsterarray :"+ JSON.stringify(claimadjsterarray));
        this.controllerFor('claimadjdashboard2').set('claimadjsterarray',claimadjsterarray);

        var pubadjusterarray =this.controllerFor('claimadjdashboard').get('pubadjusterarray');
        console.log("pubadjusterarray :"+ JSON.stringify(pubadjusterarray));
        this.controllerFor('claimadjdashboard2').set('pubadjusterarray',pubadjusterarray);

        //to show date according to status 
       var notifieddate =this.controllerFor('claimadjdashboard').get('notifieddate');
       console.log("notifieddate :"+notifieddate);
       if (notifieddate === "0001-01-01"){
         this.controllerFor('claimadjdashboard2').set('notifieddate',null);
       }else{
        this.controllerFor('claimadjdashboard2').set('notifieddate',notifieddate);
       }
       
       var submitdate =this.controllerFor('claimadjdashboard').get('submitdate');
       console.log("submitdate :"+submitdate);
       if (submitdate === "0001-01-01"){
         this.controllerFor('claimadjdashboard2').set('submitdate',null);
       }else{
        this.controllerFor('claimadjdashboard2').set('submitdate',submitdate);
       }
       
       var examinedate =this.controllerFor('claimadjdashboard').get('examinedate');
       console.log("examinedate :"+examinedate);
       if (examinedate === "0001-01-01"){
         this.controllerFor('claimadjdashboard2').set('examinedate',null);
       }else{
        this.controllerFor('claimadjdashboard2').set('examinedate',examinedate);
       }
      
       var validatedate =this.controllerFor('claimadjdashboard').get('validatedate');
       console.log("validatedate :"+validatedate);
       if (validatedate === "0001-01-01"){
         this.controllerFor('claimadjdashboard2').set('validatedate',null);
       }else{
        this.controllerFor('claimadjdashboard2').set('validatedate',validatedate);
       }
      
       var approvrdate =this.controllerFor('claimadjdashboard').get('approvrdate');
       console.log("approvrdate :"+approvrdate);
       if (approvrdate === "0001-01-01"){
         this.controllerFor('claimadjdashboard2').set('approvrdate',null);
       }else{
        this.controllerFor('claimadjdashboard2').set('approvrdate',approvrdate);
       }
      
       var settledate =this.controllerFor('claimadjdashboard').get('settledate');
       console.log("settledate :"+settledate);
       if (settledate === "0001-01-01"){
         this.controllerFor('claimadjdashboard2').set('settledate',null);
       }else{
        this.controllerFor('claimadjdashboard2').set('settledate',settledate);
       }
      
      //to footer part  settele time
   /*   var Average =this.controllerFor('claimadjdashboard').get('Average');
      console.log("Average next :"+JSON.parse(Average));
      this.controllerFor('claimadjdashboard2').set('Average',JSON.parse(Average));

      var Longest =this.controllerFor('claimadjdashboard').get('Longest');
      console.log("Average next :"+JSON.parse(Longest));
      this.controllerFor('claimadjdashboard2').set('Longest',JSON.parse(Longest));

      var Shortest =this.controllerFor('claimadjdashboard').get('Shortest');
      console.log("Average next :"+JSON.parse(Shortest));
      this.controllerFor('claimadjdashboard2').set('Shortest',JSON.parse(Shortest));
*/
    /*  var approvedstatuscount =this.controllerFor('claimadjdashboard').get('approvedstatuscount');
      this.controllerFor('claimadjdashboard2').set('approvedstatuscount',approvedstatuscount);

      var examinedstatuscount =this.controllerFor('claimadjdashboard').get('examinedstatuscount');
      this.controllerFor('claimadjdashboard2').set('examinedstatuscount',examinedstatuscount);

      var Notifiedstatuscount =this.controllerFor('claimadjdashboard').get('Notifiedstatuscount');
      this.controllerFor('claimadjdashboard2').set('Notifiedstatuscount',Notifiedstatuscount);

      var Submittedstatuscount =this.controllerFor('claimadjdashboard').get('Submittedstatuscount');
      this.controllerFor('claimadjdashboard2').set('Submittedstatuscount',Submittedstatuscount);

      var Validatedstatuscount =this.controllerFor('claimadjdashboard').get('Validatedstatuscount');
      this.controllerFor('claimadjdashboard2').set('Validatedstatuscount',Validatedstatuscount);

      var Settledstatuscount =this.controllerFor('claimadjdashboard').get('Settledstatuscount');
      this.controllerFor('claimadjdashboard2').set('Settledstatuscount',Settledstatuscount);

       var Rejectedstatuscount =this.controllerFor('claimadjdashboard').get('Rejectedstatuscount');
      this.controllerFor('claimadjdashboard2').set('Rejectedstatuscount',Rejectedstatuscount);
***/

    }
});
