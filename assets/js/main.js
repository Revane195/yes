let uploadFile = document.querySelector("#quote form #upload");
uploadFile.addEventListener("change", function () {
    displayFileName();
});

function displayFileName() {
    let fileName = uploadFile.files[0].name;
    let fileNameDisplay = document.querySelector('#quote form .file-name');
    fileNameDisplay.textContent = fileName;
    let uploadLabel = document.querySelector('#quote form #upload-label');
    uploadLabel.innerText = "Replace";
}


/////////////////////////////////////////////////////////////////////////////////////

let galleryItem = document.querySelectorAll("#gallery .gallery-box-item");
let galleryItemClose = document.querySelector(".image-box .close");
let imageBox = document.querySelector(".image-box");
let imageBoxPhoto = document.querySelector(".image-box .photo img");
let imageBoxPrevBtn = document.querySelector(".image-box .prev");
let imageBoxNextBtn = document.querySelector(".image-box .next");
let imageCount = document.querySelector(".image-box .slide-num");

let currentIndex = 0;

galleryItemClose.addEventListener("click", function () {
    imageBox.style.display = "none";
});

galleryItem.forEach((element, index) => {
    element.addEventListener("click", function () {
        imageBox.style.display = "block";
        currentIndex = index;
        showCurrentImage();
    });
});

imageBoxPrevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + galleryItem.length) % galleryItem.length;
    showCurrentImage();
});

imageBoxNextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % galleryItem.length;
    showCurrentImage();
});

function showCurrentImage() {
    let currentImage = galleryItem[currentIndex].querySelector('img').src;
    imageBoxPhoto.src = currentImage;
    imageCount.innerText = `${currentIndex + 1}/${galleryItem.length}`;
}




////////////////////////////////////////////////////////////////////////////////////////



let acc = document.querySelectorAll("#faq .accordion .accordion-item button");
let accNav =document.querySelectorAll("header .accordion .accordion-item button")



accNav.forEach((element, index) => {
    if (element.parentElement.querySelector('.panel')) {
        element.parentElement.classList.add('has-panel');
    }
    element.addEventListener("click", function () {
        accNav.forEach((e, i) => {
            if (i !== index) {
                e.parentElement.classList.remove("active");
                if (e.nextElementSibling) {
                    e.nextElementSibling.style.maxHeight = null;
                }
            }
        });

        this.parentElement.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});



acc.forEach((element, index) => {
    element.addEventListener("click", function () {
        acc.forEach(e => {
            e.parentElement.classList.remove("active")
            e.nextElementSibling.style.maxHeight = null
        })

        element.parentElement.classList.toggle("active")
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
})


////////////////////////////////////////////////////////////////////////////

let nav = document.querySelector("#nav-menu")
let header = document.querySelector("header")
let categoryitem = nav.querySelectorAll(".category .left-menu a")
let categoryBox = nav.querySelectorAll(".category .right-menu .right-menu-item")
let navItem = nav.querySelectorAll(".nav-menu-item")
let serachItem = nav.querySelector(".nav-menu-item-last.search")
let serachItemClose = serachItem.querySelector("search-btn")
let shopItem = header.querySelector(".contact-mobile .shop")
let shopItemClose = header.querySelector(".contact-mobile .shop-btn")
let contactBox = header.querySelector(".contact-box")
let mobilMenu = header.querySelector(".mobil-menu ")
let mobilMenuClose = mobilMenu.querySelector(".mobil-menu-close")

let navDropMenuShow = (parent) => {
    let leftMenuItem = parent.querySelectorAll(".left-menu a")
    let rightMenuItem = parent.querySelectorAll(".right-menu .right-menu-item")
    leftMenuItem.forEach((element, index) => {
        element.addEventListener("mouseover", function () {
            leftMenuItem.forEach(e => {
                e.classList.remove("active")
            })
            this.classList.add('active');
            rightMenuItem.forEach(e => {
                e.classList.remove("show")
            })
            rightMenuItem[index].classList.add("show")
        });

    })

}

navItem.forEach(element => {

    element.addEventListener("mouseover", function () {
        let dropMenu = element.querySelector(".nav-menu-item-drop")
        navItem.forEach(e => {
            e.classList.remove("active")
        })
        element.classList.add("active")
        header.classList.add("active")

        navDropMenuShow(element);
        if (dropMenu !== null) {
            serachItem.classList.remove('active')
        }
        else{
            header.classList.remove("active")

        }
    })
    element.addEventListener("mouseout", function () {
        element.classList.remove("active")
        header.classList.remove("active")

    })
})


contactBox.addEventListener("mouseover", function () {
    navItem.forEach(e => {
        e.classList.remove("active")
    })
    contactBox.classList.add("active")
    header.classList.add("active")
    serachItem.classList.remove('active')

  
   
})
contactBox.addEventListener("mouseout", function () {
    contactBox.classList.remove("active")
    header.classList.remove("active")

})




shopItem.addEventListener("click", function () {
    shopItem.classList.toggle("active")
    if (shopItem.classList.contains("active")) {
        header.classList.add("active")
    }
    else {
        header.classList.remove("active")
    }
})
shopItemClose.addEventListener("click", function () {
    shopItem.classList.remove("active")
    header.classList.remove("active")
})


mobilMenu.addEventListener("click", function () {
    mobilMenu.classList.add("active")

    
})
mobilMenuClose.addEventListener("click", function (event) {
    event.stopPropagation();
    mobilMenu.classList.remove("active")
})






serachItem.addEventListener("click", function () {
    serachItem.classList.toggle("active")
    if (serachItem.classList.contains("active")) {
        header.classList.add("active")
    }
    else {
        header.classList.remove("active")
    }
})
serachItemClose.addEventListener("click", function () {
    serachItem.classList.remove("active")
    header.classList.remove("active")
})
