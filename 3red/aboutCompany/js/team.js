let teamBtn1 = document.querySelector('.team__btn--building');
let teamBtn2 = document.querySelector('.team__btn--engin');
let teamBtn3 = document.querySelector('.team__btn--service');
let teamGroups1 = document.querySelector('.team__wrap--building').children;
let teamGroups2 = document.querySelector('.team__wrap--engin').children;
let teamGroups3 = document.querySelector('.team__wrap--service').children;
// let elementsToDisplay = document.querySelectorAll('.team__list');

teamBtn1.addEventListener('click', function () {
    teamBtn1.classList.toggle("btn--active");
    Array.from(teamGroups1).forEach(teamGroup1 => {
        
        teamGroup1.classList.toggle('display-block');
    });
});
teamBtn2.addEventListener('click', function () {
    teamBtn2.classList.toggle("btn--active");
    Array.from(teamGroups2).forEach(teamGroup2 => {
        
        teamGroup2.classList.toggle('display-block');
       
    });
});
teamBtn3.addEventListener('click', function () {
    teamBtn3.classList.toggle("btn--active");
    Array.from(teamGroups3).forEach(teamGroup3 => {
        teamGroup3.classList.toggle('display-block');
    });
});




function showTeam() {
    let max = 4;
    let i = 0;
    let j = 0;
    let s = 0;
    Array.from(teamGroups1).forEach(teamGroup1 => {
        i += 1;
        if (i > max) {
            teamGroup1.classList.add('display-none');
            
        }
    });
    Array.from(teamGroups2).forEach(teamGroup2 => {
        j += 1;
        if (j > max) {
            teamGroup2.classList.add('display-none');
            
        }
    });
    Array.from(teamGroups3).forEach(teamGroup3 => {
        s += 1;
        if (s > max) {
            teamGroup3.classList.add('display-none');
            
        }
    });
}



// let teamBtns = document.querySelectorAll('.team__btn');
// let teamGroup = document.querySelector ('.team__wrap--building').childNodes;
// let elementsToDisplay = document.querySelectorAll('.team__list');



// teamBtns.forEach(teamBtn => {
//     teamBtn.addEventListener('click', function () {
//         teamBtn.classList.toggle("btn--active");
//         elementsToDisplay.forEach(elementToDisplay => {
//         elementToDisplay.classList.toggle('display-block');
//     });
//     });  
// });
// function showTeam() {
//     let max = 4;
//     let i = 0;
//     elementsToDisplay.forEach(elementToDisplay => {
//         i += 1;
//         if (i > max) {
//             elementToDisplay.classList.add('display-none');
            
//         }
//     });
// }
