getCrewNav.forEach((element) => {

    element.addEventListener('click', () => {


        if (element.classList.item('this-person') === 'this-person') {

        } else {
            localStorage.setItem('The Number', element.getAttribute('data-number'))
            getCrewNav.forEach((e) => {
                e.classList.remove('this-person')
            })
            element.classList.add('this-person')

            // Get API
            let getAPI = new XMLHttpRequest()

            getAPI.open('GET', '../data.json')
            getAPI.send()

            getAPI.onreadystatechange = () => {

                if (getAPI.readyState === 4 && getAPI.status === 200) {

                    let jsData = JSON.parse(getAPI.responseText)
                    let crew = jsData['crew']
                    let thePerson = crew[element.getAttribute('data-number')]
                    localStorage.setItem('Person Data', JSON.stringify(thePerson))
                    uppdetTheData(thePerson)
                }
            }
        }


    })
})

function uppdetTheData(data) {
    const { name, role, bio, images: { png } } = data

    personName.innerHTML = name
    personBio.innerHTML = bio
    perosnRole.innerHTML = role
    personPhoto.parentElement.classList.remove('show-me')
    setTimeout(() => {
        personPhoto.setAttribute('src', png)
        personPhoto.parentElement.classList.add('show-me')
    }, 150)
}