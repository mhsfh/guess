btn = document.getElementsByTagName("button")[0]
btn.addEventListener("click", play)
x = null;
con = 0;
function play() {
    btn.innerHTML = "Submit guess"
    rsl.innerHTML = ""
    rsl.style.backgroundColor = "unset"
    if (num.value != "") {
        con == 0 ? x = null : null;
        con += 1
        console.log(`x = ${x}`)
        console.log(`con = ${con}`)
        if (x == null) {
            x = Math.floor(Math.random() * 100)
        }
        chk(x)
        if (con == 10) {
            x = null;
            pre.innerHTML = ""
            rsl.innerHTML = `!!!GAME OVER!!!`
            rsl.style.backgroundColor = "red"
            btn.innerHTML = "New Game"
        }
    }
}
function chk(x) {
    if (num.value != "") {
        pre.innerHTML += num.value + " "
        if (num.value > x) {
            rsl.innerHTML = `Last guess was too high!`
            console.log(num.value - x)
            num.value - x > 30 ? red = "var(--red)" : red = "#df6767"
            rsl.style.backgroundColor = red
        } else if (num.value < x) {
            num.value - x < 30 ? red = "var(--ceil)" : red = "#78aeec"
            rsl.style.backgroundColor = red
            rsl.innerHTML = `Last guess was too low!`
        } else if (num.value == x) {
            rsl.innerHTML = `Congratulations! You got it right!`
            rsl.style.backgroundColor = "var(--green)"
            con = 0
            btn.innerHTML = "New Game"
            pre.innerHTML = ""
        }
        num.value = ""
    }
}