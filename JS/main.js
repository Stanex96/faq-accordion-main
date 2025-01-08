let hiddenText = document.querySelectorAll('.hiddenText');
let plusIcon   = document.querySelectorAll('.plus-icon');
let minusIcon  = document.querySelectorAll('.minus-icon');

plusIcon.forEach((iconPlus, index) => {
    iconPlus.addEventListener('click', () => {
        iconPlus.style.display          = 'none';
        minusIcon[index].style.display  = 'inline';
        hiddenText[index].style.display = 'inline';
    })
})

minusIcon.forEach((iconMinus, index) => {
    iconMinus.addEventListener('click', () => {
        iconMinus.style.display         = 'none';
        plusIcon[index].style.display   = 'inline';
        hiddenText[index].style.display = 'none';
    })
})