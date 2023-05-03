const Vjezba3004 = () => {
  //1. Ispiši brojeve od 1 do 10.
  //   let printNumbers = [];

  //   for (let i = 1; i <= 10; i++) {
  //     printNumbers.push(i);
  //   }

  //   console.log(printNumbers);

  //2. Ispiši 2D niz.
  //   const arr = [
  //     [1, 2],
  //     [3, 4],
  //     [5, 6],
  //   ];

  //   let printArr = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr[0].length; j++) {
  //       printArr.push(arr[i][j]);
  //     }
  //   }

  //   console.log(printArr);

  //3. Ipiši parne brojeve iz niza.
  //   const arr = [13, 23, 12, 45, 22, 48, 66, 100];
  //   let printEvenNumbers = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     if (!(arr[i] % 2)) {
  //       printEvenNumbers.push(arr[i]);
  //     }
  //   }

  //   console.log(printEvenNumbers);

  //4. Izbriši sve pojave elementa u zadanom nizu.
  //   let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
  //   const x = 56;

  //   for (let i = 0; i < arr.length; i++) {
  //     //Moramo koristi `==` operator kada uspoređujemo vrijednosti
  //     if (arr[i] == x) {
  //       //Koristimo ! kako bismo išli od kraja jer se indeksi niza mijenjaju
  //       arr.splice!(i, 1);
  //     }
  //   }

  //   console.log(arr);

  //5. Demonstriraj asinkronu petlju.
  //   for (var i = 0; i < 5; i++) {
  //     setTimeout(() => console.log(i), 5000);
  //   }

  //6. Pronađi moć broja koristeći for petlju.

  //   function findPower(base: number, exponent: number) {
  //     let result = 1;

  //     for (let i = 0; i < exponent; i++) {
  //       result *= base;
  //     }

  //     return result;
  //   }

  //   console.log(findPower(7, 2));
  //   console.log(findPower(9, 10));
  //   console.log(findPower(1, 5));
  //   console.log(findPower(8, 3));
  //   console.log(findPower(4, 6));

  //7. Ispiši uzorak koristeći for petlju.
  //   function printPattern(range: number) {
  //     let pattern = "";

  //     for (let i = 0; i <= range; i++) {
  //       //" " nam služi kako bi brojevi u uzorku bili razmaknuti
  //       pattern += i + " ";
  //       console.log(pattern);
  //     }
  //   }

  //   printPattern(12);

  //8. Pronađi broj znamenki u broju.
  //   function digitCount(number: string) {
  //     let digits = 0;
  //     for (let i = 0; i <= number.length; i++) {
  //       digits = i;
  //     }
  //     console.log("The digit count for this number is: " + digits);
  //   }

  //   digitCount("9876543210");
  //   digitCount("12345678901234567890");
  //   digitCount("99999999999999999999999999999999999999999999999999");

  //9. Izračunaj zbroj svih znamenki u broju.
  // function digitSum(number: string) {
  //   let digit = 0;
  //   for (let i = 0; i < number.length; i++) {
  //     //"parseInt" koristimo kako bi se svaka znamenka tretirala kao broj
  //     digit += parseInt(number[i]);
  //   }
  //   console.log("The sum of the digits in this number is: " + digit);
  // }

  // digitSum("531");
  // digitSum("9832");
  // digitSum("1234567");
  // digitSum("987654321");
  // digitSum("2023");

  //10. Pronađi najveći broj u nizu.
  // const numbers = [12, 45, 8, 93, 27];
  // let largest = 0;

  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] > largest) {
  //     largest = numbers[i];
  //   }
  // }

  // console.log("The largest number in this array is: " + largest);

  //11. Pronađi broj 0 u 2D matrici.
  // const matrix = [
  //   [0, 5, 0],
  //   [2, 0, 8],
  //   [0, 3, 0],
  // ];
  // let numberOfZeros = 0;

  // for (let i = 0; i < matrix.length; i++) {
  //   //Pripaziti da su uvjeti dobro napisani ("j < matrix[0].length;" a ne i)
  //   for (let j = 0; j < matrix[0].length; j++) {
  //     if (matrix[i][j] == 0) {
  //       numberOfZeros++;
  //     }
  //   }
  // }

  // console.log("The number of zeros in this array is: " + numberOfZeros);

  //12. Pronađi umnožak dvaju nizova.
  // const arrFirst = [4, 7, 2, 9, 1];
  // const arrSecond = [3, 8, 5, 6, 2];
  // let arrProd = [];

  // //Dovoljna je samo jedna for petlja, budući da će zbrajati iste indekse iz oba niza
  // for (let i = 0; i < arrFirst.length; i++) {
  //   arrProd.push(arrFirst[i] * arrSecond[i]);
  // }

  // console.log("The product of the two arrays is: " + arrProd);

  //13. Ispiši Fibonaccijev niz za zadanu vrijednost N.
  // function fibonacci(num: number) {
  // let x = 0;
  // let y = 1;
  // let fibonacciSequence = [0, 1];

  // if (num < 2) {
  //   return fibonacciSequence.slice(0, num + 1);
  // }

  // for (let i = 2; i < num; i++) {
  //   let sum = x + y;
  //   fibonacciSequence.push(sum);
  //   x = y;
  //   y = sum;
  // }

  //   return fibonacciSequence;
  // }

  // console.log(fibonacci(8));
  // console.log(fibonacci(73));
  // console.log(fibonacci(28));
  // console.log(fibonacci(85));

  //14. Pronađi vrijednost N u Fibonaccijevom nizu za zadani broj.
  // function findFibonacci(num: number) {
  //   let x = 0;
  //   let y = 1;
  //   let fibonacciSequence = [0, 1];

  //   if (num < 2) {
  //     return fibonacciSequence.slice(0, num + 1);
  //   }

  //   for (let i = 2; i < num; i++) {
  //     let sum = x + y;
  //     fibonacciSequence.push(sum);
  //     x = y;
  //     y = sum;

  //     //"break;" se koristi kako se ne bi ispisao i drugi console.log
  //     if (fibonacciSequence[i] == num) {
  //       console.log(
  //         "Element " + fibonacciSequence[i] + " is present in index " + [i]
  //       );
  //       break;
  //     } else if (fibonacciSequence[i] > num) {
  //       console.log("Element is not present");
  //       break;
  //     }
  //   }
  // }

  // findFibonacci(13);
  // findFibonacci(144);
  // findFibonacci(50);

  //15. Izbroji sva slova u riječi.
  // function countLetters(word: string) {
  //   let letterCount = 0;

  //   for (let i = 0; i < word.length; i++) {
  //     letterCount++;
  //   }

  //   console.log(letterCount);
  // }

  // countLetters("Adventure");
  // countLetters("Luminescent");
  // countLetters("Enigmatic");
  // countLetters("Ethereal");
  // countLetters("Renaissance");

  //16. Pronađi iste vrijednosti u zadanom nizu.
  // const arr = [1, 5, 3, 7, 4, 5, 2, 8, 9, 4, 1, 6, 2, 9, 7, 3, 8, 6];
  // const newArr: number[] = [];
  // let arrDuplicates: number[] = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (!newArr.includes(arr[i])) {
  //     newArr.push(arr[i]);
  //   } else if (!arrDuplicates.includes(arr[i])) {
  //     arrDuplicates.push(arr[i]);
  //   }
  // }

  // console.log(arrDuplicates);

  return (
    <div className="container">
      <h1>Vježba 3004</h1>
      <hr />
    </div>
  );
};

export default Vjezba3004;
