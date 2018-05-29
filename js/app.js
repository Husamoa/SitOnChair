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

        for (var i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener('mouseover', function () {
                this.firstElementChild.classList.add('hidden');
            })

            boxes[i].addEventListener('mouseout', function () {
                this.firstElementChild.classList.remove('hidden');
            })

        }
    }

    hiddenDescription();

    


});