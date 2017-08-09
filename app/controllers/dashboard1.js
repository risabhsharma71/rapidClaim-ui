import Ember from 'ember';
export default Ember.Controller.extend({
    actions:{
        newclaim:function(usertype){
            this.transitionToRoute('dashboard2');
        },
        getclaim:function(){
            
        },
        claimaction:function(){
            console.log('in function');
            this.transitionToRoute('dashboard2');
        }
    }
    
});