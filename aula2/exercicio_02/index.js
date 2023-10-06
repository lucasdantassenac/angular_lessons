let checkImc = value => {
    if(isNaN(value))    return "Value is Nan"
    if(value > 40)      return 'Obesidade III (mórbida)'
    if(value >= 35)     return 'Obesidade II (severa)'
    if(value >= 30)     return 'Obesidade I'
    if(value >= 25)     return 'Acima do peso'
    if(value >= 18.5)   return 'Peso normal'
    if(value >= 17 )    return 'Abaixo do peso'
    if(value < 17)      return 'Muito abaixo do peso'
}

document.querySelector('#btn').addEventListener('click', (e) => {
    e.preventDefault()
    let weight = Number(document.querySelector('input[name="weight"]').value),
    height =  Number(document.querySelector('input[name="height"]').value),
    result = weight / (height * height),
    imcStatus = checkImc(result)

    document.querySelector("#resultDiv").innerHTML = `
        <p>Seu IMC é: ${String(result.toFixed(2))}</p> 
        <p> ${imcStatus}</p> 
    `
})