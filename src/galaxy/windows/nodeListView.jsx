/**
 * This component renders list of packages in single window.
 * There can be multiple lists opened at any time. The list is currently
 * managed by windowCollectionView
 */
import React from 'react';
import WindowTitle from './windowTitle.jsx';
import NodeInfoRow from './nodeInfoRow.jsx';
import maco from '../../legacy/maco.js';

export default maco(nodeListView, React);
var windowId = 0;

function nodeListView(x) {
  windowId += 1;

  x.render = function () {
    var windowViewModel = x.props.viewModel;
    var className = 'window-container';

    if (windowViewModel.className) {
      className += ' ' + windowViewModel.className;
    }

    var items = windowViewModel.list;
    var id = windowId + windowViewModel.className + items.length;

    return (
      <div className={className}>
        <WindowTitle viewModel={windowViewModel} />
        <div className='window-list-content'>
          {content(items)}
        </div>
      </div>
    );

    function content(items) {
      if (items.length > 0) {
        return (
          <div key={id}>
            {items.map(function(item) {
              return <NodeInfoRow key={item.id} viewModel={item} />;
            })}
          </div>
        );
      } else {
        return null;
      }
    }
  };
}
