document.querySelector('#btn').addEventListener('click', (e) => {
    e.preventDefault()
    let name = document.querySelector('input[name="name"]'),
    sexMale =  document.querySelector('option[value="male"]'),
    birthday = document.querySelector('input[name="birthday"]').value,
    birthdayAsDate = new Date(birthday),
    currentAge = Date.now() - birthdayAsDate.getTime()
    currentAge = new Date (currentAge).getUTCFullYear()
    currentAge = Math.abs(currentAge - 1970)
    if(currentAge >= 18 && sexMale.selected){
        document.querySelector("#resultText").innerHTML = `${name.value}, você está apto a se alistar`
    }else{
        document.querySelector("#resultText").innerHTML = `${name.value}, Não está apto(a) a se alistar`
    }
})