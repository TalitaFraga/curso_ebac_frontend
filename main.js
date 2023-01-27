const form = document.getElementById('form-biggest-number')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const numA = document.getElementById('number-a')
    const numB = document.getElementById('number-b')

    if(parseInt(numA.value) < parseInt(numB.value)){
        alert("Formulário válido")
    } else {
        alert("formulário inválido")
    }
})