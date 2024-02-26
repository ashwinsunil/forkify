import 'core-js/stable';
import 'regenerator-runtime/runtime';
import previewView from './previewView.js';
import View from './view';

class BookMarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage =
    'Could not find results for the search query, please try with a different one';

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
export default new BookMarksView();
