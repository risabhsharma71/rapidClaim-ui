import Ember from 'ember';

export default Ember.Route.extend({
    modal(){
            this.controllerFor('dashboard1').set('isShowingModal',false);
    }
});
