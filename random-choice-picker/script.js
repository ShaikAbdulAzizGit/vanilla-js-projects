const text_area = document.getElementById('textarea')
const tags_container= document.querySelector('.tags-container')


// console.log(text_area)
// console.log(tags_container)

text_area.focus()

text_area.addEventListener('keyup',(e)=>{
    create_tags(e.target.value)

    if(e.key==='Enter'){
        setTimeout(() => {
            text_area.value=''
            tags=tags_container.querySelectorAll('span')
            randomize(tags)
            // random_tag_element = get_random_tag_element(tags)
            // highlight_element(random_tag_element)

        }, 10);
    }
    // console.log(e.target)

})

function randomize(tags){

    let interval=setInterval(() => {
        let random_element=get_random_tag_element(tags)
        highlight_element(random_element)
        setTimeout(() => {
            un_highlight_element(random_element)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            random_element=get_random_tag_element(tags)
            highlight_element(random_element)
        }, 100);
    }, 3000);


}

function highlight_element(tag){
    tag.classList.add('highlight')

}
function un_highlight_element(tag){
    tag.classList.remove('highlight')

}


function get_random_tag_element(tags){
    return tags[Math.floor(Math.random() * tags.length)]
}
function create_tags(value){
    tags_container.innerHTML=''
    const tags = value.split(',').filter(tag => tag.trim()!=='').map(tag => tag.trim())

    tags.forEach(tag => {
        const tag_element = document.createElement('span')
        tag_element.classList.add('tag')
        tag_element.textContent=tag
        tags_container.appendChild(tag_element)
    });}