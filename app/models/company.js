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


 //  name: (i)=> faker.company.companyName + ' ' + i,
 //  size: potenial_sizes.objectAt(Math.floor(Math.random() * potenial_sizes.length)),
 //  about: faker.lorem.paragraphs(4),
 //  hq: faker.address.country,
 //  countries: faker.random.number,
 //  revenue: faker.random.number,
 //  logo_image: faker.image.avatar,
	// cover_image: '/images/cover.jpg',
	// events: []