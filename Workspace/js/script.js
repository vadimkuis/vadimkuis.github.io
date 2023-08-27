const API_URL = "https://workspace-methed.vercel.app/";
const LOCATION_URL = "api/locations";//список городов на сервере
const VACANCY_URL = "api/vacancy"; //список вакансий на сервере

const cardsList = document.querySelector('.cards__list'); //получили список карточек
let lastUrl = '';
const pagination = {};


const getData = async (url, cbSuccess, cbError) => { //функция которая возвращает данные
  try {  //если внутри скобок произойдет ошибка, то сработает catch
    const response = await fetch(url);
    const data = await response.json();//записываем в data данные переведенные из формата json
    cbSuccess(data);
  } catch (err) {
    cbError(err)
  }
};

//карточка с вакансией
const createCard = (vacancy) => ` 
  <article class="vacancy" tabindex="0" data-id="${vacancy.id}">
    <img src="${API_URL}${vacancy.logo}" alt="Логотип компании ${vacancy.company}" class="vacancy__img">

    <p class="vacancy__company">${vacancy.company}</p>

    <h3 class="vacancy__title">${vacancy.title}</h3>

    <ul class="vacancy__fields">
      <li class="vacancy__field">от
        ${parseInt(vacancy.salary).toLocaleString()}₽</li>
      <li class="vacancy__field">${vacancy.format}</li>
      <li class="vacancy__field">${vacancy.type}</li>
      <li class="vacancy__field">${vacancy.experience}</li>
    </ul>
  </article>
`;

//перечень всех карточек
const createCards = (data) =>
  data.vacancies.map((vacancy) => {  //перебераем вакансии с сервера(они на сервере хранятся в vacancies) и каждую вакансию
    const li = document.createElement('li');//создаем как li 
    li.classList.add('cards__item');// присваеваем класс
    li.insertAdjacentHTML('beforeend', createCard(vacancy));//с помощью этого метода вставляем верстку 
    return li;
  });


const renderVacancies = (data) => { //рендерим карточки с вакансиями
  cardsList.textContent = ''; //очищаем список карточек  
  const cards = createCards(data); //создаем карточки с помощью функции createCards
  cardsList.append(...cards); //добавляем в список карточки cards 


  if (data.pagination) {
    Object.assign(pagination, data.pagination);
  }

  observer.observe(cardsList.lastElementChild); //получаем последний элемент карточки
};

const renderMoreVacancies = (data) => { //рендерим карточки с вакансиями
  const cards = createCards(data); //создаем карточки с помощью функции createCards
  cardsList.append(...cards); //добавляем в список карточки cards 

  if (data.pagination) {
    Object.assign(pagination, data.pagination);
  }

  observer.observe(cardsList.lastElementChild);
};

const loadMoreVacacies = () => { //рендерим карточки с вакансиями

  if (pagination.totalPages > pagination.currentPage) {//если всего страниц больше чем текущая страница
    const urlWithParams = new URL(lastUrl);
    urlWithParams.searchParams.set('page', pagination.currentPage + 1); //к текущей странице получаем еще одну страницу
    urlWithParams.searchParams.set('limit', window.innerWidth < 768 ? 6 : 12); //если ширина страницы меньше 768, то 6 карточек видим, в другом случае 12

    getData(urlWithParams, renderMoreVacancies, renderError).then(() => {
      lastUrl = urlWithParams;
    });
  }
};

const renderError = (err) => { //функция принимает ошибку
  console.warn(err); //выводит ее в консоль
}

//модальное окно под каждую вакансию(данные с сервера)
const createDetailVacancy = ({
  id,
  title,
  company,
  description,
  email,
  salary,
  type,
  format,
  experience,
  location,
  logo,
}) => `
  <article class="detail">
    <div class="detail__header">
      <img src="${API_URL}${logo}" alt="Логотип компании ${company}" class="detail__logo">

      <p class="detail__company">${company}</p>
      <h2 class="detail__title">${title}</h2>
    </div>
    <div class="detail__main">
      <p class="detail__description">${description.replaceAll('\n', '<br>')}</p>
      <ul class="detail__fields">
        <li class="ditail__field">от ${parseInt(salary).toLocaleString()}₽</li>
        <li class="ditail__field">${type}</li>
        <li class="ditail__field">${format}</li>
        <li class="ditail__field">${experience}</li>
        <li class="ditail__field">${location}</li>
      </ul>
    </div>

    <p class="detail__resume">Отправляйте резюме на
      <a class="blue-text" href="mailto:${email}">${email}</a>
    </p>
  </article>
`;

//рендер модального окна
const renderModal = (data) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const modalMain = document.createElement('div');
  modalMain.classList.add('modal__main');
  modalMain.innerHTML = createDetailVacancy(data);
  const modalClose = document.createElement('button');
  modalClose.classList.add('modal__close');

  modalClose.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M10.7831 10L15.3887 5.39444C15.4797 5.28816 15.5272 5.15145 15.5218 5.01163C15.5164 4.87181 15.4585 4.73918 15.3595 4.64024C15.2606 4.5413 15.128 4.48334 14.9881 4.47794C14.8483 4.47254 14.7116 4.52009 14.6053 4.61111L9.99977 9.21666L5.39421 4.60555C5.2896 4.50094 5.14771 4.44217 4.99977 4.44217C4.85182 4.44217 4.70994 4.50094 4.60532 4.60555C4.50071 4.71017 4.44194 4.85205 4.44194 5C4.44194 5.14794 4.50071 5.28983 4.60532 5.39444L9.21643 10L4.60532 14.6056C4.54717 14.6554 4.49993 14.7166 4.46659 14.7856C4.43324 14.8545 4.4145 14.9296 4.41155 15.0061C4.40859 15.0826 4.42148 15.1589 4.44941 15.2302C4.47734 15.3015 4.51971 15.3662 4.57385 15.4204C4.62799 15.4745 4.69274 15.5169 4.76403 15.5448C4.83532 15.5727 4.91162 15.5856 4.98813 15.5827C5.06464 15.5797 5.13972 15.561 5.20864 15.5276C5.27757 15.4943 5.33885 15.447 5.38866 15.3889L9.99977 10.7833L14.6053 15.3889C14.7116 15.4799 14.8483 15.5275 14.9881 15.5221C15.128 15.5167 15.2606 15.4587 15.3595 15.3598C15.4585 15.2608 15.5164 15.1282 15.5218 14.9884C15.5272 14.8485 15.4797 14.7118 15.3887 14.6056L10.7831 10Z"
          fill="#CCCCCC" />
      </g>
    </svg>
  `
  modalMain.append(modalClose);
  modal.append(modalMain);
  document.body.append(modal);

  //Закрытие модального окна по клику вне его и по кнопке
  modal.addEventListener('click', ({ target }) => { //кликаем, через target определяем куда произошел клик
    if (target === modal || target.closest('.modal__close')) { //если клин по модальному окну или кнопка .modal__close
      modal.remove();
    }
  })
};

//открытие модалки по клику на вакансию 
const openModal = (id) => {
  getData(`${API_URL}${VACANCY_URL}/${id}`, renderModal, renderError);
};

//подгрузка информации при скроле
const observer = new IntersectionObserver(
  (entries) => { //элемент,за которым следим
    entries.forEach(entry => { //берем каждый элемент
      if (entry.isIntersecting) { //если элемент видимый то
        loadMoreVacacies(); //вызываем функцию
      }
    });
  },
  {
    rootMargin: '100px', //расстояние на котором сработает функция
  }
);

const init = () => {
  const filterForm = document.querySelector('.filter__form');

  //select city
  const citySelect = document.querySelector('#city');
  const cityChoices = new Choices(citySelect, {
    itemSelectText: '',
  });

  getData(
    `${API_URL}${LOCATION_URL}`,
    (locationData) => { //получаем города с сервера
      const location = locationData.map(location => ({ //трансформируем данные в нужный формат
        value: location,
      }));
      cityChoices.setChoices(location, 'value', 'label', true);//этот метод из библиотеки Choices, передаем готода с сервера в cityChoices
    },
    (err) => {
      console.log(err);
    },
  );

  //cards
  const urlWithParams = new URL(`${API_URL}${VACANCY_URL}`);

  urlWithParams.searchParams.set('limit', window.innerWidth < 768 ? 6 : 12); //если ширина страницы меньше 768, то 6 карточек видим, в другом случае 12
  urlWithParams.searchParams.set('page', 1);

  getData(urlWithParams, renderVacancies, renderError).then(() => {
    lastUrl = urlWithParams;
  });

  //modal
  cardsList.addEventListener('click', ({ target }) => {
    const vacancyCard = target.closest('.vacancy');

    if (vacancyCard) { //проверяем действительно ли клик был по vacancyCard
      const vacancyId = vacancyCard.dataset.id; //получаем id
      openModal(vacancyId); //вызываем фун-ю открытия окна для вакансии с vacancyId
    }
  });

  //filter
  filterForm.addEventListener('submit', (event) => {
    event.preventDefault(); //блокировка перезагрузки страницы
    const formData = new FormData(filterForm); //получаем данные из формы с помощью объекта new FormData

    const urlWithParam = new URL(`${API_URL}${VACANCY_URL}`); //формируем URL

    //добавляем параметры которые ожидает сервер
    formData.forEach((value, key) => {
      urlWithParam.searchParams.append(key, value)
    });

    getData(urlWithParam, renderVacancies, renderError).then(() => {
      lastUrl = urlWithParam;
      observer.observe()
    });
  });
};

init();

