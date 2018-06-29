import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		editField(id){
			var name=this.get('model.name');
				this.store.findRecord('dashbd',id, { backgroundReload: false }).then(function(task){
				task.set('name',name);
			});
				this.transitionToRoute('viewdash');
		}
	}
});
