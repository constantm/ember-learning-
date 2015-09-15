import DS from 'ember-data';

export default DS.Model.extend({
	name: 			DS.attr('string'),
	from_date: 	DS.attr('date'),
	to_date: 		DS.attr('date'),
	location: 	DS.attr('string'),
	latitude: 	DS.attr('number'),
	longitude: 	DS.attr('number'),
	company: 		DS.belongsTo('company', {async: true})
});
