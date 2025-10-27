function randomPassword(){

    let password = ""
    let character = "QAZWSXEDCRFVTGBYHNUJMIKOLP0123456789qazwsxedcrfvtgbyhnujmikolp"

    for(let i=0; i<8; i++){
        let random = Math.floor(Math.random() * character.length)
        password += character[random]
    }

    let change = document.getElementById("change")
    change.innerHTML = password
}