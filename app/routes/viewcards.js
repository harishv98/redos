import Route from '@ember/routing/route';

export default Route.extend({
	actions:{
		delete(id){
			var rec=this.get('store').peekRecord('card',id);
			this.store.unloadRecord(rec);
	}
},
	model(){
		return this.store.peekAll('card');
	}
});
