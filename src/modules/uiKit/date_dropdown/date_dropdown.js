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
}

function subMonth(){
    cleanUpCalendar()
    fillUpCalendar(mainYear, --mainMonth)

}

function cleanUpCalendar(){
    for(let i = 1; i < 43; i++){
        $(`.day${i}`)[0].innerHTML = ''
    }
}

$('.show__btn')[0].onclick = showCalendar
$('.btn__left')[0].onclick = subMonth
$('.btn__right')[0].onclick = addMonth

fillUpCalendar()