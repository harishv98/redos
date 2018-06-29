import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		addField(){
			var date=new Date();
			var x=date.getMinutes()+""+date.getMilliseconds();
			var name=this.get('name');
			this.store.pushPayload({
				dashbds:{
					id:x,
					name:name
				}
			});
			this.setProperties({
				name:''
			});
		}
	}
});
