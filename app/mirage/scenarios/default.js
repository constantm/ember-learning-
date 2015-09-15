export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  

  // quiz = server.create('company', { question_ids: companyEvents.map(c => c.id) });

  // var company = server.create('company', { question_ids: companyEvents.map(c => c.id) });
  // var company = server.create('company');
  // var companyEvents = [
  // 	server.create('event', {company: company.id}),
  // 	server.create('event', {company: company.id}),
  // 	server.create('event', {company: company.id})
  // ];

  // company.questions = companyEvents.map(c => c.id);
  server.logging = true;

  server.create('company', {
  	events: [1,2,3,4,5],
  	opportunities: [1,2,3]
  });

  server.createList('event', 5, {
  	company: 1
  });

  server.createList('opportunity', 3, {
  	company: 1
  });
}