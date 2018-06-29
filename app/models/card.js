import DS from 'ember-data';

export default DS.Model.extend({
	name:DS.attr('string'),
	minwidth:DS.attr('string'),
	maxwidth:DS.attr('string'),
	minheight:DS.attr('string'),
	maxheight:DS.attr('string'),
	dashbd:DS.hasMany('dashbd',{async: false})
});
