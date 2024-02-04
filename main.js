let fullScreenBtn = document.querySelectorAll('.full-screen-btn');
const modalWindow = document.querySelector('.modal-window');
let container = document.querySelectorAll('.container');
let isModalActive = false;

for (let i = 0; i < fullScreenBtn.length; i++) {
	fullScreenBtn[i].addEventListener('click', function () {
	 	modalWindow.classList.toggle('active');
	 	fullScreenBtn[i].innerHTML = '<img src="assets/icons/screen.svg">';
	 	isModalActive = !isModalActive;
	 	if (isModalActive === true) {
	 		container[i].classList.add('full');
	 		modalWindow.appendChild(container[i]);
	 	} else {
	 		fullScreenBtn[i].innerHTML = '<img src="assets/icons/fullscreen.svg">';
	 		container[i].classList.remove('full');
	 		modalWindow.removeChild(container[i]);
	 		document.body.appendChild(container[i]);
	 	}
	})
}

let mapNav = document.querySelectorAll('.map-nav');
let mapNavBtn = document.querySelectorAll('.map-nav-btn');
let closeBtn = document.querySelectorAll('.close-btn');
let index = 1;

for (let i = 0; i < mapNavBtn.length; i++) {
	mapNavBtn[i].addEventListener('click', function () {
	 	mapNav[i].classList.add('visible');
	 	mapNav[i].style.zIndex = index;
	 	index++;
	});
	closeBtn[i].addEventListener('click', function () {
    mapNav[0].classList.remove('visible');
    mapNav[1].classList.remove('visible');
    mapNav[2].classList.remove('visible');

  });
}

const totalData = data[data.length - 1];
const casesListByCounty = document.querySelector('.country-cases-list ul');
const fragment = document.createDocumentFragment();
const bookmarkCountyList = document.querySelector('.bookmark-county-list ul');
data.forEach(item => {
  if (item.id) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="counter">${item.Total || 0}</span><span class="country">${item.Country}</span>`;
    li.setAttribute('data-country', item.Country);
    fragment.appendChild(li);

    const bookmarkItem = document.createElement('li');
    bookmarkItem.textContent = item.Country;
    bookmarkItem.dataset.country = item.Country;
    bookmarkCountyList.appendChild(bookmarkItem);
  }
});

casesListByCounty.appendChild(fragment);
const globalCasesCounter = document.querySelector('.global-cases-counter');
globalCasesCounter.textContent = data[data.length - 1]['Cases'] || 0;

const formatAMPM = date => {
  const options = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

const currentDate = new Date();
const formattedTime = formatAMPM(currentDate);
const updateTime = document.querySelector('.update-time span');
updateTime.textContent = formattedTime;

const deathCasesList = document.querySelector('.death-cases-list ul');
const deathCaseFragment = document.createDocumentFragment();
data.forEach(item => {
  if (item.id) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="counter">${item['Total deaths'] || 0}</span><span class="counter-value"> deaths </span><span class="country"> ${item.Country}</span>`;
    deathCaseFragment.appendChild(li);

  }
});
deathCasesList.appendChild(deathCaseFragment);

const globaDeathsCounter = document.querySelector('.global-counter_deaths');
globaDeathsCounter.textContent = data[data.length - 1]['Total deaths'] || 0;

const globalCasesList = document.querySelector('.recovery-cases-list ul');
const globalCaseFragment = document.createDocumentFragment();
Object.entries(totalData).forEach(([property, value]) => {
  const li = document.createElement('li');
  li.innerHTML = `<span class="counter"> ${value} </span><span class="counter-value counter-recovered-value">${property}</span>`;
  globalCaseFragment.appendChild(li);
});
globalCasesList.appendChild(globalCaseFragment);

const mapImage = document.querySelector('.map-svg svg');
let width = 1;
document.querySelector('.map-svg').addEventListener('wheel', (event) => {
  event.preventDefault();
  width += event.deltaY * -0.01;
  width = Math.min(Math.max(0.5, width), 4);
  mapImage.style.width = `${width * 1000}px`;
});

function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}

mapImage.onmousedown = function (e) {
  const {
    shiftX,
    shiftY
  } = calculateShift(e);

  mapImage.style.position = 'absolute';
  document.querySelector('.map-svg').appendChild(mapImage);
  moveAt(e);

  function moveAt(e) {
    mapImage.style.left = e.pageX - shiftX + 'px';
    mapImage.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function (e) {
    moveAt(e);
  };

  mapImage.onmouseup = resetDrag;
  document.querySelector('.map-svg').onmouseleave = resetDrag;
  
  const countryName = e.target.getAttribute('name') || e.target.getAttribute('class').split(' ')[0];
  const currentCountry = findCountryByName(countryName);
  updateGlobalCounterRecovery(countryName);
  displayCountryData(currentCountry);
  hideCountyBorders(countryName, e.target.id);
};

function calculateShift(e) {
  const coords = getCoords(mapImage);
  let shiftX = e.pageX - coords.left;
  let shiftY = e.pageY - coords.top;

  const parentCoords = getCoords(document.querySelector('.map-svg'));
  const parentScrollLeft = document.querySelector('.map-svg').scrollLeft;
  const parentScrollTop = document.querySelector('.map-svg').scrollTop;
  shiftX += parentCoords.left - parentScrollLeft;
  shiftY += parentCoords.top - parentScrollTop;

  return {
    shiftX,
    shiftY
  };
}

function resetDrag() {
  document.onmousemove = null;
  mapImage.onmouseup = null;
  mapImage.style.zIndex = 0;
}

mapImage.ondragstart = function () {
  return false;
};

function getAlpha2Code(countryName) {
  const country = codes.find(code => code.Country === countryName);
  return country ? country["Alfa-2-code"] : null;
}

function hideCountyBorders(country, countryCode) {
  const element = document.getElementById(countryCode);
  if (element) {
    document.querySelectorAll('.active-country').forEach(country => country.classList.remove('active-country'));
    element.classList.add('active-country');
  } else {
    const countries = document.querySelectorAll(`.${country}`);
    document.querySelectorAll('.active-country').forEach(country => country.classList.remove('active-country'));
    countries.forEach(country => {
      country.classList.add('active-country');
    });
  }
}

const casesItemByCounty = Array.from(casesListByCounty.querySelectorAll('li'));

casesItemByCounty.forEach(item => {
  item.addEventListener('click', handleCountryClick);
});

function handleCountryClick(event) {
  const countryName = event.currentTarget.dataset.country;
  const alpha2Code = getAlpha2Code(countryName);

  if (alpha2Code) {
    hideCountyBorders(countryName, alpha2Code);
  }

  updateGlobalCounterRecovery(countryName);

  const currentCountry = findCountryByName(countryName);
  displayCountryData(currentCountry);
}

function updateGlobalCounterRecovery(countryName) {
  document.querySelector('.global-counter_recovery').textContent = countryName || 'Global';
}

function findCountryByName(countryName) {
  return data.find(country => country.Country === countryName);
}

function displayCountryData(country) {
  country = country || totalData;
  const globalCaseFragment = document.createDocumentFragment();
  Object.entries(country).forEach(([property, value]) => {
    if (property !== 'id' && property !== 'Country') {
      const li = createListItem(property, value);
      globalCaseFragment.appendChild(li);
    }
  });
  clearGlobalCasesList();
  appendGlobalCaseFragment(globalCaseFragment);
}

function createListItem(property, value) {
  const li = document.createElement('li');
  li.innerHTML = `<span class="counter"> ${value.toString()} </span><span class="counter-value counter-recovered-value">${property}</span>`;
  return li;
}

function clearGlobalCasesList() {
  globalCasesList.innerHTML = '';
}

function appendGlobalCaseFragment(fragment) {
  globalCasesList.appendChild(fragment);
}

const basemaps = document.querySelector('.basemaps-list ul');

basemaps.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => {
    mapImage.id = li.dataset.mapStyle;
  })
})

function zoom(direction) {
  const step = 500; 
  const currentWidth = mapImage.clientWidth;
  const newWidth = direction === 'in' ? currentWidth + step : currentWidth - step;
  mapImage.style.width = `${newWidth}px`;
}

document.querySelector('.zoom-in').addEventListener('click', () => {
  zoom('in');
});

document.querySelector('.zoom-out').addEventListener('click', () => {
  zoom('out');
});


bookmarkCountyList.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', handleCountryClick);
})

const mapSearchInput = document.querySelector('#map-search-input');

mapSearchInput.addEventListener('input', () => {
  const searchText = mapSearchInput.value.toLowerCase().trim();

  document.querySelectorAll('.map-svg svg path').forEach(path => {
    path.classList.remove('active-country');
  });

  if (searchText === '') return;

  document.querySelectorAll('.map-svg svg path').forEach(path => {
    const id = path.id.toLowerCase();
    const classes = path.getAttribute('class') ? path.getAttribute('class').toLowerCase() : '';
    const name = path.getAttribute('name') ? path.getAttribute('name').toLowerCase() : '';

    if (id.includes(searchText) || classes.includes(searchText) || name.includes(searchText)) {
      path.classList.add('active-country');
    }
  });
});

function caseFilter() {
  const casesSearchInput = document.querySelector('#cases-search-input');
  const countryList = document.querySelectorAll('.country-cases-list li');

  casesSearchInput.addEventListener('input', function() {
      const searchTerm = this.value.trim().toLowerCase();

      countryList.forEach(function(item) {
          const countryName = item.querySelector('.country').textContent.toLowerCase();
          if (countryName.includes(searchTerm)) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
  });
}

const dropdown = document.querySelector('.country-cases .options');

const properties = Object.keys(data[0]).filter(property => property !== 'id' && property !== 'Country');

dropdown.innerHTML = '';

properties.forEach(property => {
  const option = document.createElement('span');
  option.classList.add('option');
  option.setAttribute('data-value', property);
  option.textContent = property;
  dropdown.appendChild(option);
});

dropdown.querySelectorAll('.option')[0].classList.add('selected');

dropdown.querySelectorAll('.option').forEach(option  => {
  option.addEventListener('click', () => {
    casesListByCounty.innerHTML = '';
    fragment.innerHTML = '';
    const filteredData = data.filter(item => item[option.dataset.value] !== 'N/A');
    filteredData.sort((a, b) => {
      return parseFloat(b[option.dataset.value] || 0) - parseFloat(a[option.dataset.value] || 0);
    });
    filteredData.forEach(item => {
      if (item.id) {
        const li = document.createElement('li');
        li.innerHTML = `<span class="counter">${item[`${option.dataset.value}`] || 0}</span><span class="country">${item.Country}</span>`;
        li.setAttribute('data-country', item.Country);
        fragment.appendChild(li);
        li.addEventListener('click', handleCountryClick);
      }
    });
    casesListByCounty.appendChild(fragment);
    caseFilter();
  })
})

caseFilter();

const deathCasesDropdown = document.querySelector('.death-cases .options');

function handleOptionClick(option) {
  deathCaseFragment.innerHTML = '';
  deathCasesList.innerHTML = '';

  const filteredData = data.filter(item => item[option.dataset.value] !== 'N/A');

  filteredData.forEach(item => {
    if (item.id) {
      const li = document.createElement('li');
      const counterValue = option.dataset.value === 'Total deaths' ? 'deaths ' : 'recovered ';
      li.innerHTML = `<span class="counter">${item[option.dataset.value] || 0}</span><span class="counter-value">${counterValue} </span><span class="country"> ${item.Country}</span>`;
      deathCaseFragment.appendChild(li);
    }
  });

  deathCasesList.appendChild(deathCaseFragment);
  globaDeathsCounter.textContent = data[data.length - 1][option.dataset.value] || 0;
}

deathCasesDropdown.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', () => {
    handleOptionClick(option);
  });
});
