import Ember from 'ember';

export default Ember.Route.extend({
    model(){
          this.controllerFor('home').set('showUser', false);

           var usertype = sessionStorage.getItem('usertype');
        console.log("usertype abc home :"+usertype);
        //this.controllerFor('application').set('usertype', usertype);
        var token =sessionStorage.getItem('token');
        console.log("usertype abc :"+token);

      if(usertype === null || usertype === undefined ){
         
       // this.controllerFor('application').set('showUser', true);
         
        }else{
              this.controllerFor('application').set('usertype', usertype);
           
             // this.controllerFor('application').set('showUser', false);
        }
    }
});
