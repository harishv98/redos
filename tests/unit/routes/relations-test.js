import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | relations', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:relations');
    assert.ok(route);
  });
});
