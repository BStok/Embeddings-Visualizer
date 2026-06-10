import React from 'react';
import maco from '../legacy/maco.js';

export default maco.template(about, React);

function about() {
  return (
  <div  className='label about'>
     <span>Word2VEC Visualiser</span>
  </div>
  );
}
