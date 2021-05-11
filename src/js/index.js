import Search from '../models/Search';
import * as searchView from '../views/searchView';
import { elements } from '../views/base';

/**
 * Global state of the app
 * - Search object
 * - Current Recipe Object
 * - Shoppinglist Object
 * - Liked Recipes
 */
const state = {};

const controlSearch = async () => {
  // 1) Get query from the view
  const query = searchView.getInput();

  if (query) {
    // 2) New Search object and added to state
    state.search = new Search(query);

    // 3) Prepare UI for results
    searchView.clearInput();
    searchView.clearResultList();

    // 4) Search for recipes
    await state.search.getResults();

    // 5) render results on UI
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  controlSearch();
});
