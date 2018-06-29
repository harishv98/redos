import Controller from '@ember/controller';
import Ember from 'ember';
export default Controller.extend({
	ser:Ember.inject.service('use'),
	actions:{
		addCard(card_id){
			let dashbd=this.store.peekRecord('dashbd',this.ser.get('dash_id'));
			let card=this.store.peekRecord('card',card_id);
			dashbd.get('card_ids').pushObject(card);
			dashbd.save();
			var string=JSON.stringify(dashbd);
			alert(string);
		}
	}
});
