const form = document.querySelector('.user-search')
const input = document.querySelector('.user-input')
const loading = document.querySelector('.loading')
const container = document.querySelector('.container')
const results = document.querySelector('.results')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    loading.classList.remove('hide')
    get_data(input.value)
})


async function get_data(user_name) {
    results.innerHTML=""
    const response = await fetch(`https://api.github.com/users/${user_name.trim().toLowerCase()}`)
    const data = await response.json()
    loading.classList.add('hide')
    const user_info = document.createElement('div')
    user_info.classList.add('user-info')
    const content=`
        <div class="user-info">
            <h2 class="user-name">${data.name!=null ? data.name : data.login}</h2>
            <img src="${data.avatar_url}" alt="">
            <h4>Followers : ${data.followers}</h4>
            <h4>Following : ${data.following}</h4>
            <h4>Public Repo's : ${data.public_repos}</h4>
        </div>
    `
    user_info.innerHTML = content
    results.appendChild(user_info)

}

