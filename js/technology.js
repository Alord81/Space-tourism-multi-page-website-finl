let tecNav = document.querySelectorAll('.tec-nav li'),
    tecImage = document.querySelector('.tec-img'),
    tecName = document.getElementsByTagName('h3')[0],
    tecDescription = document.getElementsByTagName('p')[0],
    tecImages = document.querySelectorAll('.tec-img img')

console.log(tecImages)

tecNav.forEach((element) => {
    element.addEventListener('click', () => {
        tecNav.forEach((e) => {
            e.classList.remove('this-tec')
        })
        element.classList.add('this-tec')

        tecImage.classList.remove('show-for-me')
        setTimeout(() => {
            tecImage.classList.add('show-for-me')
        }, 250)


        // Get API
        let getAPI = new XMLHttpRequest()

        getAPI.open('GET', '../data.json')
        getAPI.send()

        getAPI.onreadystatechange = () => {

            if (getAPI.readyState === 4 && getAPI.status === 200) {

                let jsData = JSON.parse(getAPI.responseText)
                let crew = jsData['technology']
                let thePerson = crew[element.getAttribute('data-number')]
                console.log(thePerson)
                // localStorage.setItem('Person Data', JSON.stringify(thePerson))

                uppdetTheData(thePerson)
            }
        }

    })
})

function uppdetTheData(data) {
    const { name, description, images: { portrait, landscape } } = data;
    tecName.innerHTML = name;
    tecDescription.innerHTML = description
    setTimeout(() => {
        tecImages[0].setAttribute('src', portrait)
        tecImages[1].setAttribute('src', landscape)
    }, 250)

}