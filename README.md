## troca vetor

```
Faça um programa que leia um vetor N[20]. Troque a seguir, o primeiro elemento com o último, o segundo elemento com o penúltimo, etc., até trocar o 10º com o 11º. Mostre o vetor modificado.

Entrada
A entrada contém 20 valores inteiros, positivos ou negativos.

Saída
Para cada posição do vetor N, escreva "N[i] = Y", onde i é a posição do vetor e Y é o valor armazenado naquela posição.
```

Para executar o script rode:

`npm run test troca-de-vetor.test.js`

## par ímpar

```
Neste problema você deverá ler 15 valores colocá-los em 2 vetores conforme estes valores forem pares ou ímpares. Só que o tamanho de cada um dos dois vetores é de 5 posições. Então, cada vez que um dos dois vetores encher, você deverá imprimir todo o vetor e utilizá-lo novamente para os próximos números que forem lidos. Terminada a leitura, deve-se imprimir o conteúdo que restou em cada um dos dois vetores, imprimindo primeiro os valores do vetor impar. Cada vetor pode ser preenchido tantas vezes quantas for necessário.

Entrada
A entrada contém 15 números inteiros.
```

Para executar o script rode:

`npm run test par-impar.test.js`

## planeta Uno

```
Os habitantes do planeta Uno possuem um terrível problema de detecção de números com mais de um algarismo, de modo que, para tudo que vão fazer, transformam qualquer valor inteiro em um número de um algarismo, realizando somas sucessivas do número até o mesmo ser reduzido a um algarismo. Por exemplo, o número 999999999991, no planeta Uno, soma-se todos os algarismos, resultando em 9+9+9+9+9+9+9+9+9+9+9+1 = 100. Como o número 100 tem mais de um algarismo, o processo se repete, resultando em 1+0+0 = 1

Uma das grandes dificuldades que os habitantes possuem está em comparar dois números e verificar qual deles é o maior, segundo as regras do planeta.

Escreva um programa que, dados dois números inteiros, identifique qual deles é o maior número de um algarismo.

Entrada
Haverá diversos casos de teste. Cada caso de teste inicia com dois inteiros N e M (0 ≤ N ≤ 10100, 0 ≤ M ≤ 10100), indicando os dois números a serem comparados.
O último caso de teste é indicado quando N = M = 0, sendo que este caso não deverá ser processado.

Saída
Para cada caso de teste, imprima uma linha, contendo um inteiro, indicando 1 se o primeiro número for o maior de um algarismo, 2 se o segundo número for o maior de um algarismo ou 0 se ambos os números possuírem o mesmo valor de um algarismo.

```

Para executar o script rode:

`npm run test planeta-uno.test.js`
