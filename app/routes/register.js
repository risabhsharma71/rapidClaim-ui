import Ember from 'ember';

export default Ember.Route.extend({

    model(){
       if (this.controllerFor('application').get('isShowingModal')) {
            this.controllerFor('application').set('isShowingModal', false);
        }
        this.controllerFor('register').set('isPublicAdjusterAuthorize',false); 
        this.controllerFor('register').set('isInsurerAuthorize',false); 
       this.controllerFor('register').set('isShowingModal',false); 
       this.controllerFor('register').set('fname',null);
        this.controllerFor('register').set('lname',null);
        this.controllerFor('register').set('email',null);
        this.controllerFor('register').set('phoneno',null);
        this.controllerFor('register').set('email',null);
    }
});
