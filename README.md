# Calculadora de Coeficiente de Rendimento (CR)
Programa simples feito em JavaScript para calcular o coeficiente de rendimento aproximado de um dado estudante universitário com base nas horas totais e nas menções (MM, MS ou SS) das disciplinas de faculdade por ele cursadas, listadas em um array no arquivo `data.js`.

O cálculo é baseado em uma média aritmética ponderada construída em cima da divisão entre a soma dos produtos da carga horária e menção de cada disciplina e a soma da carga horária de todas as disciplinas envolvidas. Resumidamente, em uma representação simplificada:

```
(horasDisciplina1 * mencaoDisciplina1) + (horasDisciplina2 * mencaoDisciplina2) + (horasDisciplina3 * mencaoDisciplina3) / (horasDisciplina1 + horasDisciplina2 + horasDisciplina3)
```

# CR Calculator
A simple program coded in JavaScript that calculates the approximate performance coefficient (CR, which stands for "Coeficiente de Rendimento", which is how it's named in portuguese) of a university student based on the total hours of the subjects they took and their grades (MM, MS or SS; a Brazilian grade pattern) on each of them. 

The calculation is based on a weighted arithmetic mean built on top of the division between the sum of the products of the total hours of each subject and the student's grade on them and the sum of hours in all subjects involved. In summary, in a simplified representation:

```
(hoursSubject1 * gradeSubject1) + (hoursSubject2 * gradeSubject2) + (hoursSubject3 * gradeSubject3) / (hoursSubject1 + hoursSubject2 + hoursSubject3)
```