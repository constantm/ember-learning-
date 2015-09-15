import Ember from 'ember';

export default Ember.Component.extend({
	children: Ember.A(),
	classNames: ['tabbable tabs-left horizontal-tabs opportunity-tabs'],

	actions: {
		showTab: function(){
				alert('wee');
			}
	},
	
	// didInsertElement: function() {
		// debugger;
		// this.children.first.set('active', true)
	// },

	registerChild: function(child) {
		// debugger;
	  this.children.pushObject(child);
	}
});
