/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';

import gizmos from '../collection.js';

Meteor.publish('gizmos.all', function gizmosAll() {
  return gizmos.find();
});
