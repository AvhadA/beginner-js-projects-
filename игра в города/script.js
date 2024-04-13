
let allCities = ['Абакан','Азов','Александров','Алексин','Альметьевск','Анапа','Ангарск','Анжеро-Судженск',
 'Апатиты','Арзамас','Армавир','Арсеньев','Артем','Архангельск','Асбест','Астрахань','Ачинск','Балаково',
 'Балахна','Балашиха','Балашов','Барнаул','Батайск','Белгород','Белебей','Белово','Белогорск', 'Белорецк',
  'Белореченск','Бердск','Березники','Березовский','Бийск','Биробиджан','Благовещенск ','Бор','Борисоглебск',
  'Боровичи','Братск','Брянск','Бугульма','Буденновск','Бузулук','Буйнакск','Великие Луки','Великий Новгород',
  'Верхняя Пышма','Видное','Владивосток','Владикавказ','Владимир','Волгоград','Волгодонск','Волжск','Волжский',
  'Вологда','Вольск','Воркута','Воронеж','Воскресенск', 'Воткинск','Всеволожск','Выборг','Выкса','Вязьма',
  'Гатчина','Геленджик','Георгиевск','Глазов','Горно-Алтайск','Грозный','Губкин','Гудермес','Гуково',
  'Гусь-Хрустальный','Дербент','Дзержинск','Димитровград','Дмитров','Долгопрудный','Домодедово','Донской',
  'Дубна','Евпатория','Егорьевск','Ейск','Екатеринбург','Елабуга','Елец','Ессентук','Железногорск',
  'Жигулевск','Жуковский','Заречный','Зеленогорск','Зеленодольск','Златоуст','Иваново','Ивантеевка','Ижевск',
  'Избербаш','Иркутск','Искитим','Ишим','Ишимбай','Йошкар-Ола','Казань','Калининград','Калуга','Каменск-Уральский',
  'Каменск-Шахтинский','Камышин','Канск','Каспийск','Кемерово','Керчь','Кинешма','Кириши','Киров' ,'Кирово-Чепецк',
  'Киселевск','Кисловодск','Клин','Клинцы','Ковров','Когалым','Коломна','Комсомольск-на-Амуре','Копейск','Королев',
  'Кострома','Котлас','Красногорск','Краснодар','Краснокаменск','Краснокамск','Краснотурьинск','Красноярск',
  'Кропоткин','Крымск','Кстово','Кузнецк','Кумертау','Кунгур','Курган','Курск','Кызыл','Лабинск','Лениногорск',
  'Ленинск-Кузнецкий','Лесосибирск','Липецк','Лиски','Лобня','Лысьва','Лыткарино','Люберцы','Магадан','Магнитогорск',
  'Майкоп','Махачкала','Междуреченск','Мелеуз','Миасс','Минеральные Воды','Минусинск','Михайловка','Михайловск',
  'Мичуринск','Москва','Мурманск','Муром','Мытищи','Набережные Челны','Назарово','Назрань','Нальчик','Наро-Фоминск',
  'Находка','Невинномысск','Нерюнгри','Нефтекамск','Нефтеюганск','Нижневартовск','Нижнекамск','Нижний Новгород',
  'Нижний Тагил','Новоалтайск','Новокузнецк','Новокуйбышевск','Новомосковск','Новороссийск','Новосибирск','Новотроицк',
  'Новоуральск','Новочебоксарск','Новочеркасск','Новошахтинск','Новый Уренгой','Ногинск','Норильск','Ноябрьск','Нягань',
  'Обнинск','Одинцово','Озерск','Октябрьский','Омск','Орел','Оренбург','Орехово-Зуево','Орск','Павлово',
  'Павловский Посад','Пенза','Первоуральск','Пермь','Петрозаводск','Петропавловск-Камчатский','Подольск','Полевской',
  'Прокопьевск','Прохладный','Псков','Пушкино','Пятигорск','Раменское','Ревда','Реутов','Ржев','Рославль','Россошь',
  'Ростов-на-Дону','Рубцовск','Рыбинск','Рязань','Салават','Сальск','Самара','Санкт-Петербург','Саранск','Сарапул',
  'Саратов','Саров','Свободный','Севастополь','Северодвинск','Северск','Сергиев Посад','Серов','Серпухов','Сертолово',
  'Сибай','Симферополь','Славянск-на-Кубани','Смоленск','Соликамск','Солнечногорск','Сосновый Бор','Сочи','Ставрополь',
  'Старый Оскол','Стерлитамак','Ступино','Сургут','Сызрань','Сыктывкар','Таганрог','Тамбов','Тверь','Тимашевск',
  'Тихвин','Тихорецк','Тобольск','Тольятти','Томск','Троицк','Туапсе','Туймазы','Тула','Тюмень','Узловая','Улан-Удэ',
  'Ульяновск','Урус-Мартан','Усолье-Сибирское','Уссурийск','Усть-Илимск','Уфа','Ухта','Феодосия','Фрязино','Хабаровск',
  'Ханты-Мансийск','Хасавюрт','Химки','Чайковский','Чапаевск','Чебоксары','Челябинск','Черемхово','Череповец',
  'Черкесск','Черногорск','Чехов','Чистополь','Чита','Шадринск','Шали','Шахты','Шуя','Щекино','Щелково','Электросталь',
  'Элиста','Энгельс','Южно-Сахалинск','Юрга','Якутск','Ялта','Ярославль'];

let field   = document.querySelector('#field');
let message = document.querySelector('#message');
let firstMessage = document.querySelector('#first-message');
let player = document.querySelector('#player');
let bot = document.querySelector('#bot');
let answerBot = document.querySelector('#answer-bot');
let btn = document.querySelector('button');


player.addEventListener('click', function() {
    firstMessage.remove();
    player.parentElement.remove();
    field.classList.add('active');
    message.classList.add('active');
    message.textContent = 'Твой ход';
    btn.classList.add('active');
    giveUp();
 
});

bot.addEventListener('click', function() {
    firstMessage.remove();
    player.parentElement.remove();
    getMotionbotFirst();
    field.classList.add('active');
    message.classList.add('active');
    btn.classList.add('active');
    giveUp(); 

   
});


let cities = [];



field.addEventListener('keypress', function(event) {

    
    if ((event.code == 'NumpadEnter' || event.code == 'Enter') && cities.length == 0 && allCities.includes(field.value)) {
        cities.push(field.value);
        getMotionbot();
        
        field.value = '';
        
    } else if ((cities[cities.length - 1].slice(-1) == 'ь' || cities[cities.length - 1].slice(-1) == 'ы') && cities.length > 0) {

        if (field.value.slice(0, 1) == cities[cities.length - 1].slice(-2,-1).toUpperCase() && (event.code == 'NumpadEnter' || event.code == 'Enter') && !cities.includes(field.value) && allCities.includes(field.value)) {
            cities.push(field.value);
            getMotionbot();
            
            field.value = '';
            
            
        } else if (cities.includes(field.value)) {
            message.textContent = 'Введите еще не названный город';
        } else if (field.value.slice(0, 1) != cities[cities.length - 1].slice(-2,-1).toUpperCase()) {
            message.textContent = 'Город не соотвествует правилам игры';
        }
       

    } else  {
        if(field.value.slice(0, 1) == cities[cities.length - 1].slice(-1).toUpperCase() && (event.code == 'NumpadEnter' || event.code == 'Enter') && !cities.includes(field.value) && allCities.includes(field.value))  {
            cities.push(field.value);
            getMotionbot();
            field.value = '';
            
           
        } else if (cities.includes(field.value)) {
            message.textContent = 'Введите еще не названный город';
        } else if (field.value.slice(0, 1) != cities[cities.length - 1].slice(-1).toUpperCase()) {
            message.textContent = 'Город не соотвествует правилам игры';
        
        }
    }
    if (cities[cities.length - 1].slice(-1) == 'й') {
        if ((field.value.slice(0, 1) == 'Й' || field.value.slice(0, 1) == 'И') && (event.code == 'NumpadEnter' || event.code == 'Enter') && !cities.includes(field.value) && allCities.includes(field.value)){
            cities.push(field.value);
            getMotionbot();
        }
        else if (cities.includes(field.value)) {
            message.textContent = 'Введите еще не названный город';
        } else if (field.value.slice(0, 1) != cities[cities.length - 1].slice(-1).toUpperCase()) {
            message.textContent = 'Город не соотвествует правилам игры';
        
        }
        
    }


    });
console.log(cities);

function giveUp() {
    btn.addEventListener('click', function() {
        
        message.textContent = 'Ты проиграл';
        field.remove();
        btn.remove();
    });
}

function getMotionbot() {
    let arrayBot = allCities.filter(function(elem) {
        if (field.value.slice(-1) == 'ь' || field.value.slice(-1) == 'ы') {
            if (elem.slice(0, 1) == field.value.slice(-2, -1).toUpperCase() && !cities.includes(elem)) {
                return true;
            }

        } else {
            if (elem.slice(0, 1) == field.value.slice(-1).toUpperCase() && !cities.includes(elem)) {
                return true;
            }
        }
        if (field.value.slice(-1) == 'й') {
            if ((elem.slice(0, 1) == 'И' || elem.slice(0, 1)) == 'Й' && !cities.includes(elem)) {
                return true;
            }
        }
    });
    
    
    answerBot.textContent = arrayBot[getRandomInt(0, arrayBot.length)];
    if (answerBot.textContent.slice(-1) == 'ь' || answerBot.textContent.slice(-1) == 'ы') {
        message.textContent = `Твой ход. Назови город на букву '${answerBot.textContent.slice(-2, -1)}'`;

    } else {
        message.textContent = `Твой ход. Назови город на букву '${answerBot.textContent.slice(-1)}'`;
    }
    cities.push(answerBot.textContent);
    if (arrayBot.length == 0) {
        message.textContent = 'Ты выйграл';
        field.remove();
        btn.remove();
    }
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMotionbotFirst() {

    
    answerBot.textContent = allCities[getRandomInt(0, allCities.length)];
    if (answerBot.textContent.slice(-1) == 'ь' || answerBot.textContent.slice(-1) == 'ы') {
        message.textContent = `Твой ход. Назови город на букву '${answerBot.textContent.slice(-2, -1)}'`;

    } else {
        message.textContent = `Твой ход. Назови город на букву '${answerBot.textContent.slice(-1)}'`;
    }

    
    cities.push(answerBot.textContent);
    

}
