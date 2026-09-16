const slider_container = document.querySelector(".slider-container")
const left_slider = document.querySelector(".left-slider")
const right_slider = document.querySelector(".right-slider")
const button_down = document.querySelector("#down-btn")
const button_up = document.querySelector("#up-btn")

const slides_length = right_slider.querySelectorAll("div").length


left_slider.style.top = `-${((slides_length - 1) * 100)}vh`

left_slider.style.top = `-${(slides_length - 1) * 100}vh`

button_up.addEventListener('click', () => change_slide('up'))
button_down.addEventListener('click', () => change_slide('down'))



let active_slide_index = 0

const change_slide = (direction) => {
    const slider_height = slider_container.clientHeight
    if (direction === "up") {
        active_slide_index++
        if (active_slide_index > slides_length - 1) {
            active_slide_index = 0
        }
    } else if (direction === "down") {
        active_slide_index--
        if (active_slide_index < 0) {
            active_slide_index = slides_length-1
        }
    }
    right_slider.style.transform = `translateY(-${active_slide_index * slider_height}px)`
    left_slider.style.transform = `translateY(${active_slide_index * slider_height}px)`

}


