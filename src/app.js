const CitySelectView = require('./views/city_select_view.js');
const StationSelectView = require('./views/station_select_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const selection = document.querySelector('select#cities-selection');
  const stationArea = document.querySelector('div#stations-list');

  const citySelectView = new CitySelectView(selection, stationArea);
  citySelectView.bindEvents();


})