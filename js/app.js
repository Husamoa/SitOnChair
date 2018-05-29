document.addEventListener("DOMContentLoaded", function () {

    function dropDownMenu() {
        var dropDownMenu = document.getElementById('myDropdown');
        var dropbtn = document.getElementById('dropbtn');

        dropbtn.addEventListener("mouseover", function () {
            dropDownMenu.classList.toggle('show');
        });

        dropbtn.addEventListener("mouseleave", function () {
            dropDownMenu.classList.remove('show');
        });

        dropDownMenu.addEventListener("mouseover", function () {
            dropDownMenu.classList.add('show');
        });

        dropDownMenu.addEventListener("mouseleave", function () {
            dropDownMenu.classList.remove('show');
        })
    }

    dropDownMenu();


    function hiddenDescription() {
        var boxes = document.getElementsByClassName('box');
        console.log(boxes);

        var description = document.getElementsByClassName('description');

        boxes[0].addEventListener('mouseover', function () {
            description[0].classList.add('hidden');
        });

        boxes[1].addEventListener('mouseover', function () {
            description[1].classList.add('hidden');
        });

        for (var i = 0; i < boxes.length; i++) {
           boxes[i].addEventListener('mouseout', function () {
               description[0].classList.remove('hidden');
               description[1].classList.remove('hidden');
           })
        }
    }

    hiddenDescription();




});