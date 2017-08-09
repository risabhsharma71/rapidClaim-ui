import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        this.controllerFor('examinerdashbord2').set('isshowclaimform',true);
        this.controllerFor('examinerdashbord2').set('isShowingModals',false);
         this.controllerFor('examinerdashbord2').set('isShowingModal',false);

        var examinertoken = sessionStorage.getItem('token') ;
        console.log('token from examinerdash 2:::: :' +examinertoken);
        this.controllerFor('examinerdashbord2').set('examinertoken', examinertoken);

        var claimno =this.controllerFor('examinerdashbord').get('claimno');
        console.log("claimno :"+claimno);
        this.controllerFor('examinerdashbord2').set('claimno',claimno);

        var title =this.controllerFor('examinerdashbord').get('title');
        console.log("title :"+title);
        this.controllerFor('examinerdashbord2').set('title',title);

        var damagedetails =this.controllerFor('examinerdashbord').get('damagedetails');
        console.log("damagedetails :"+damagedetails);
        this.controllerFor('examinerdashbord2').set('damagedetails',damagedetails);

        var totaldamagevalue =this.controllerFor('examinerdashbord').get('totaldamagevalue');
        console.log("totaldamagevalue :"+totaldamagevalue);
        this.controllerFor('examinerdashbord2').set('totaldamagevalue',totaldamagevalue);
        
        var totalclaimvalue =this.controllerFor('examinerdashbord').get('totalclaimvalue');
        console.log("totalclaimvalue :"+totalclaimvalue);
        this.controllerFor('examinerdashbord2').set('totalclaimvalue',totalclaimvalue);

        var remark=this.controllerFor('examinerdashbord').get('remark');
        console.log("remark :"+remark);
        this.controllerFor('examinerdashbord2').set('remark',remark); 

        var assesseddamagevalue =this.controllerFor('examinerdashbord').get('assesseddamagevalue');
        console.log("assesseddamagevalue :"+assesseddamagevalue);
        this.controllerFor('examinerdashbord2').set('assesseddamagevalue',assesseddamagevalue);

        var assessedclaimvalue =this.controllerFor('examinerdashbord').get('assessedclaimvalue');
        console.log("assessedclaimvalue :"+assessedclaimvalue);
        this.controllerFor('examinerdashbord2').set('assessedclaimvalue',assessedclaimvalue);

        var claimadjsterarray =this.controllerFor('examinerdashbord').get('claimadjsterarray');
        console.log("claimadjsterarray :"+ JSON.stringify(claimadjsterarray));
        this.controllerFor('examinerdashbord2').set('claimadjsterarray',claimadjsterarray);

        var pubadjusterarray =this.controllerFor('examinerdashbord').get('pubadjusterarray');
        console.log("pubadjusterarray :"+ JSON.stringify(pubadjusterarray));
        this.controllerFor('examinerdashbord2').set('pubadjusterarray',pubadjusterarray);

        var approvedclaim =this.controllerFor('examinerdashbord').get('approvedclaim');
        console.log("approvedclaim :"+ JSON.stringify(approvedclaim));
        this.controllerFor('examinerdashbord2').set('approvedclaim',approvedclaim);


        var notifieddate =this.controllerFor('examinerdashbord').get('notifieddate');
       console.log("notifieddate :"+notifieddate);
       if (notifieddate === "0001-01-01"){
         this.controllerFor('examinerdashbord2').set('notifieddate',null);
       }else{
        this.controllerFor('examinerdashbord2').set('notifieddate',notifieddate);
       }
       
       var submitdate =this.controllerFor('examinerdashbord').get('submitdate');
       console.log("submitdate :"+submitdate);
       if (submitdate === "0001-01-01"){
         this.controllerFor('examinerdashbord2').set('submitdate',null);
       }else{
        this.controllerFor('examinerdashbord2').set('submitdate',submitdate);
       }
       
       var examinedate =this.controllerFor('examinerdashbord').get('examinedate');
       console.log("examinedate :"+examinedate);
       if (examinedate === "0001-01-01"){
         this.controllerFor('examinerdashbord2').set('examinedate',null);
       }else{
        this.controllerFor('examinerdashbord2').set('examinedate',examinedate);
       }
      
       var validatedate =this.controllerFor('examinerdashbord').get('validatedate');
       console.log("validatedate :"+validatedate);
       if (validatedate === "0001-01-01"){
         this.controllerFor('examinerdashbord2').set('validatedate',null);
       }else{
        this.controllerFor('examinerdashbord2').set('validatedate',validatedate);
       }
      
       var approvrdate =this.controllerFor('examinerdashbord').get('approvrdate');
       console.log("approvrdate :"+approvrdate);
       if (approvrdate === "0001-01-01"){
         this.controllerFor('examinerdashbord2').set('approvrdate',null);
       }else{
        this.controllerFor('examinerdashbord2').set('approvrdate',approvrdate);
       }
      
       var settledate =this.controllerFor('examinerdashbord').get('settledate');
       console.log("settledate :"+settledate);
       if (settledate === "0001-01-01"){
         this.controllerFor('examinerdashbord2').set('settledate',null);
       }else{
        this.controllerFor('examinerdashbord2').set('settledate',settledate);
       }
      
      //to footer part  settele time
   /*    var Average =this.controllerFor('examinerdashbord').get('Average');
      console.log("Average next :"+JSON.parse(Average));
      this.controllerFor('examinerdashbord2').set('Average',JSON.parse(Average));

      var Longest =this.controllerFor('examinerdashbord').get('Longest');
      console.log("Average next :"+JSON.parse(Longest));
      this.controllerFor('examinerdashbord2').set('Longest',JSON.parse(Longest));

      var Shortest =this.controllerFor('examinerdashbord').get('Shortest');
      console.log("Average next :"+JSON.parse(Shortest));
      this.controllerFor('examinerdashbord2').set('Shortest',JSON.parse(Shortest));
       */ 

    /*    var approvedstatuscount =this.controllerFor('examinerdashbord').get('approvedstatuscount');
      this.controllerFor('examinerdashbord2').set('approvedstatuscount',approvedstatuscount);

      var examinedstatuscount =this.controllerFor('examinerdashbord').get('examinedstatuscount');
      this.controllerFor('examinerdashbord2').set('examinedstatuscount',examinedstatuscount);

      var Notifiedstatuscount =this.controllerFor('examinerdashbord').get('Notifiedstatuscount');
      this.controllerFor('examinerdashbord2').set('Notifiedstatuscount',Notifiedstatuscount);

      var Submittedstatuscount =this.controllerFor('examinerdashbord').get('Submittedstatuscount');
      this.controllerFor('examinerdashbord2').set('Submittedstatuscount',Submittedstatuscount);

      var Validatedstatuscount =this.controllerFor('examinerdashbord').get('Validatedstatuscount');
      this.controllerFor('examinerdashbord2').set('Validatedstatuscount',Validatedstatuscount);

      var Settledstatuscount =this.controllerFor('claimadjdashboard').get('Settledstatuscount');
      this.controllerFor('examinerdashbord2').set('Settledstatuscount',Settledstatuscount);

       var Rejectedstatuscount =this.controllerFor('examinerdashbord').get('Rejectedstatuscount');
      this.controllerFor('examinerdashbord2').set('Rejectedstatuscount',Rejectedstatuscount);
      */
    }
});
