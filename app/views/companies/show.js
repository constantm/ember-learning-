import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {

		// var model = this.get('controller.model');
		// debugger;
		// $('#app-header').backstretch( model.get('cover_image') );
		// $('#app-header .backstretch').animate({opacity: 1});
	},

	willDestroyElement: function(){

	}
});
