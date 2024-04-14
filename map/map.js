ymaps.ready(init);

function init() {
  var map01 = new ymaps.Map("map01", {
    center: [55.77918820873447, 37.5777415674591],
    zoom: 16,
  });
  var map02 = new ymaps.Map("map02", {
    center: [55.77918820873447, 37.5777415674591],
    zoom: 16,
  });
  var map03 = new ymaps.Map("map03", {
    center: [55.77918820873447, 37.5777415674591],
    zoom: 16,
  });
  // Создаем объект Placemark
  var myPlacemark01 = new ymaps.Placemark(
    [55.77918820873447, 37.5777415674591],
    null,
    {
      preset: "islands#blueDotIcon",
    }
  );
  var myPlacemark02 = new ymaps.Placemark(
    [55.77918820873447, 37.5777415674591],
    null,
    {
      preset: "islands#blueDotIcon",
    }
  );
  var myPlacemark03 = new ymaps.Placemark(
    [55.77918820873447, 37.5777415674591],
    null,
    {
      preset: "islands#blueDotIcon",
    }
  );
  map01.geoObjects.add(myPlacemark01);
  map02.geoObjects.add(myPlacemark02);
  map03.geoObjects.add(myPlacemark03);

  map01.controls.remove("geolocationControl"); // удаляем геолокацию
  map02.controls.remove("geolocationControl"); // удаляем геолокацию
  map03.controls.remove("geolocationControl"); // удаляем геолокацию
  map01.controls.remove("searchControl"); // удаляем поиск
  map02.controls.remove("searchControl"); // удаляем поиск
  map03.controls.remove("searchControl"); // удаляем поиск
  map01.controls.remove("trafficControl"); // удаляем контроль трафика
  map02.controls.remove("trafficControl"); // удаляем контроль трафика
  map03.controls.remove("trafficControl"); // удаляем контроль трафика
  map01.controls.remove("typeSelector"); // удаляем тип
  map02.controls.remove("typeSelector"); // удаляем тип
  map03.controls.remove("typeSelector"); // удаляем тип
  map01.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map02.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map03.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map01.controls.remove("rulerControl"); // удаляем контрол правил
  map02.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
  map03.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
}
