import $ from 'jquery'


$('.select__input')[0].innerText = 'Сколько гостей'
$('.select__dropdown-item')[0].innerHTML = `Взрослые <a>+</a><span>0</span><a>-</a>`
$('.select__dropdown-item')[1].innerHTML = `Дети <a>+</a><span>0</span><a>-</a>`
$('.select__dropdown-item')[2].innerHTML = `Младенцы <a>+</a><span>0</span><a>-</a>`
$('.select__dropdown-item')[3].innerHTML = `<a>Очистить</a><a>Применить</a>`


$('.select__input')[0].onclick = showSwitch

function showSwitch(){
    $('.select')[0].classList.contains('open')
    ? $('.select')[0].className = 'select'
    : $('.select')[0].className += ' open';
}

