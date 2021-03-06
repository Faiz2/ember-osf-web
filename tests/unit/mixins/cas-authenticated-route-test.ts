import EmberObject from '@ember/object';
import CasAuthenticatedRouteMixin from 'ember-osf-web/mixins/cas-authenticated-route';
import { module, test } from 'qunit';

module('Unit | Mixin | cas authenticated route');

// Replace this with your real tests.
test('it works', assert => {
    const CasAuthenticatedRouteObject = EmberObject.extend(CasAuthenticatedRouteMixin);
    const subject = CasAuthenticatedRouteObject.create();
    assert.ok(subject);
});
