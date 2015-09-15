import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap-tabs/bootstrap-tab', 'Integration | Component | bootstrap tabs/bootstrap tab', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bootstrap-tabs/bootstrap-tab}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-tabs/bootstrap-tab}}
      template block text
    {{/bootstrap-tabs/bootstrap-tab}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
