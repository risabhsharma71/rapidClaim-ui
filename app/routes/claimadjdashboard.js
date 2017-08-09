import Ember from 'ember';
import CONFIG from 'cm-insurance/config/environment';
export default Ember.Route.extend({
    model() {


        this.controllerFor('claimadjdashboard').set('examinedstatuscount', null);
        this.controllerFor('claimadjdashboard').set('approvedstatuscount', null);
        this.controllerFor('claimadjdashboard').set('Notifiedstatuscount', null);

        /*  var usertype = sessionStorage.getItem('usertype');
          console.log("usertype abc :"+usertype);
           this.controllerFor('claimadjdashboard').set('usertype', usertype);
           if(usertype === null || usertype === undefined || usertype === ""){
           
               this.controllerFor('application').set('showUser', true);
          }else{
                this.controllerFor('application').set('showUser', false);
          }*/

        var claimadjustertoken = sessionStorage.getItem('token');
        console.log('claimadjustertoken from model :' + claimadjustertoken);
        this.controllerFor('claimadjdashboard').set('claimadjustertoken', claimadjustertoken);

        /* var approvedstatuscount =sessionStorage.getItem('approvedstatuscount') ;
        console.log('claimadjustertoken from model :' +approvedstatuscount);
        this.controllerFor('claimadjdashboard').set('approvedstatuscount', approvedstatuscount);
      */
        var mycontroller = this;
        $.ajax({
            url: CONFIG.GOURL + '/claim/ClaimAdjusterClaims',
            type: 'GET',
            accepts: 'application/json',
            headers: {
                'x-access-token': claimadjustertoken,
            },
            success: function(data) {
                console.log(JSON.stringify(data));

                //  if(status === "Examined" || status === "Notified" || status === "approved"){

                var total = JSON.stringify(data.userClaims.length);
                console.log(total);
                mycontroller.controllerFor('claimadjdashboard').set('total', total);
                var totalnoList = data.userClaims;
                console.log("totalno ::" + totalnoList);
                mycontroller.controllerFor('claimadjdashboard').set('totalnoList', totalnoList);


                var statuscount = data.statuscount;
                console.log("statuscount :" + JSON.stringify(statuscount));
                for (var i = 0; i < statuscount.length; i++) {

                    if (statuscount[i].statusname === "Approved") {
                        var approvedstatuscount = JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                        mycontroller.controllerFor('claimadjdashboard').set('approvedstatuscount', approvedstatuscount);
                        sessionStorage.setItem('approvedstatuscount', approvedstatuscount);
                    } else if (statuscount[i].statusname === "Examined") {
                        var examinedstatuscount = JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                        mycontroller.controllerFor('claimadjdashboard').set('examinedstatuscount', examinedstatuscount);

                    } else if (statuscount[i].statusname === "Notified") {
                        var Notifiedstatuscount = JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                        mycontroller.controllerFor('claimadjdashboard').set('Notifiedstatuscount', Notifiedstatuscount);
                    } else if (statuscount[i].statusname === "Submitted") {
                        var Submittedstatuscount = JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                        mycontroller.controllerFor('claimadjdashboard').set('Submittedstatuscount', Submittedstatuscount);
                    } else if (statuscount[i].statusname === "Validated") {
                        var Validatedstatuscount = JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                        mycontroller.controllerFor('claimadjdashboard').set('Validatedstatuscount', Validatedstatuscount);
                    } else if (statuscount[i].statusname === "Settled") {
                        var Settledstatuscount = JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                        mycontroller.controllerFor('claimadjdashboard').set('Settledstatuscount', Settledstatuscount);
                    } else if (statuscount[i].statusname === "Rejected") {
                        var Rejectedstatuscount = JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                        mycontroller.controllerFor('claimadjdashboard').set('Rejectedstatuscount', Rejectedstatuscount);
                    } else {
                        // mycontroller.controllerFor('claimadjdashboard').set('Rejectedstatuscount', 0);
                    }

                }
                var Average = data.Average;
                console.log("Average :", Average);
                mycontroller.controllerFor('claimadjdashboard').set('Average', Average);
                localStorage.Average = Average;
                console.log("localStorage.Average :", localStorage.Average);

                var Longest = data.Longest;
                console.log("Longest :", Longest);
                mycontroller.controllerFor('claimadjdashboard').set('Longest', Longest);
                localStorage.Longest = Longest;

                var Shortest = data.Shortest;
                console.log("Shortest:", Shortest);
                mycontroller.controllerFor('claimadjdashboard').set('Shortest', Shortest);
                localStorage.Shortest = Shortest;

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
               'x-access-token':claimadjustertoken,
             } ,
             success: function(data) {
                console.log("headr part ::"+JSON.stringify(data));

              var statuscount =data.statuscount;
              console.log("statuscount :"+JSON.stringify(statuscount));

              if(statuscount.length === null || statuscount.length ===undefined || statuscount.length === ""){
                 mycontroller.controllerFor('claimadjdashboard').set('approvedstatuscount', 0);
              }
              else{
              for(var i=0;i < statuscount.length ;i++){

                  if(statuscount[i].statusname === "Approved"){
                      var approvedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log("approvedstatuscount :",JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('claimadjdashboard').set('approvedstatuscount', approvedstatuscount);
                       sessionStorage.setItem('approvedstatuscount', approvedstatuscount);
                  }
                   else if(statuscount[i].statusname === "Examined"){
                      var examinedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('claimadjdashboard').set('examinedstatuscount', examinedstatuscount);
                       console.log("acs")
                  }
                  else if(statuscount[i].statusname === "Notified"){
                      var Notifiedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('claimadjdashboard').set('Notifiedstatuscount', Notifiedstatuscount);
                  }
                  else if(statuscount[i].statusname === "Submitted"){
                      var Submittedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log("Submittedstatuscount :",JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('claimadjdashboard').set('Submittedstatuscount', Submittedstatuscount);
                  }
                 
                else if(statuscount[i].statusname === "Validated"){
                      var Validatedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log("Validatedstatuscount :",JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('claimadjdashboard').set('Validatedstatuscount', Validatedstatuscount);
                  }
                   
                   else if(statuscount[i].statusname === "Settled"){
                      var Settledstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('claimadjdashboard').set('Settledstatuscount', Settledstatuscount);
                  }
                   else if(statuscount[i].statusname === "Rejected"){
                      var Rejectedstatuscount =JSON.stringify(statuscount[i].statuscount);
                      console.log(JSON.stringify(statuscount[i].statuscount));
                       mycontroller.controllerFor('claimadjdashboard').set('Rejectedstatuscount', Rejectedstatuscount);
                  }else{
                      mycontroller.controllerFor('claimadjdashboard').set('Rejectedstatuscount', 0);
                  }

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

    /*    $.ajax({
            url: 'http://192.168.0.20:8082/claim/Footer',
            type: 'GET',
            accepts: 'application/json',
            headers:{
               'x-access-token':claimadjustertoken,
             } ,
             success: function(data) {
                console.log(JSON.stringify(data));

              //  if(status === "Examined" || status === "Notified" || status === "approved"){
                

                var Average =data.Average;;
                console.log("Average :"+JSON.stringify(Average));
                 mycontroller.controllerFor('claimadjdashboard').set('Average',JSON.stringify(Average));
                 localStorage.Average = Average;
                 console.log("localStorage.lastname"+localStorage.lastname);

                var Longest =data.Longest;;
                console.log("Longest :"+JSON.stringify(Longest));
                 mycontroller.controllerFor('claimadjdashboard').set('Longest', JSON.stringify(Longest));
               localStorage.Longest = Longest;

               var Shortest =data.Shortest;;
                console.log("Shortest :"+JSON.stringify(Shortest));
                mycontroller.controllerFor('claimadjdashboard').set('Shortest', JSON.stringify(Shortest));
                 localStorage.Shortest = Shortest;

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