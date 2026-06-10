import React from 'react';
import searchBoxModel from './searchBoxModel.js';
import maco from '../../legacy/maco.js';

export default maco(searchBar, React);

function searchBar(x) {
  x.render = function () {
    return (
      <div className='container row'>
        <div className='search col-xs-12 col-sm-6 col-md-4'>
          <form className='search-form' role='search' onSubmit={runSubmit}>
            <div className='input-group'>
              <input type='text'
                ref={setSearchText}
                className='form-control no-shadow' placeholder='enter a search term'
                onChange={runSearch}/>
                <span className='input-group-btn'>
                  <button className='btn' tabIndex='-1' type='button'>
                    Search
                  </button>
                </span>
            </div>
          </form>
        </div>
      </div>
    );
  };

  function runSearch(e) {
    searchBoxModel.search(e.target.value);
  }

  function runSubmit(e) {
    var searchText = x.searchText.value;
    searchBoxModel.submit(searchText);
    e.preventDefault();
  }

  function setSearchText(input) {
    x.searchText = input;
  }
}
