import Ember from 'ember';
import CONFIG from 'cm-insurance/config/environment';

export default Ember.Route.extend({
    model() {

        //   this.controllerFor('pubadjdashboard').set('totalnoList', totalnoList);

        var pubadjtoken = sessionStorage.getItem('token');
        console.log('claimadjustertoken from model :' + pubadjtoken);
        this.controllerFor('pubadjdashboard').set('pubadjtoken', pubadjtoken);


        var mycontroller = this;
        $.ajax({
            url: CONFIG.GOURL + '/claim/PublicAdjusterClaims',
            type: 'GET',
            accepts: 'application/json',
            headers: {
                'x-access-token': pubadjtoken,
            },
            success: function(data) {
                console.log(JSON.stringify(data));



                var total = JSON.stringify(data.userClaims.length);
                console.log(total);
                mycontroller.controllerFor('pubadjdashboard').set('total', total);
                var totalnoList = data.userClaims;
                console.log("totalno ::" + totalnoList);
                mycontroller.controllerFor('pubadjdashboard').set('totalnoList', totalnoList);



                var statuscount1 = data.statuscount1;
                if (statuscount1 !== undefined) {
                    console.log("statuscount1 :" + JSON.stringify(statuscount1));
                    if (statuscount1[0].statusname === "Validated") {
                        var Validatedstatuscount = JSON.stringify(statuscount1[0].statuscount);
                        console.log(JSON.stringify(statuscount1[0].statuscount));
                        mycontroller.controllerFor('pubadjdashboard').set('Validatedstatuscount', Validatedstatuscount);
                    }
                } else {

                    var statuscount = data.statuscount;

                    if (statuscount.length !== null) {
                        console.log("statuscount :" + JSON.stringify(statuscount));
                        for (var i = 0; i < statuscount.length; i++) {

                            if (statuscount[i].statusname === "Approved") {
                                var approvedstatuscount = JSON.stringify(statuscount[i].statuscount);
                                console.log(JSON.stringify(statuscount[i].statuscount));
                                mycontroller.controllerFor('pubadjdashboard').set('approvedstatuscount', approvedstatuscount);
                                sessionStorage.setItem('approvedstatuscount', approvedstatuscount);
                            } else if (statuscount[i].statusname === "Examined") {
                                var examinedstatuscount = JSON.stringify(statuscount[i].statuscount);
                                console.log(JSON.stringify(statuscount[i].statuscount));
                                mycontroller.controllerFor('pubadjdashboard').set('examinedstatuscount', examinedstatuscount);

                            } else if (statuscount[i].statusname === "Notified") {
                                var Notifiedstatuscount = JSON.stringify(statuscount[i].statuscount);
                                console.log(JSON.stringify(statuscount[i].statuscount));
                                mycontroller.controllerFor('pubadjdashboard').set('Notifiedstatuscount', Notifiedstatuscount);
                            } else if (statuscount[i].statusname === "Submitted") {
                                var Submittedstatuscount = JSON.stringify(statuscount[i].statuscount);
                                console.log(JSON.stringify(statuscount[i].statuscount));
                                mycontroller.controllerFor('pubadjdashboard').set('Submittedstatuscount', Submittedstatuscount);
                            } else if (statuscount[i].statusname === "Validated") {
                                /* var Validatedstatuscount =JSON.stringify(statuscount[i].statuscount);
                                 console.log(JSON.stringify(statuscount[i].statuscount));
                                  mycontroller.controllerFor('pubadjdashboard').set('Validatedstatuscount', Validatedstatuscount);*/
                            } else if (statuscount[i].statusname === "Settled") {
                                var Settledstatuscount = JSON.stringify(statuscount[i].statuscount);
                                console.log(JSON.stringify(statuscount[i].statuscount));
                                mycontroller.controllerFor('pubadjdashboard').set('Settledstatuscount', Settledstatuscount);
                            }
                            /* else if(statuscount[i].statusname === "Rejected"){
                      var Rejectedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('pubadjdashboard').set('Rejectedstatuscount', Rejectedstatuscount);
              }*/
                            /*else{
                                                  mycontroller.controllerFor('pubadjdashboard').set('Rejectedstatuscount', 0);
                                              }*/
                        }

                    }


                }

                var Average = data.Average;
                console.log("Average :", Average);
                mycontroller.controllerFor('pubadjdashboard').set('Average', Average);
                var Longest = data.Longest;
                console.log("Longest :", Longest);
                mycontroller.controllerFor('pubadjdashboard').set('Longest', Longest);
                var Shortest = data.Shortest;
                console.log("Shortest:", Shortest);
                mycontroller.controllerFor('pubadjdashboard').set('Shortest', Shortest);


                return data;

            },
            error: function(err) {
                console.log(data);
                console.log(err);
                console.log('DEBUG: GET Enquiries Failed');
            }
        });

        /*  $.ajax({
              url: 'http://192.168.0.20:8082/claim/StatusCount',
              type: 'GET',
              accepts: 'application/json',
              headers:{
                 'x-access-token':pubadjtoken,
               } ,
               success: function(data) {
                  console.log("headr part ::"+JSON.stringify(data));

                var statuscount =data.statuscount;
                console.log("statuscount :"+JSON.stringify(statuscount));
                for(var i=0;i < statuscount.length ;i++){

                    if(statuscount[i].statusname === "Approved"){
                        var approvedstatuscount =JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                         mycontroller.controllerFor('pubadjdashboard').set('approvedstatuscount', approvedstatuscount);
                         sessionStorage.setItem('approvedstatuscount', approvedstatuscount);
                    }
                     else if(statuscount[i].statusname === "Examined"){
                        var examinedstatuscount =JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                         mycontroller.controllerFor('pubadjdashboard').set('examinedstatuscount', examinedstatuscount);
                         console.log("acs")
                    }
                    else if(statuscount[i].statusname === "Notified"){
                        var Notifiedstatuscount =JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                         mycontroller.controllerFor('pubadjdashboard').set('Notifiedstatuscount', Notifiedstatuscount);
                    }
                    else if(statuscount[i].statusname === "Submitted"){
                        var Submittedstatuscount =JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                         mycontroller.controllerFor('pubadjdashboard').set('Submittedstatuscount', Submittedstatuscount);
                    }
                   
                  else if(statuscount[i].statusname === "Validated"){
                        var Validatedstatuscount =JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                         mycontroller.controllerFor('pubadjdashboard').set('Validatedstatuscount', Validatedstatuscount);
                    }
                     
                     else if(statuscount[i].statusname === "Settled"){
                        var Settledstatuscount =JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                         mycontroller.controllerFor('pubadjdashboard').set('Settledstatuscount', Settledstatuscount);
                    }
                     else if(statuscount[i].statusname === "Rejected"){
                        var Rejectedstatuscount =JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                         mycontroller.controllerFor('pubadjdashboard').set('Rejectedstatuscount', Rejectedstatuscount);
                    }else{
                        mycontroller.controllerFor('pubadjdashboard').set('Rejectedstatuscount', 0);
                    }

                }
                  
                
                  return data;
                      
              },
              error: function(err) {
                  console.log(data);
                  console.log(err);
                  console.log('DEBUG: GET Enquiries Failed');
              }
          });

          //fetching footer data
          $.ajax({
              url: 'http://192.168.0.20:8082/claim/Footer',
              type: 'GET',
              accepts: 'application/json',
              headers:{
                 'x-access-token':pubadjtoken,
               } ,
               success: function(data) {
                  console.log(JSON.stringify(data));

                 
                  var Average =data.Average;;
                  console.log("Average :"+JSON.stringify(Average));
                  mycontroller.controllerFor('pubadjdashboard').set('Average',JSON.stringify(Average));
                  var Longest =data.Longest;;
                  console.log("Longest :"+JSON.stringify(Longest));
                   mycontroller.controllerFor('pubadjdashboard').set('Longest', JSON.stringify(Longest));
                  var Shortest =data.Shortest;;
                  console.log("Shortest :"+JSON.stringify(Shortest));
                  mycontroller.controllerFor('pubadjdashboard').set('Shortest', JSON.stringify(Shortest));

                 // }
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