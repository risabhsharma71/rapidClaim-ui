import Ember from 'ember';
import CONFIG from 'cm-insurance/config/environment';

export default Ember.Route.extend({
    model(){
        this.controllerFor('examinerdashbord').set('Submittedstatuscount',null);
        var examinertoken = sessionStorage.getItem('token') ;
        console.log('claimadjustertoken from model :' +examinertoken);
        this.controllerFor('examinerdashbord').set('examinertoken', examinertoken);
        
       
        var mycontroller=this;
         $.ajax({
            url: CONFIG.GOURL+'/claim/ExaminerClaims',
            type: 'GET',
            accepts: 'application/json',
            headers:{
               'x-access-token':examinertoken,
             } ,
             success: function(data) {
                console.log(JSON.stringify(data));

                 var total =JSON.stringify(data.userClaims.length);
                console.log(total);
                mycontroller.controllerFor('examinerdashbord').set('total', total);
                var totalnoList =data.userClaims;
                console.log("totalno ::"+totalnoList);
                mycontroller.controllerFor('examinerdashbord').set('totalnoList', totalnoList);
               
              
              var statuscount =data.statuscount;
              console.log("statuscount :"+JSON.stringify(statuscount));
              for(var i=0;i < statuscount.length ;i++){

                  if(statuscount[i].statusname === "Approved"){
                      var approvedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('examinerdashbord').set('approvedstatuscount', approvedstatuscount);
                       sessionStorage.setItem('approvedstatuscount', approvedstatuscount);
                  }
                   else if(statuscount[i].statusname === "Examined"){
                      var examinedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('examinerdashbord').set('examinedstatuscount', examinedstatuscount);
                      
                  }
                  else if(statuscount[i].statusname === "Notified"){
                      var Notifiedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('examinerdashbord').set('Notifiedstatuscount', Notifiedstatuscount);
                  }
                  else if(statuscount[i].statusname === "Submitted"){
                      var Submittedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('examinerdashbord').set('Submittedstatuscount', Submittedstatuscount);
                  }
                 
                else if(statuscount[i].statusname === "Validated"){
                      var Validatedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('examinerdashbord').set('Validatedstatuscount', Validatedstatuscount);
                  }
                   
                   else if(statuscount[i].statusname === "Settled"){
                      var Settledstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('examinerdashbord').set('Settledstatuscount', Settledstatuscount);
                  }
                   else if(statuscount[i].statusname === "Rejected"){
                      var Rejectedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('examinerdashbord').set('Rejectedstatuscount', Rejectedstatuscount);
                  }else{
                      mycontroller.controllerFor('examinerdashbord').set('Rejectedstatuscount', 0);
                  }

              }
               //var Average=data.Average;
                var Average =localStorage.Average;
               console.log("Average :",Average);
               mycontroller.controllerFor('examinerdashbord').set('Average', Average);
              // var Longest=data.Longest;
              var Longest = localStorage.Longest ;
               console.log("Longest :",Longest);
               mycontroller.controllerFor('examinerdashbord').set('Longest', Longest);
              
              // var Shortest=data.Shortest;
                 var Shortest =localStorage.Shortest;
               console.log("Shortest:",Shortest);
               mycontroller.controllerFor('examinerdashbord').set('Shortest', Shortest);

              
                return data;
                    
            },
            error: function(err) {
                console.log(data);
                console.log(err);
                console.log('DEBUG: GET Enquiries Failed');
            }
        });

       /* $.ajax({
            url: 'http://192.168.0.20:8082/claim/StatusCount',
            type: 'GET',
            accepts: 'application/json',
            headers:{
               'x-access-token':examinertoken,
             
             } ,
             success: function(data) {
                console.log("headr part ::"+JSON.stringify(data));

              var statuscount =data.statuscount;
              console.log("statuscount :"+JSON.stringify(statuscount));
              for(var i=0;i < statuscount.length ;i++){

                  if(statuscount[i].statusname === "Approved"){
                      var approvedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('examinerdashbord').set('approvedstatuscount', approvedstatuscount);
                       sessionStorage.setItem('approvedstatuscount', approvedstatuscount);
                  }
                   else if(statuscount[i].statusname === "Examined"){
                      var examinedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('examinerdashbord').set('examinedstatuscount', examinedstatuscount);
                       console.log("acs")
                  }
                  else if(statuscount[i].statusname === "Notified"){
                      var Notifiedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('examinerdashbord').set('Notifiedstatuscount', Notifiedstatuscount);
                  }
                  else if(statuscount[i].statusname === "Submitted"){
                      var Submittedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('examinerdashbord').set('Submittedstatuscount', Submittedstatuscount);
                  }
                 
                else if(statuscount[i].statusname === "Validated"){
                      var Validatedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('examinerdashbord').set('Validatedstatuscount', Validatedstatuscount);
                  }
                   
                   else if(statuscount[i].statusname === "Settled"){
                      var Settledstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('examinerdashbord').set('Settledstatuscount', Settledstatuscount);
                  }
                   else if(statuscount[i].statusname === "Rejected"){
                      var Rejectedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('examinerdashbord').set('Rejectedstatuscount', Rejectedstatuscount);
                  }else{
                      mycontroller.controllerFor('examinerdashbord').set('Rejectedstatuscount', 0);
                  }

              }
                
              
                return data;
                    
            },
            error: function(err) {
                console.log(data);
                console.log(err);
                console.log('DEBUG: GET Enquiries Failed');
            }
        });*/

     /*   $.ajax({
            url: 'http://192.168.0.20:8082/claim/Footer',
            type: 'GET',
            accepts: 'application/json',
            headers:{
               'x-access-token':examinertoken,
             } ,
             success: function(data) {
                console.log("footer :",JSON.stringify(data));

                var Average =data.Average;
             console.log("Average :"+JSON.stringify(Average));
             mycontroller.controllerFor('examinerdashbord').set('Average',JSON.stringify(Average));
              localStorage.Average = Average;
            
            var Longest =data.Longest;
            console.log("Longest :"+JSON.stringify(Longest));
            mycontroller.controllerFor('examinerdashbord').set('Longest', JSON.stringify(Longest));
            var Longest = localStorage.Longest ;

            var Shortest =data.Shortest;
            console.log("Shortest :"+JSON.stringify(Shortest));
            mycontroller.controllerFor('examinerdashbord').set('Shortest', JSON.stringify(Shortest));
            var Shortest = localStorage.Shortest ;
                
                return data;
                    
            },
            error: function(err) {
                console.log(data);
                console.log(err);
                console.log('DEBUG: GET Enquiries Failed');
            }
        });*/

 }
});
