import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		editField(id){
			var name=this.get('model.name');
			var minheight=this.get('model.minheight');
			var minwidth=this.get('model.minwidth');
			var maxheight=this.get('model.maxheight');
			var maxwidth=this.get('model.maxwidth');
			this.store.findRecord('card',id).then(function(task){
				task.set('name',name);
				task.set('minheight',minheight);
				task.set('minwidth',minwidth);
				task.set('maxheight',maxheight);
				task.set('maxwidth',maxwidth);
			});
				this.transitionToRoute('viewcards');
		}
	}
});
