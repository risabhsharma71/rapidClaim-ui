import Ember from 'ember';

export default Ember.Route.extend({
    model(){
          this.controllerFor('pubadjdashboard2').set('isshowclaimform',true);
        this.controllerFor('examinerdashbord2').set('isShowingModals',false);
         this.controllerFor('examinerdashbord2').set('isShowingModal',false);
         
                  this.controllerFor('examinerdashbord2').set('isShowingModal',false);

        var claimno =this.controllerFor('pubadjdashboard').get('claimno');
        console.log("claimno :"+claimno);
        this.controllerFor('pubadjdashboard2').set('claimno',claimno);

        var title =this.controllerFor('pubadjdashboard').get('title');
        console.log("title :"+title);
        this.controllerFor('pubadjdashboard2').set('title',title);

        var damagedetails =this.controllerFor('pubadjdashboard').get('damagedetails');
        console.log("damagedetails :"+damagedetails);
        this.controllerFor('pubadjdashboard2').set('damagedetails',damagedetails);

        var approvedclaim =this.controllerFor('pubadjdashboard').get('approvedclaim');
       console.log("approvedclaim :"+approvedclaim);
       this.controllerFor('pubadjdashboard2').set('approvedclaim',approvedclaim);

        var totaldamagevalue =this.controllerFor('pubadjdashboard').get('totaldamagevalue');
        console.log("totaldamagevalue :"+totaldamagevalue);
        this.controllerFor('pubadjdashboard2').set('totaldamagevalue',totaldamagevalue);
        
        var totalclaimvalue =this.controllerFor('pubadjdashboard').get('totalclaimvalue');
        console.log("totalclaimvalue :"+totalclaimvalue);
        this.controllerFor('pubadjdashboard2').set('totalclaimvalue',totalclaimvalue);
     
        var assesseddamagevalue =this.controllerFor('pubadjdashboard').get('assesseddamagevalue');
        console.log("assesseddamagevalue :"+assesseddamagevalue);
        this.controllerFor('pubadjdashboard2').set('assesseddamagevalue',assesseddamagevalue);

         var assessedclaimvalue =this.controllerFor('pubadjdashboard').get('assessedclaimvalue');
        console.log("assessedclaimvalue :"+assessedclaimvalue);
        this.controllerFor('pubadjdashboard2').set('assessedclaimvalue',assessedclaimvalue);

        var claimadjsterarray =this.controllerFor('pubadjdashboard').get('claimadjsterarray');
        console.log("claimadjsterarray :"+ JSON.stringify(claimadjsterarray));
        this.controllerFor('pubadjdashboard2').set('claimadjsterarray',claimadjsterarray);

        var pubadjusterarray =this.controllerFor('pubadjdashboard').get('pubadjusterarray');
        console.log("pubadjusterarray :"+ JSON.stringify(pubadjusterarray));
        this.controllerFor('pubadjdashboard2').set('pubadjusterarray',pubadjusterarray);
    
         var remark = this.controllerFor('pubadjdashboard').get('remark');
        console.log("remark :"+ JSON.stringify(remark));
        this.controllerFor('pubadjdashboard2').set('remark',remark);

        var notifieddate =this.controllerFor('pubadjdashboard').get('notifieddate');
       console.log("notifieddate :"+notifieddate);
       if (notifieddate === "0001-01-01"){
         this.controllerFor('pubadjdashboard2').set('notifieddate',null);
       }else{
        this.controllerFor('pubadjdashboard2').set('notifieddate',notifieddate);
       }
       
       var submitdate =this.controllerFor('pubadjdashboard').get('submitdate');
       console.log("submitdate :"+submitdate);
       if (submitdate === "0001-01-01"){
         this.controllerFor('pubadjdashboard2').set('submitdate',null);
       }else{
        this.controllerFor('pubadjdashboard2').set('submitdate',submitdate);
       }
       
       var examinedate =this.controllerFor('pubadjdashboard').get('examinedate');
       console.log("examinedate :"+examinedate);
       if (examinedate === "0001-01-01"){
         this.controllerFor('pubadjdashboard2').set('examinedate',null);
       }else{
        this.controllerFor('pubadjdashboard2').set('examinedate',examinedate);
       }
      
       var validatedate =this.controllerFor('pubadjdashboard').get('validatedate');
       console.log("validatedate :"+validatedate);
       if (validatedate === "0001-01-01"){
         this.controllerFor('pubadjdashboard2').set('validatedate',null);
       }else{
        this.controllerFor('pubadjdashboard2').set('validatedate',validatedate);
       }
      
       var approvrdate =this.controllerFor('pubadjdashboard').get('approvrdate');
       console.log("approvrdate :"+approvrdate);
       if (approvrdate === "0001-01-01"){
         this.controllerFor('pubadjdashboard2').set('approvrdate',null);
       }else{
        this.controllerFor('pubadjdashboard2').set('approvrdate',approvrdate);
       }
      
       var settledate =this.controllerFor('pubadjdashboard').get('settledate');
       console.log("settledate :"+settledate);
       if (settledate === "0001-01-01"){
         this.controllerFor('pubadjdashboard2').set('settledate',null);
       }else{
        this.controllerFor('pubadjdashboard2').set('settledate',settledate);
       }
      
       //to footer part  settele time
     /*  var Average =this.controllerFor('pubadjdashboard').get('Average');
      console.log("Average next :"+JSON.parse(Average));
      this.controllerFor('pubadjdashboard2').set('Average',JSON.parse(Average));

      var Longest =this.controllerFor('pubadjdashboard').get('Longest');
      console.log("Average next :"+JSON.parse(Longest));
      this.controllerFor('pubadjdashboard2').set('Longest',JSON.parse(Longest));

      var Shortest =this.controllerFor('pubadjdashboard').get('Shortest');
      console.log("Average next :"+JSON.parse(Shortest));
      this.controllerFor('pubadjdashboard2').set('Shortest',JSON.parse(Shortest));
     */         

/*      var approvedstatuscount =this.controllerFor('pubadjdashboard').get('approvedstatuscount');
      this.controllerFor('pubadjdashboard2').set('approvedstatuscount',approvedstatuscount);

      var examinedstatuscount =this.controllerFor('pubadjdashboard').get('examinedstatuscount');
      this.controllerFor('pubadjdashboard2').set('examinedstatuscount',examinedstatuscount);

      var Notifiedstatuscount =this.controllerFor('pubadjdashboard').get('Notifiedstatuscount');
      this.controllerFor('pubadjdashboard2').set('Notifiedstatuscount',Notifiedstatuscount);

      var Submittedstatuscount =this.controllerFor('pubadjdashboard').get('Submittedstatuscount');
      this.controllerFor('pubadjdashboard2').set('Submittedstatuscount',Submittedstatuscount);

      var Validatedstatuscount =this.controllerFor('pubadjdashboard').get('Validatedstatuscount');
      this.controllerFor('pubadjdashboard2').set('Validatedstatuscount',Validatedstatuscount);

      var Settledstatuscount =this.controllerFor('pubadjdashboard').get('Settledstatuscount');
      this.controllerFor('pubadjdashboard2').set('Settledstatuscount',Settledstatuscount);

      var Rejectedstatuscount =this.controllerFor('pubadjdashboard').get('Rejectedstatuscount');
      this.controllerFor('pubadjdashboard2').set('Rejectedstatuscount',Rejectedstatuscount);        
   */           
            

    }
});
