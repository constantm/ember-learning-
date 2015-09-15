import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	size: DS.attr('string'),
	logo_image: DS.attr('string'),
	about: DS.attr('string'),
	hq: DS.attr('string'),
	revenue: DS.attr('string'),
	cover_image: DS.attr('string'),
	events: DS.hasMany('event', {async: true}),
	opportunities: DS.hasMany('opportunity', {async: true})
});