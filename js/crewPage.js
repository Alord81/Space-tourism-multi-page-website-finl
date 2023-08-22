const getCrewNav = document.querySelectorAll('.crew-nav li'),
    personPhoto = document.querySelector('.crew-photo img'),
    personName = document.getElementById('name'),
    perosnRole = document.getElementById('role'),
    personBio = document.getElementById('bio');

let theNumber = localStorage.getItem('The Number')
let personData = localStorage.getItem('Person Data')

if (!(personData === null)) {
    console.log(JSON.parse(personData))
    uppdetTheData(JSON.parse(personData))
}
console.log(personPhoto)

if (theNumber === null) {
    getCrewNav.forEach((e) => {
        e.classList.remove('this-person')
    })
    getCrewNav[0].classList.add('this-person')
    personPhoto.parentElement.classList.add('show-me')
    personPhoto.setAttribute('src', '/assets/crew/image-douglas-hurley.png')
} else {
    getCrewNav.forEach((e) => {
        e.classList.remove('this-person')
    })
    getCrewNav[theNumber].classList.add('this-person')

}
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