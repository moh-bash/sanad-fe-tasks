const boxes = document.querySelectorAll('.box');
const details = document.querySelectorAll('.details');
const accordion = document.getElementById('accordion');

accordion.addEventListener('click', (e) => {
    boxes.forEach((box, index) => {
        if (box.contains(e.target)) {
            details[index].classList.toggle('hidden');
        } else {
            details[index].classList.add('hidden');
        }
    });
});