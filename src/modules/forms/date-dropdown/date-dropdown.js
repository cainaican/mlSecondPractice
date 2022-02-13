import $ from 'jquery'

const mounth = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']

let mainDate = new Date()
let mainYear = mainDate.getFullYear()
let mainMonth = mainDate.getMonth()

function showCalendar(){
    $('.calendar')[0].style.display == '' 
    ? $('.calendar')[0].style.display = 'none'
    :$('.calendar')[0].style.display = '';
}

function fillUpCalendar(year=mainDate.getFullYear(), month = mainDate.getMonth()){

    const date = new Date(year, month) 

    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 0);

    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

    $('.month')[0].innerHTML = mounth[date.getMonth()]
    $('.year')[0].innerHTML = date.getFullYear()

    let pointer = (firstDayOfMonth.getDay() == 0) ? 7 :firstDayOfMonth.getDay()

    for(let i = pointer; i < lastDayOfMonth.getDate() + pointer; i++){
        (pointer == 7)
        ? $(`.day${i}`)[0].innerHTML = i - 6
        : $(`.day${i}`)[0].innerHTML = i - firstDayOfMonth.getDay() + 1     
        
    }
}

function addMonth(){
    cleanUpCalendar()
    fillUpCalendar(mainYear, ++mainMonth)
    
    today()
}

function subMonth(){
    cleanUpCalendar()
    fillUpCalendar(mainYear, --mainMonth)

    today()
}

function cleanUpCalendar(){
    for(let i = 1; i < 43; i++){
        $(`.day${i}`)[0].innerHTML = ''
    }
}

function today(){
    for(let i = 1; i < 43; i++){

        if ($(`.day${i}`)[0].innerHTML == mainDate.getDate() && 
        mounth[mainDate.getMonth()] == $('.month')[0].innerHTML &&
        mainDate.getFullYear() == $('.year')[0].innerHTML)
        {
            $(`.day${i}`)[0].className += ' today'
        }

        if ($(`.day${i}`)[0].classList.value.includes('today') && mounth[mainDate.getMonth()] != $('.month')[0].innerHTML){
            $(`.day${i}`)[0].className = `day${i}`
            console.log('in')
        }
    }
}

$('.show__btn')[0].onclick = showCalendar
$('.calendar__top__btn-left ')[0].onclick = subMonth
$('.calendar__top__btn-right ')[0].onclick = addMonth

fillUpCalendar()
showCalendar()
today()