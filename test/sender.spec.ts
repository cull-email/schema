import test from 'ava';

import Sender from '../src/sender';

test('Sender can autogenerate an id', t => {
  let s = new Sender({
    organizationId: '',
    addresses: []
  });
  t.truthy(s.id);
  t.truthy(typeof s.id === 'string');
  t.truthy(s.id !== '');
});
