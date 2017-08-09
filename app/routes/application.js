import Ember from 'ember';

export default Ember.Route.extend({
   model(){
        this.transitionTo('home');
          //this.controllerFor('application').set('showUser', false);

       /* var usertype = sessionStorage.getItem('usertype');
        console.log("usertype abc application :"+usertype);
        //this.controllerFor('application').set('usertype', usertype);
        var token =sessionStorage.getItem('token');
        console.log("usertype abc :"+token);

      if(usertype === null || usertype === undefined ){
         
        
         this.controllerFor('application').set('usertype', usertype);
        }else{
           this.controllerFor('application').set('showUser', true);
              this.controllerFor('application').set('showUser', false);
        }*/

          //this.controllerFor('application').set('isshowalways', false);
        
    }
});
