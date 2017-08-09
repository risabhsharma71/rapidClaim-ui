
import Ember from 'ember';
export default Ember.Route.extend({
   model(){

        this.controllerFor('insurerdashboard2').set('isShowingModals',false);
         this.controllerFor('insurerdashboard2').set('isShowingModal',false);
         this.controllerFor('insurerdashboard2').set('claimno',null);

       var claimno =this.controllerFor('insurerdashboard').get('claimno');
       console.log("claimno :"+claimno);
       this.controllerFor('insurerdashboard2').set('claimno',claimno);
     
      var title =this.controllerFor('insurerdashboard').get('title');
       console.log("title :"+title);  
        this.controllerFor('insurerdashboard2').set('title',title); 

       var showformdetails=this.controllerFor('insurerdashboard').get('showformdetails');
       console.log("showformdetails :"+showformdetails);
       this.controllerFor('insurerdashboard2').set('showformdetails',showformdetails);
       
       var showotherformdetails=this.controllerFor('insurerdashboard').get('showotherformdetails');
       console.log("showotherformdetails :"+showotherformdetails);
       this.controllerFor('insurerdashboard2').set('showotherformdetails',showotherformdetails);
       
       var damagecontent =this.controllerFor('insurerdashboard').get('damagedetails');
        console.log("damagecontent :"+damagecontent);
        this.controllerFor('insurerdashboard2').set('damagecontent',damagecontent);
        
      var approvedclaim =this.controllerFor('insurerdashboard').get('approvedclaim');
       console.log("approvedclaim :"+approvedclaim);
       this.controllerFor('insurerdashboard2').set('approvedclaim',approvedclaim);


       var totaldamagevalue =this.controllerFor('insurerdashboard').get('totaldamagevalue');
        console.log("totaldamagevalue :"+totaldamagevalue);
        this.controllerFor('insurerdashboard2').set('totaldamagevalue',totaldamagevalue);
        
        var totalclaimvalue =this.controllerFor('insurerdashboard').get('totalclaimvalue');
        console.log("totalclaimvalue :"+totalclaimvalue);
        this.controllerFor('insurerdashboard2').set('totalclaimvalue',totalclaimvalue);

        var assesseddamagevalue =this.controllerFor('insurerdashboard').get('assesseddamagevalue');
        console.log("assesseddamagevalue :"+assesseddamagevalue);
        this.controllerFor('insurerdashboard2').set('assesseddamagevalue',assesseddamagevalue);

        var assessedclaimvalue =this.controllerFor('insurerdashboard').get('assessedclaimvalue');
        console.log("assessedclaimvalue :"+assessedclaimvalue);
        this.controllerFor('insurerdashboard2').set('assessedclaimvalue',assessedclaimvalue);

        var remark=this.controllerFor('insurerdashboard').get('remark');
        console.log("remark :"+remark);
        this.controllerFor('insurerdashboard2').set('remark',remark); 

       var claimadjsterarray =this.controllerFor('insurerdashboard').get('claimadjsterarray');
        console.log("claimadjsterarray :"+ JSON.stringify(claimadjsterarray));
        this.controllerFor('insurerdashboard2').set('claimadjsterarray',claimadjsterarray);

        var pubadjusterarray =this.controllerFor('insurerdashboard').get('pubadjusterarray');
        console.log("pubadjusterarray :"+ JSON.stringify(pubadjusterarray));
        this.controllerFor('insurerdashboard2').set('pubadjusterarray',pubadjusterarray);


       var notifieddate =this.controllerFor('insurerdashboard').get('notifieddate');
       console.log("notifieddate :"+notifieddate);
       if (notifieddate === "0001-01-01"){
         this.controllerFor('insurerdashboard2').set('notifieddate',null);
       }else{
        this.controllerFor('insurerdashboard2').set('notifieddate',notifieddate);
       }
       
       var submitdate =this.controllerFor('insurerdashboard').get('submitdate');
       console.log("submitdate :"+submitdate);
       if (submitdate === "0001-01-01"){
         this.controllerFor('insurerdashboard2').set('submitdate',null);
       }else{
        this.controllerFor('insurerdashboard2').set('submitdate',submitdate);
       }
       
       var examinedate =this.controllerFor('insurerdashboard').get('examinedate');
       console.log("examinedate :"+examinedate);
       if (examinedate === "0001-01-01"){
         this.controllerFor('insurerdashboard2').set('examinedate',null);
       }else{
        this.controllerFor('insurerdashboard2').set('examinedate',examinedate);
       }
      
       var validatedate =this.controllerFor('insurerdashboard').get('validatedate');
       console.log("validatedate :"+validatedate);
       if (validatedate === "0001-01-01"){
         this.controllerFor('insurerdashboard2').set('validatedate',null);
       }else{
        this.controllerFor('insurerdashboard2').set('validatedate',validatedate);
       }
      
       var approvrdate =this.controllerFor('insurerdashboard').get('approvrdate');
       console.log("approvrdate :"+approvrdate);
       if (approvrdate === "0001-01-01"){
         this.controllerFor('insurerdashboard2').set('approvrdate',null);
       }else{
        this.controllerFor('insurerdashboard2').set('approvrdate',approvrdate);
       }
      
       var settledate =this.controllerFor('insurerdashboard').get('settledate');
       console.log("settledate :"+settledate);
       if (settledate === "0001-01-01"){
         this.controllerFor('insurerdashboard2').set('settledate',null);
       }else{
        this.controllerFor('insurerdashboard2').set('settledate',settledate);
       }
      
    /*  var approvedstatuscount =this.controllerFor('insurerdashboard').get('approvedstatuscount');
      this.controllerFor('insurerdashboard2').set('approvedstatuscount',approvedstatuscount);

      var examinedstatuscount =this.controllerFor('insurerdashboard').get('examinedstatuscount');
      this.controllerFor('insurerdashboard2').set('examinedstatuscount',examinedstatuscount);

      var Notifiedstatuscount =this.controllerFor('insurerdashboard').get('Notifiedstatuscount');
      this.controllerFor('insurerdashboard2').set('Notifiedstatuscount',Notifiedstatuscount);

      var Submittedstatuscount =this.controllerFor('insurerdashboard').get('Submittedstatuscount');
      this.controllerFor('insurerdashboard2').set('Submittedstatuscount',Submittedstatuscount);

      var Validatedstatuscount =this.controllerFor('insurerdashboard').get('Validatedstatuscount');
      this.controllerFor('insurerdashboard2').set('Validatedstatuscount',Validatedstatuscount);

      var Settledstatuscount =this.controllerFor('insurerdashboard').get('Settledstatuscount');
      this.controllerFor('insurerdashboard2').set('Settledstatuscount',Settledstatuscount);

       var Rejectedstatuscount =this.controllerFor('insurerdashboard').get('Rejectedstatuscount');
      this.controllerFor('insurerdashboard2').set('Rejectedstatuscount',Rejectedstatuscount);
*/
        //footer part
        var Average =  localStorage.Average;
        console.log("avg :"+Average);
        this.controllerFor('insurerdashboard2').set('Average', Average);
        var Longest = localStorage.Longest ;
        this.controllerFor('insurerdashboard2').set('Longest', Longest);
        var Shortest =localStorage.Shortest  ;
        this.controllerFor('insurerdashboard2').set('Shortest', Shortest);


   }
});