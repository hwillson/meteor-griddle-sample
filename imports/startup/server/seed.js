import { Fake } from 'meteor/anti:fake';

import gizmos from '/imports/api/gizmos/collection.js';

if (gizmos.find().count() === 0) {
  for (let i = 0; i < 100; i++) {
    gizmos.insert({
      name: Fake.word(),
      description: Fake.sentence(),
      color: Fake.color(),
      quantity: Math.floor(Math.random() * (1000 - 1) + 1),
      lastUpdated: new Date(),
    });
  }
}
