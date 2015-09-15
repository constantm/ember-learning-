import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'select',
	class: 'selectpicker',
	selectedOpportunityId: null,
	onChange : function(){
  Ember.run.scheduleOnce('afterRender',this,function(){ 
    $(this.get('element')).selectpicker('refresh');
  });
	}.observes('opportunities'),
	didInsertElement: function(){
		Ember.run.scheduleOnce('afterRender', this, () => $(this.get('element')).selectpicker());
			// Ember.run.scheduleOnce('afterRender', this, () => this.$().selectpicker());
	}
});