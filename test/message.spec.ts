import test from 'ava';

import Message from '../src/message';

test('Message can autogenerate an id', t => {
  let m = new Message({
    from: [],
    to: [],
    subject: '',
    date: '',
    body: ''
  });
  t.truthy(m.id);
  t.truthy(typeof m.id === 'string');
  t.truthy(m.id !== '');
});
