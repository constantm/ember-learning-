import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap-tabs/tab', 'Integration | Component | bootstrap tabs/tab', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bootstrap-tabs/tab}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-tabs/tab}}
      template block text
    {{/bootstrap-tabs/tab}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
