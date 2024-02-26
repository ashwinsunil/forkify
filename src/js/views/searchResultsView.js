import 'core-js/stable';
import 'regenerator-runtime/runtime';
import previewView from './previewView.js';
import View from './view';

class SearchResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    'Could not find results for the search query, please try with a different one';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
export default new SearchResultsView();
