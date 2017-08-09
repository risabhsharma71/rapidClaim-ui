import Ember from 'ember';
import CONFIG from 'cm-insurance/config/environment';

export default Ember.Route.extend({
    model(){
        
         this.controllerFor('insurerdashboard').set('isShowingrejection', false);
          this.controllerFor('insurerdashboard').set('Notifiedstatuscount', null);
           this.controllerFor('insurerdashboard').set('examinedstatuscount', null);
    var mycontroller = this;
        var insurertoken = this.controllerFor('application').get('insurertoken');
        console.log('message :' +sessionStorage.getItem('insurertoken'));
        this.controllerFor('insurerdashboard').set('insurertoken', insurertoken);
     
        //local storage fo footer which is fetch by other controller
      /*  var Average =  localStorage.Average;
        console.log("avg :"+Average);
        this.controllerFor('insurerdashboard').set('Average', Average);
        var Longest = localStorage.Longest ;
        this.controllerFor('insurerdashboard').set('Longest', Longest);
        var Shortest =localStorage.Shortest  ;
        this.controllerFor('insurerdashboard').set('Shortest', Shortest);*/
        
      //    this.controllerFor('insurerdashboard').set('claimno', null);
      var claimno;
      var status;
      var claimtitle;
         $.ajax({
            url: CONFIG.GOURL+'/claim/UserClaims',
            type: 'GET',
            accepts: 'application/json',
            headers:{
               'x-access-token':insurertoken,
             } ,
             success: function(data) {
                console.log(JSON.stringify(data));

                //var totalno=JSON.stringify(data.userClaims.length);
                var total =JSON.stringify(data.userClaims.length);
                console.log(total);
                mycontroller.controllerFor('insurerdashboard').set('total', total);
                var totalnoList =data.userClaims;
                console.log("totalno ::"+totalnoList);
                mycontroller.controllerFor('insurerdashboard').set('totalnoList', totalnoList);
               
              
              var statuscount =data.statuscount;
              console.log("statuscount :"+JSON.stringify(statuscount));
              for(var i=0;i < statuscount.length ;i++){

                  if(statuscount[i].statusname === "Approved"){
                      var approvedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('insurerdashboard').set('approvedstatuscount', approvedstatuscount);
                      // sessionStorage.setItem('approvedstatuscount', approvedstatuscount);
                  }
                   else if(statuscount[i].statusname === "Examined"){
                      var examinedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('insurerdashboard').set('examinedstatuscount', examinedstatuscount);
                      
                  }
                  else if(statuscount[i].statusname === "Notified"){
                      var Notifiedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('insurerdashboard').set('Notifiedstatuscount', Notifiedstatuscount);
                  }
                  else if(statuscount[i].statusname === "Submitted"){
                      var Submittedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('insurerdashboard').set('Submittedstatuscount', Submittedstatuscount);
                  }
                 
                else if(statuscount[i].statusname === "Validated"){
                      var Validatedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('insurerdashboard').set('Validatedstatuscount', Validatedstatuscount);
                  }
                   
                   else if(statuscount[i].statusname === "Settled"){
                      var Settledstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('insurerdashboard').set('Settledstatuscount', Settledstatuscount);
                  }
                   else if(statuscount[i].statusname === "Rejected"){
                      var Rejectedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('insurerdashboard').set('Rejectedstatuscount', Rejectedstatuscount);
                  }

              }
               var Average=data.Average;
               console.log("Average :",Average);
               mycontroller.controllerFor('insurerdashboard').set('Average', Average);
               var Longest=data.Longest;
               console.log("Longest :",Longest);
               mycontroller.controllerFor('insurerdashboard').set('Longest', Longest);
               var Shortest=data.Shortest;
               console.log("Shortest:",Shortest);
               mycontroller.controllerFor('insurerdashboard').set('Shortest', Shortest);

              
                return data;
                    
            },
            error: function(err) {
                console.log(data);
                console.log(err);
                console.log('DEBUG: GET Enquiries Failed');
            }
        });
    }
});
