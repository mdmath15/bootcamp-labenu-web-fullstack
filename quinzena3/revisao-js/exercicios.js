// EXERCÍCIO 01
function inverteArray(array) {
  const arrayInvertido = array.map((item, indice, array) => {
    return array[array.length - indice - 1]
  })

  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const arrayParElevados = array.filter((item) => {
    return item % 2 === 0
  })
    .map((item) => {
      return item ** 2
    })

  return arrayParElevados
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const arrayPares = array.filter((item) => {
    return item % 2 === 0
  })

  return arrayPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for (let num of array) {
    if (maiorNumero < num) {
      maiorNumero = num
    }
  }

  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  const respostas = [
    booleano1 && booleano2 && !booleano4,
    (booleano1 && booleano2) || !booleano3,
    (booleano2 || booleano3) && (booleano4 || booleano1),
    !(booleano2 && booleano3) || !(booleano1 && booleano3),
    !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  ]

  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosPares = []
  for (let i = 0; i < n; i++) {
    numerosPares.push(i * 2)
  }

  return numerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && b === c) {
    return 'Equilátero'

  } else if (a === b || b === c) {
    return 'Isósceles'

  } else {
    return 'Escaleno'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  const objeto = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: 0,
    diferenca: 0
  }

  const verificarDivisao = (num1, num2) => {
    return num1 % num2 === 0
  }

  if (num1 < num2) {
    objeto.maiorNumero = num2
    objeto.maiorDivisivelPorMenor = verificarDivisao(num2, num1)
    objeto.diferenca = num2 - num1

    return objeto

  } else {
    objeto.maiorNumero = num1
    objeto.maiorDivisivelPorMenor = verificarDivisao(num1, num2)
    objeto.diferenca = num1 - num2


    return objeto
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let arraySegundoMaiorMenor = []
  let aux = 0
  for (let contador = 1; contador < array.length; contador++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        aux = array[i]
        array[i] = array[i + 1]
        array[i + 1] = aux
      }
    }
  }
  arraySegundoMaiorMenor[0] = array[array.length - 2]
  arraySegundoMaiorMenor[1] = array[1]
  
  return arraySegundoMaiorMenor
}

  // EXERCÍCIO 11
  function ordenaArray(array) {
    
  }

  // EXERCÍCIO 12
  function filmeFavorito() {

  }

  // EXERCÍCIO 13
  function imprimeChamada() {
    // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  }

  // EXERCÍCIO 14
  function criaRetangulo(lado1, lado2) {

  }

  // EXERCÍCIO 15
  function anonimizaPessoa(pessoa) {

  }

  // EXERCÍCIO 16A
  function maioresDe18(arrayDePessoas) {

  }

  // EXERCÍCIO 16B
  function menoresDe18(arrayDePessoas) {

  }

  // EXERCÍCIO 17A
  function multiplicaArrayPor2(array) {

  }

  // EXERCÍCIO 17B
  function multiplicaArrayPor2S(array) {

  }

  // EXERCÍCIO 17C
  function verificaParidade(array) {

  }

  // EXERCÍCIO 18A
  function retornaPessoasAutorizadas(pessoas) {

  }

  // EXERCÍCIO 18B
  function retornaPessoasNaoAutorizadas(pessoas) {

  }

  // EXERCÍCIO 19A
  function ordenaPorNome(consultasNome) {

  }

  // EXERCÍCIO 19B
  function ordenaPorData(consultasData) {

  }

  // EXERCÍCIO 20
  function calculaSaldo(contas) {

  }