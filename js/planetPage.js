let planetNav = document.querySelectorAll('.nav-of-planets li'),
    imgOfPlanet = document.getElementsByClassName('img-of-planet')[0],
    nameOfPlanet = document.querySelector('.info-data h2'),
    descriptionOfPlanet = document.querySelector('.info-data p'),
    distanceFromPlanet = document.querySelectorAll('.info-numbers > div > .subheading-1')[0],
    travelToPlanet = document.querySelectorAll('.info-numbers > div > .subheading-1')[1]


thisPlanet()

if (localStorage.key('index') === null) {
    planetNav[0].classList.add('this-planet')
}
if (!(localStorage.key('planetData') === null)) {
    uppdetTheData(JSON.parse(localStorage.getItem('planetData')))
}

function thisPlanet() {
    planetNav.forEach((elemet) => {
        elemet.classList.remove('this-planet')
    })
    document.querySelectorAll('.nav-of-planets li').forEach((e) => {
        if (e.getAttribute('data-index') === localStorage.getItem('index')) {
            e.classList.add('this-planet')

        }
    })
}



planetNav.forEach((elemet) => {
    elemet.addEventListener('click', () => {
        planetNav.forEach((elemet) => {
            elemet.classList.remove('this-planet')
        })
        localStorage.setItem('index', elemet.getAttribute('data-index'))
        elemet.classList.add('this-planet')

        let getAPI = new XMLHttpRequest()

        getAPI.open('GET', '../data.json')
        getAPI.send()

        getAPI.onreadystatechange = () => {

            if (getAPI.readyState === 4 && getAPI.status === 200) {

                let jsData = JSON.parse(getAPI.responseText)
                let dest = jsData['destinations']
                let thePlanet = dest[elemet.getAttribute('data-index')]
                localStorage.setItem('planetData', JSON.stringify(dest[elemet.getAttribute('data-index')]))
                uppdetTheData(thePlanet)
            }
        }
    })
})

function uppdetTheData(a) {
    const { name, description, distance, travel, images: { png } } = a
    imgOfPlanet.children[0].setAttribute('src', png)
    nameOfPlanet.innerHTML = name
    descriptionOfPlanet.innerHTML = description
    distanceFromPlanet.innerHTML = distance
    travelToPlanet.innerHTML = travel
}

let getTheIndex = window.localStorage.getItem('index')
