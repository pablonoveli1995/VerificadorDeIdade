var ano = document.querySelector("input#inputAno")
var data = new Date().getFullYear()
var img = document.getElementById("foto")
var localPreencher = document.getElementById("img")
var prencher = document.getElementById("prencher")
var seçao = document.getElementById("secao")
var botao = document.getElementById("verificar")
botao.addEventListener('click', verificador)
var sexo = document.getElementsByName("genero")
var rodape = document.getElementById('rodape')
var genero = ""



function verificador() {    
    var nascimento = ano.value
    var aniversario = (data - nascimento)
    
    if (sexo[0].checked) {
        genero = "Masculino"
    }else if (sexo[1].checked) {
        genero = "Feminino"
    }else {
        genero = ""
    }

    if (genero == "Masculino" && aniversario >= 12 && aniversario < 25) {
        homemJovem()
    } else if (genero == "Masculino" && aniversario >= 25 && aniversario < 50) {
            homemAdulto()
    }else if (genero == "Masculino" && aniversario >= 50 && aniversario < 110 ) {
        homemIdoso()
    }else if (genero == "Masculino" && aniversario >= 0 && aniversario < 12 ) {
        homembebe()
    }else if (genero == "Feminino" && aniversario >= 12 && aniversario < 25) {
        mulherjovem()
    }else if (genero == "Feminino" && aniversario >= 25 && aniversario < 50 ) {
        mulheradulto()
    }else if (genero == "Feminino" && aniversario >=50 && aniversario <= 110) {
        mulheridoso()
    }else if (genero == "Feminino" && aniversario >= 0 && aniversario < 12) {
        mulherbebe()
    }else if (aniversario > 110 && nascimento != Number('') && genero != "" ) {
        vampiro()
        
    } else if (genero == "Feminino" || genero == "Masculino" && genero != "" && aniversario < 0)  {
    window.alert("Back to the Future: Você ainda não nasceu, gentileza manter a linha temporal.")    
    } else {
        window.alert("Thanos estalou os dedos e você deixou de existir?! Gentileza, digitar e marcar as informações corretamente.")
    }

    function homemJovem() {
        img.src = "_imagens/foto-jovem-m.png"
        img.alt = "Foto Homem Jovem"
        prencher.innerHTML = `Você tem ${aniversario} anos e é um Homem jovem.`
        medidas()
    }
    function homemAdulto() {
        img.src = "_imagens/foto-adulto-m.png"
        img.alt = "Foto Homem Adulto"
        prencher.innerHTML = `Você tem ${aniversario} anos e é um Homem adulto.`
        medidas()
    }
    function homemIdoso(){
        img.src = "_imagens/foto-idoso-m.png"
        img.alt = "Foto Homem idoso"
        prencher.innerHTML = `Você tem ${aniversario} anos e é um Homem idoso.`
        medidas()
    }
    function homembebe(){
        img.src = "_imagens/foto-bebe-m.png"
        img.alt = "Foto Homem criança"
        prencher.innerHTML = `Você tem ${aniversario} anos e é uma criança.`
        medidas()
    }
    function mulherjovem(){
        img.src = "_imagens/foto-jovem-f.png"
        img.alt = "Foto Mulher Jovem"
        prencher.innerHTML = `Você tem ${aniversario} anos e é uma Mulher jovem.`
        medidas()
    }
    function mulheradulto(){
        img.src = "_imagens/foto-adulto-f.png"
        img.alt = "Foto Mulher Adulta"
        prencher.innerHTML = `Você tem ${aniversario} anos e é uma Mulher adulta.`
        medidas()
    }   
    function mulheridoso(){
        img.src = "_imagens/foto-idoso-f.png"
        img.alt = "Foto Mulher Idosa"
        prencher.innerHTML = `Você tem ${aniversario} anos e é uma Mulher idosa.`
        medidas()
    } 
    function mulherbebe(){
        img.src = "_imagens/foto-bebe-f.png"
        img.alt = "Foto Mulher Criança"
        prencher.innerHTML = `Você tem ${aniversario} anos e é uma Criança.`
        medidas()
    }
    function vampiro(){
        img.src = "_imagens/vampiro.png"
        img.alt = "Foto Vampiro"
        localPreencher.style.textAlign = "center"
        prencher.innerHTML = `Você tem ${aniversario} anos e provavelmente é um Vampiro.`
        seçao.style.height = "460px"
        rodape.style.top = '94%'
    }
    function erro(){
        window.alert("Back to the Future: Você ainda não nasceu, gentileza manter a linha temporal.")
    }
    function medidas(){
        localPreencher.style.textAlign = "center"
        seçao.style.height = "460px"
        rodape.style.top = '94%'
    }
    
}// fim funcção



