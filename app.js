var accords = document.querySelectorAll(".accord")
var accordion = document.querySelectorAll(".accordion")
var detail = document.querySelectorAll(".plan-details")
var plans = document.querySelector(".selected-plans")
var span = document.querySelector(".progress-bar span")
// get button
const checkboxButton = document.querySelectorAll('.shopping-item-checkbox')

// get all icons
const emptyIcon = document.querySelectorAll('.not-completed-icon')
const completedIcon = document.querySelectorAll('.completed-icon')
const loadIcon = document.querySelectorAll('.loading-icon')
const checkboxStatus = document.querySelectorAll('.checkbox-status')


const DONE = 'done'
let array = []

plans.innerHTML = array.length

// console.log(checkboxButton[0].ariaLabel.replace('as done', 'as not done'))



    

// accords.forEach(accord => {
//     accord.addEventListener("click", () => {
//         var accordion = document.querySelectorAll(".accordion")
//         var detail = document.querySelectorAll(".plan-details")

//         accord.classList.toggle("active")
//         accordion[1].classList.toggle("active")
//         detail[1].classList.toggle("active")
//         console.log(detail[0], accordion[0], accord)
//     })
// })
// span.style.width =


const showAccord = (n) => {
    accords.forEach(accord => {
        accord.classList.remove("active")
    })
    accordion.forEach(accord => {
        accord.classList.remove("active")
    })
    detail.forEach(accord => {
        accord.classList.remove("active")
    })

    accords[n].classList.toggle("active")
    accordion[n].classList.toggle("active")
    detail[n].classList.toggle("active")
}

const showPlans = () => {
    var ACCORDIONS = document.getElementById('accordions')
    var DOWN = document.querySelector('.down')

    if (DOWN.style.transform !== 'rotate(180deg)') {
        DOWN.style.transform = 'rotate(180deg)'
    } else {
        DOWN.style.transform = 'rotate(0deg)'
    }
    if (ACCORDIONS.style.display === "none") {
        ACCORDIONS.style.display = "block";
    } else {
        ACCORDIONS.style.display = "none";
    }
}

const closeNote = () => {
    var NOTIFY = document.querySelector('.notify')
    NOTIFY.style.display = "none"
}
const showMenu = () => {
    var menu = document.querySelector('.menu')
    var user = document.querySelector('.user')
    var menuuser = document.querySelector('.menu-user')
    

    const isExpanded = user.attributes["aria-expanded"].value === "true";

    if(isExpanded){
        user.ariaExpanded = "false"
        user.focus()
    } else {
        user.ariaExpanded = "true"
        menuuser.focus()
    }
    if (menu.style.display === "none") {
        var alert = document.querySelector('.alert')
        var bell = document.querySelector('.bell')
        menu.style.display = "block";
        user.style.background = "#656266"
        alert.style.display = "none";
        bell.style.background = "#303030";
    } else {
        menu.style.display = "none";
        user.style.background = "#303030";
    }

}
const showAlert = () => {
    var alert = document.querySelector('.alert')
    var bell = document.querySelector('.bell')
    var menu = document.querySelector('.menu')
    var user = document.querySelector('.user')
    if (alert.style.display === "none") {
        alert.style.display = "block";
        bell.style.background = "#656266"
        menu.style.display = "none";
        user.style.background = "#303030";
    } else {
        alert.style.display = "none";
        bell.style.background = "#303030";
    }
}

// on click, hide empty checkbox
function handleDoneStatus(i){
    // checkboxButton.disabled = 'false'

    const num = i + 1
    emptyIcon[i].classList.add('hidden')
    loadIcon[i].classList.remove('hidden')
    checkboxStatus[i].ariaLabel = 'Loading. Please Wait'
    setTimeout(() => {

        completedIcon[i].classList.remove('hidden')
        loadIcon[i].classList.add('hidden')
        checkboxButton[i].ariaLabel = checkboxButton[i].ariaLabel.replace('Select', 'Unselect') 

        checkboxStatus[i].ariaLabel = 'Mark as done'
        checkboxButton[i].classList.add(DONE)
        if(num<5){
            showAccord(num)
        }
        
        // checkboxButton.disabled = 'true'

    }, 500)

}
function handleUnDoneStatus(i){
    // checkboxButton.disabled = 'false'
    completedIcon[i].classList.add('hidden')
    loadIcon[i].classList.remove('hidden')
    
    setTimeout(() => {
        loadIcon[i].classList.add('hidden');
        emptyIcon[i].classList.remove('hidden')
        checkboxButton[i].ariaLabel = checkboxButton[i].ariaLabel.replace('Unselect', 'Select') 
        checkboxStatus[i].ariaLabel = 'Mark as done'
        checkboxButton[i].classList.remove(DONE)
        // checkboxButton.disabled = 'true'
    }, 500)
}
function handleStatus(i){
    const markedAsDone = checkboxButton[i].classList.contains(DONE);

        
    if(markedAsDone){
        handleUnDoneStatus(i)
    } else {
        handleDoneStatus(i)
    }
}

const addNumber = (n, i) => {
    handleStatus(i)
    if(!array.includes(n)){
        array.push(n)
    } else {
        array = array.filter(letter => letter !== n)
        //letters.filter(letter => letter !== letterToRemove);

    }  
    var Percent = (array.length / 5)*100
    plans.innerHTML = array.length
    span.style.width = `${Percent}%`
    
}




