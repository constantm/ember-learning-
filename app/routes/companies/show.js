import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function(model) {
		var firstOpportunity = model.get('opportunities.firstObject');
    this.transitionTo('companies.show.opportunities.show', firstOpportunity);
  }
});