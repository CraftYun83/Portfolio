var currentElement = undefined;
var projects = 1;
var projectlist = ["Lorainne", "DWU", "IMG to MC Carpet", "JSON Viewer"]
var projectlistlinks = [
    "https://github.com/CraftYun83/Lorainne", 
    "https://github.com/CraftYun83/Auto-Desktop-Wallpaper-Updater", 
    "https://github.com/CraftYun83/Image-to-Minecraft-Carpet", 
    "https://github.com/CraftYun83/JSON-Viewer"
]
var projectimg = [
    "images/lorainne-image.png",
    "images/dwu-image.jpeg",
    "images/img2carpet-image.jpg",
    "images/jsonviewer-image.png"
]
var pointer = 0;

document.getElementById("btonav").onclick = function () {
    window.location.href = "index.html"
}

function createNewProject(bool) {
    var NE = document.createElement("div");
    NE.id = "p"+projects.toString()+"cont"
    NE.classList.add("project-container")
    var NEE = document.createElement("div");
    NEE.id = "p"+projects.toString()
    NEE.classList.add("project")
    var H2E = document.createElement("a")
    H2E.href = projectlistlinks[pointer]
    H2E.target = "_blank"
    H2E.textContent = projectlist[pointer]
    H2E.classList.add("plink")
    var IMG = document.createElement("img")
    IMG.src = projectimg[pointer]
    NEE.appendChild(H2E)
    NEE.appendChild(IMG)
    NE.appendChild(NEE)
    document.getElementsByClassName("first-line")[0].appendChild(NE)
    if (bool) {
        NE.classList.add("np")
    } else {
        NE.classList.add("nnp")
    }
    projects++;
    return NE
}

currentElement = createNewProject("Three.JS", true)

document.getElementById("forwButton").addEventListener("click", (event) => {
    document.getElementById("backButton").style.stroke = "#ffffff"
    if (!(pointer == projectlist.length-1)) {
        pointer++;
        if (pointer == projectlist.length-1) {
            document.getElementById("forwButton").style.stroke = "#9e9e9e"
        }
        if (currentElement.classList.contains("np")) {
            currentElement.classList.remove("np")
        } if (currentElement.classList.contains("nnp")) {
            currentElement.classList.remove("nnp")
        }
        currentElement.classList.add("np2")
        setTimeout(() => {
            currentElement.parentElement.removeChild(currentElement)
            currentElement = createNewProject(true)
        }, 300)
    }
})


document.getElementById("backButton").addEventListener("click", (event) => {
    document.getElementById("forwButton").style.stroke = "#ffffff"
    if (!(pointer == 0)) {
        pointer--;
        if (pointer == 0) {
            document.getElementById("backButton").style.stroke = "#9e9e9e"
        }
        if (currentElement.classList.contains("np")) {
            currentElement.classList.remove("np")
        } if (currentElement.classList.contains("nnp")) {
            currentElement.classList.remove("nnp")
        }
        currentElement.classList.add("nnp2")
        setTimeout(() => {
            currentElement.parentElement.removeChild(currentElement)
            currentElement = createNewProject(false)
        }, 300)
    }
})