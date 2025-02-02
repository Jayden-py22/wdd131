console.log("Cool Pics Gallery Loaded!");

const menuButton = document.querySelector("button");
const navMenu = document.querySelector("nav");

function toggleMenu() {
    navMenu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    if (window.innerWidth > 1000) {
        navMenu.classList.remove("hide");
    } else {
        navMenu.classList.add("hide");
    }
}

handleResize();

window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    if (event.target.tagName === "IMG") {
        let imgSrc = event.target.src;
        
        if (imgSrc.includes("-sm.jpeg")) {
            imgSrc = imgSrc.replace("-sm.jpeg", "-full.jpeg");
        }

        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgSrc, event.target.alt));

        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    document.querySelector(".viewer").remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);