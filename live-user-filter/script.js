const user_input = document.getElementById('user-input')
const users_list = document.querySelector('.users-list')


user_input.addEventListener('input',(e)=>filter_user(e.target.value))
function add_elements(data) {
    users_list.innerHTML=""
    data.forEach(user => {
        const random_user_name = `${user.name.first} ${user.name.last}`
        const location = `${user.location.city} , ${user.location.country}`
        const li = document.createElement('li')
        element_content = `
                <img src="${user.picture.thumbnail}" alt="${random_user_name}">
                <div class="user-info">
                    <h4>${random_user_name}</h4>
                    <p>${location}</p>
                </div>
        `
        li.innerHTML=element_content
        users_list.appendChild(li)
    });
}

async function get_data() {
    const response = await fetch('https://randomuser.me/api?results=50')
    const data = await response.json()
    add_elements(data.results)
    
}

function filter_user(user_input){
    random_users=users_list.querySelectorAll('li')
    random_users.forEach(user => {
        inner_text=user.innerText
        if(inner_text.toLowerCase().includes(user_input.toLowerCase())){
            user.classList.remove('hide')

        }else{
            user.classList.add('hide')
        }
    });

}



get_data()
