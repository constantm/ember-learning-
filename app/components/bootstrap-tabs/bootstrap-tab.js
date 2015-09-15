import Ember from 'ember';

export default Ember.Component.extend({
	active: false,
	tabUrl: Ember.computed('name', function(){
		return this.get('name').dasherize();
	}),
	didInsertElement: function() {
		var parent = this.parentView;
		parent.registerChild(this);
	}
});