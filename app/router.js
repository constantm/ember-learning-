import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function() {
  	// this.route('show');
  });
  this.route('companies', function(){
  	this.route('show', {
        path: ':company_id'
  	}, function(){
            this.route('opportunities', function(){
              this.route('show', {
                  path: ':opportunity_id'
              })
                // path: ':opportunity_id',
                // resetNamespace: true
            });
  	});
  });
  // this.route('opportunity');
  this.route('events', function() {});
  this.route('opportunities', function() {});
});

export default Router;