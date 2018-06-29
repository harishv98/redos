import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		addField(){
			var date=new Date();
			var x=date.getMilliseconds()+""+date.getMinutes();
			var name=this.get('name');
			var minheight=this.get('minHeight');
			var minwidth=this.get('minwidth');
			var maxheight=this.get('maxHeight');
			var maxwidth=this.get('maxwidth');
			this.store.pushPayload({
					cards:{
						id:x,
						minheight:minheight,
						name:name,
						minwidth:minwidth,
						maxheight:maxheight,
						maxwidth:maxwidth
					}
				
			});
			this.setProperties({
				name:'',
				minHeight:'',
				minwidth:'',
				maxHeight:'',
				maxwidth:''
			});
		}
	}
});
