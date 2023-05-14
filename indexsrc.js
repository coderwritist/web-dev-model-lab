function darkmode() {
    const main = document.getElementById("main")
    const sec = document.getElementsByTagName("section")
    main.style.backgroundColor = "black"
    main.style.color = "white"
    for(let i = 0; i<sec.length; i++) {
        sec[i].style.backgroundColor = "black"
    }
}