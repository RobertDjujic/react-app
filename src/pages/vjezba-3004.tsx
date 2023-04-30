const Vjezba3004 = () => {
  //1. Ispiši brojeve od 1 do 10
  //   let printNumbers = [];

  //   for (let i = 1; i <= 10; i++) {
  //     printNumbers.push(i);
  //   }

  //   console.log(printNumbers);

  //2. Ispiši 2D niz
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

  //3. Ipiši parne brojeve iz niza
  //   const arr = [13, 23, 12, 45, 22, 48, 66, 100];
  //   let printEvenNumbers = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     if (!(arr[i] % 2)) {
  //       printEvenNumbers.push(arr[i]);
  //     }
  //   }

  //   console.log(printEvenNumbers);

  //4. Izbriši sve pojave elementa u zadanom nizu
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

  //5. Demonstriraj asinkronu petlju
  //   for (var i = 0; i < 5; i++) {
  //     setTimeout(() => console.log(i), 5000);
  //   }

  //6. Pronađi moć broja koristeći for petlju

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

  //7. Ispiši uzorak koristeći for petlju
  //   function printPattern(range: number) {
  //     let pattern = "";

  //     for (let i = 0; i <= range; i++) {
  //       //" " nam služi kako bi brojevi u uzorku bili razmaknuti
  //       pattern += i + " ";
  //       console.log(pattern);
  //     }
  //   }

  //   printPattern(12);

  //8. Pronađi broj znamenki u broju
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

  return (
    <div className="container">
      <h1>Vježba 3004</h1>
      <hr />
    </div>
  );
};

export default Vjezba3004;
