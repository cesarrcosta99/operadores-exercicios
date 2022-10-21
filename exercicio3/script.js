// Parte 1
let n1=5
let n2=20
    console.log("5 é maior que 20 e também é menor que 2", n1 > n2 && n1< 2 )
    console.log(" 5 é igual a 5 ou é igual a “5” ", 5 ===5 || 5 === "5")
    console.log("negação de (vinte é maior que cinquenta)", !(20>50 ))
    console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)", !(20 > 50|| 50>60))

   // parte2

    let salario=2000
    let auxilioCreche=45.50
    let qFilhos=2
    
    const vendasJaneiro=5784.50
    const vendasFevereiro=3418.41
    const vendasMarco=4124.10
    const vendasAbril=1874
    const vendasMaio=7000
    const vendasJunho=9450
    // 1) O salário fixo mais o auxílio creche
         const SalarioFixoCreche=salario + auxilioCreche * qFilhos
         console.log("salario fixo + auxilio creche é:",SalarioFixoCreche)
        // 2) Quanto Fulano de Silva receberá de comissão em janeiro
              console.log("Comissão em janeiro foi:",vendasJaneiro * 0.1 )
        // 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS
              const salarioJaneiro=SalarioFixoCreche + (vendasJaneiro * 0.1)
              const salarioDescontoJaneiro= salarioJaneiro * 0.05
                console.log ("Será descontado em Janeiro INSS:",salarioDescontoJaneiro)
 // 4) Imprima no console o cálculo do salário de todos os meses com acréscimos
  //e descontos.
    const salarioJanTotal=salarioJaneiro * 0.95
    console.log("O salário liquido de Fulano da Silva no mês de Janeiro será:",salarioJanTotal.toFixed(4))
    const salarioFevTotal=(SalarioFixoCreche + vendasFevereiro * 0.1) * 0.95
    console.log("Salario Fevereiro Total é:",salarioFevTotal)
    const salarioMarcoTotal=(SalarioFixoCreche + vendasMarco * 0.1) * 0.95
    console.log("Salario Março Total é:", salarioMarcoTotal)
    const salarioAbrilTotal=(SalarioFixoCreche + vendasAbril * 0.1) * 0.95
    console.log("Salario Abril Total é:", salarioAbrilTotal)
    const salarioMaioTotal=(SalarioFixoCreche + vendasMaio * 0.1) * 0.95
    console.log("Salario Maio Total é:", salarioMaioTotal)
    const salarioJunhoTotal=(SalarioFixoCreche + vendasJunho * 0.1) * 0.95
    console.log("Salario Junho Total é:", salarioJunhoTotal)
     
    // 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
        const mediaSalario= (salarioJanTotal + salarioFevTotal + salarioMarcoTotal +salarioAbrilTotal + salarioMaioTotal + salarioJunhoTotal) / 6
        console.log("A média do salario em 6 meses é:" , mediaSalario)

       
          
