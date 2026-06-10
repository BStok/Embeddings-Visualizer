import appEvents from '../service/appEvents.js';
import scene from '../store/scene.js'

import SearchResultWindowViewModel from './SearchResultWindowViewModel.js';

export default searchBoxModel();

const searchResultsWindowId = 'search-results';

function searchBoxModel() {
  let api = {
    search: search,
    submit: submit
  };

  return api;

  function search(newText) {
    var searchResults = scene.find(newText);
    var searchResultWindowViewModel = new SearchResultWindowViewModel(searchResults);

    if (searchResults.length) {
      appEvents.showNodeListWindow.fire(searchResultWindowViewModel, searchResultsWindowId);
    } else {
      appEvents.hideNodeListWindow.fire(searchResultsWindowId);
    }
  }

  function submit(command) {
    return;
  }
}
