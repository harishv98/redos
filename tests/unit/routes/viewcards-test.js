import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | viewcards', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:viewcards');
    assert.ok(route);
  });
});
