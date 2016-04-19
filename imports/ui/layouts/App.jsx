import React from 'react';
import { MeteorGriddle } from 'meteor/utilities:meteor-griddle';

import gizmos from '/imports/api/gizmos/collection.js';

const App = () => {
  const content = (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <MeteorGriddle
            publication="gizmos.all"
            collection={gizmos}
          />
        </div>
      </div>
    </div>
  );
  return content;
};

export default App;
