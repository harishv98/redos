import Controller from '@ember/controller';
import Ember from 'ember';
export default Controller.extend({
	ser:Ember.inject.service('use'),
	actions:{
		inject(val){
			this.ser.set('dash_id',val);
			this.transitionToRoute('select');
		},
		deletecard(card_id){
			let dashbd=this.store.peekRecord('dashbd',this.ser.get('dash_id'));
			let card=this.store.peekRecord('card',card_id);
			dashbd.get('card_ids').removeObject(card);
		}
	}
});
