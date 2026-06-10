import React from 'react';
import LoadingIndicator from './loadingIndicator.jsx';
import Scene from './scene.jsx';
import appEvents from './service/appEvents.js';
import config from '../config.js';
import maco from '../legacy/maco.js';

export default maco(galaxyPage, React);

function galaxyPage(x) {
  var currentPath;

  x.render = function() {
    // This doesn't seem to belong here. The whole routing system is a mess
    // TODO: Come up with better routing
    loadGraphIfRouteChanged();

    return (
      <div>
        <LoadingIndicator />
        <Scene />
      </div>
    );
  };

  function loadGraphIfRouteChanged() {
    var graphName = getRequestedGraphName();
    var routeChanged = graphName !== currentPath;
    if (routeChanged) {
      currentPath = graphName;
      appEvents.downloadGraphRequested.fire(currentPath);
    }
    appEvents.queryChanged.fire();
  }

  function getRequestedGraphName() {
    var pathMatch = window.location.pathname.match(/\/galaxy\/([^/?#]+)/);
    if (pathMatch) return decodeURIComponent(pathMatch[1]);

    var hashMatch = window.location.hash.match(/#\/galaxy\/([^/?#]+)/);
    if (hashMatch) return decodeURIComponent(hashMatch[1]);

    return config.defaultGraphName;
  }
}
