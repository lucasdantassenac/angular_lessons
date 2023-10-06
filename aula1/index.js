let inputs = document.querySelectorAll(".input"),
resultTag = document.querySelector("#result")
document.querySelector('#btn').addEventListener('click', (e) => {
    let allNotes = 0, status, media
    inputs.forEach(input => {
        allNotes += Number(input.value)
    })
    media = allNotes/inputs.length
    if(media >= 6){
        status = true
        resultTag.innerHTML = 'Aprovado'
    } else{
        status = false
        resultTag.innerHTML = 'Reprovado'
    }
})