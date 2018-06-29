import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		deletedash(id){
			var rec=this.get('store').peekRecord('dashbd',id);
			this.store.unloadRecord(rec);
	}
}
});
