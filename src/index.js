import $ from 'jquery';
import shoppingList from './scripts/shopping-list';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
