window.addEventListener('resize', function(event) {
    console.log(event.window.innerHeight-36)
    this.document.getElementById("chatWindow").style.height=event.window.innerHeight-36
}, true)
