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
            if (count >= listImg.length - 1) {
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


    function dropDown() {
        var listArrow = document.getElementsByClassName('list_arrow');

        for (var i = 0; i < listArrow.length; i++) {
            listArrow[i].addEventListener('click', function () {
                this.nextElementSibling.classList.toggle('show');
            })
        }

    }

    dropDown();

    function choose() {
        var listPanel = document.querySelectorAll('.list_panel li');
        var listLabel = document.getElementsByClassName('list_label');
        var transportCheck = document.getElementById('transport');
        var value = document.querySelectorAll('.panel_right .value');

        var title = document.querySelector('.title');
        var color = document.querySelector('.color');
        var pattern = document.querySelector('.pattern');
        var transport = document.querySelector('.transport');

        var sumText = document.querySelector('.sum strong');

        var sum = 0;


        for (var i = 0; i < listPanel.length; i++) {
            listPanel[i].addEventListener('click', function () {
                this.parentElement.previousElementSibling.previousElementSibling.innerText = this.innerText;
                this.parentElement.previousElementSibling.previousElementSibling.style.color = 'black';
                title.innerText = "Chair " + listLabel[0].innerText;

                if (listLabel[0].innerText === 'Clair') {
                    value[0].innerText = 200;
                    sum = 200;
                    sumText.innerText = sum;
                } else if (listLabel[0].innerText === 'Margarita') {
                    value[0].innerText = 300;
                    sum = 300
                    sumText.innerText = sum;
                } else if (listLabel[0].innerText === 'Selena') {
                    value[0].innerText = 400;
                    sum = 400;
                    sumText.innerText = sum;
                } else {
                    value[0].innerText = '';
                }

                color.innerText = listLabel[1].innerText;
                if (listLabel[1].innerText === 'Czerwony') {
                    value[1].innerText = 40;
                    sum += 40;
                    sumText.innerText = sum;
                } else if (listLabel[1].innerText === 'Czarny') {
                    value[1].innerText = 50;
                    sum += 50;
                    sumText.innerText = sum;
                } else if (listLabel[1].innerText === 'Pomarańczowy') {
                    value[1].innerText = 60;
                    sum += 60;
                    sumText.innerText = sum;
                } else {
                    value[1].innerText = '';
                }

                pattern.innerText = listLabel[2].innerText;
                if (listLabel[2].innerText === 'Tkanina') {
                    value[2].innerText = 100;
                    sum += 100;
                    sumText.innerText = sum;
                } else if (listLabel[2].innerText === 'Skóra') {
                    value[2].innerText = 200;
                    sum += 200;
                    sumText.innerText = sum;
                } else {
                    value[2].innerText = '';
                }


                this.parentElement.classList.toggle('show');
            });

            listPanel[i].addEventListener('mousemove', function () {
                this.style.backgroundColor = 'lightblue';
            });

            listPanel[i].addEventListener('mouseleave', function () {
                this.style.backgroundColor = '';
            });
        }

        transportCheck.addEventListener("change", function () {
            if (this.checked) {
                transport.innerText = 'Transport';
                value[3].innerText = 200;
                sum += 200;
                sumText.innerText = sum;
            } else {
                transport.innerText = '';
                value[3].innerText = '';
                sum -= 200;
                sumText.innerText = sum;
            }
        });


    }

    choose();

});