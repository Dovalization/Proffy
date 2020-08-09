const removeButton = document.querySelector('#remove-time')

removeButton.addEventListener('click', removeField)


function removeField() {
    //Verificar se não é o primeiro elemento
     const fieldContainers = document.querySelectorAll('.schedule-item')

     if (fieldContainers.length == 1) {
         return
     } else {
         document.querySelector('#schedule-items').removeChild(fieldContainers[fieldContainers.length - 1])
     }

    
}

