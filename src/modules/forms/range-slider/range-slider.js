import * as noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});