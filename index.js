let personAge = prompt('Введите количество полных лет');
let personalLoan;
// Проверка возраста для запроса предполагаемой суммы кредита - если меньше 18 или больше 65
//   отказ в выдаче кредита и нет смысла спрашивать сумму
if (+personAge < 18 || +personAge > 65) {
  alert('Банк не готов Вам выдать деньги из-за возрастных ограничений');
} else {
  personalLoan = prompt('Введите сумму предполагаемого кредита кратную 10000');
	//Проверка на число
  Number.isInteger(+personalLoan)
    ? personalLoan
    : alert('Введенная сумма не является целым числом или не является числом');
}

//Использования тернарного оператора для проверки условий - возраста и суммы
+personAge >= 18 &&
+personAge <= 21 &&
+personalLoan <= 50000 &&
+personalLoan % 10000 === 0
  ? alert('Кредит одобрен')
  : +personAge >= 22 &&
    +personAge <= 35 &&
    +personalLoan <= 400000 &&
    +personalLoan % 10000 === 0
  ? alert('Кредит одобрен')
  : +personAge >= 36 &&
    +personAge <= 65 &&
    +personalLoan <= 1000000 &&
    +personalLoan % 10000 === 0
  ? alert('Кредит одобрен')
  : +personAge < 18 || +personAge > 65
  ? alert('Спасибо за обращение в банк')
  : alert('Видимо Вам не нужен кредит');
