import icons from 'url:../../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import View from './view';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goTo = btn.dataset.goto;
      handler(goTo);
    });
  }
  _generateMarkup() {
    const currentPage = +this._data.page;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    if (currentPage === 1 && numPages > 1)
      return this._generateNextButton(currentPage);
    if (currentPage < numPages && currentPage > 1) {
      return `${this._generatePrevButton(
        currentPage
      )} ${this._generateNextButton(currentPage)}`;
    }

    if (currentPage === numPages && numPages > 1) {
      return this._generatePrevButton(currentPage);
    }
    return '';
  }
  _generatePrevButton(currentPage) {
    return `<button data-goTo="${
      currentPage - 1
    }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${currentPage - 1}</span>
  </button>`;
  }

  _generateNextButton(currentPage) {
    return `<button data-goTo="${
      currentPage + 1
    }" class="btn--inline pagination__btn--next">
    <span>Page ${currentPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;
  }
}
export default new PaginationView();
