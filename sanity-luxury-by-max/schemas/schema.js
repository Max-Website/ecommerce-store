import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import ring from './ring';
import necklaces from './necklaces';
import bracelets from './bracelets';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    ring,
    necklaces,
    bracelets
  ]),
})
