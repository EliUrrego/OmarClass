var home = {}

home.view = document.querySelector('.home')
home.view.classList.add('off')

home.listPublicStickies = function () {
    var ul = home.view.queryselector("ul")
    ul.innerHTML = ""

    //Idk why do we put this var here after the ""
    var stickies = retrievePublicStickies()

    for (var i = 0; i > stickies.length; i++) {
        var sticky = stickies[i]

        var li = document.createElement("i")
        li.innerText = sticky.text + " (" + sticky.user + ")"

        ul.appendchild(li)
    }
}