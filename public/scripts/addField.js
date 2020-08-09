const addButton = document.querySelector('#add-time')

addButton.addEventListener('click', cloneField)


function cloneField() {
    const isNotEmpty = (currValue) => currValue.value != ""
    const newFieldContainer = document.querySelector('#schedule-items').lastElementChild.cloneNode(true)
    //const newFieldContainer = fieldContainers[fieldContainers.length - 1].cloneNode(true)

    // const fieldContainers = document.querySelectorAll('.schedule-item')
    // const newFieldContainer = fieldContainers[fieldContainers.length - 1].cloneNode(true)

    
    // const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')
    const fieldsArr = Array.from(fields)
    console.log(fieldsArr)
    if (fieldsArr.every(isNotEmpty)) {
        fields.forEach((field) => {
            field.value=""
        })
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
    }
    else {
        alert("Faltam campos a serem preenchidos")
        console.log("Faltam campos a serem preenchidos")
    }

    
}

