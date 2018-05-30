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

    function slider() {
        var prevPicture = document.getElementById('prevPicture');
        var nextPicture = document.getElementById('nextPicture');

        var listImg = document.querySelectorAll('.slider div');
        console.log(listImg);

        var count = 0;

        listImg[count].classList.add('visible');

        nextPicture.addEventListener('click', function () {
            console.log('nextPicture');
            listImg[count].classList.remove('visible');
            if(count >= listImg.length - 1) {
                count = 0;
            } else {
                count++;
            }
            listImg[count].classList.add('visible');

        });

        prevPicture.addEventListener('click', function () {
            console.log('prevPicture');
            listImg[count].classList.remove('visible');
            if (count === 0) {
                count = listImg.length - 1;
            } else {
                count--;

            }
            listImg[count].classList.add('visible');
        })

    }

    slider();



});