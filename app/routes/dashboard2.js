import Ember from 'ember';

export default Ember.Route.extend({
    model(){

        var insurertoken = this.controllerFor('application').get('insurertoken');
        console.log('message :' +sessionStorage.getItem('insurertoken'));
        this.controllerFor('dashboard2').set('insurertoken', insurertoken);
    }
});
