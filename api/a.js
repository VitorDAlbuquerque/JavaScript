
fetch("https://viacep.com.br/ws/01001000/json/").then(c=>{
    return(c.json())
}).then(ba=>{
   

    document.getElementById("CEP").innerHTML=ba.cep
    document.getElementById("Rua").innerHTML=ba.logradouro
    document.getElementById("Bairro").innerHTML=ba.bairro
    document.getElementById("Cidade").innerHTML=ba.localidade
    document.getElementById("ddd").innerHTML=ba.ddd
})
