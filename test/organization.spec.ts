import test from 'ava';

import Organization from '../src/organization';

test('Organization can autogenerate an id', t => {
  let o = new Organization({
    domains: ['example.com']
  });
  t.truthy(o.id);
  t.truthy(typeof o.id === 'string');
  t.truthy(o.id !== '');
});
