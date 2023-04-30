type GenderType = "male" | "female";

type StudentType = {
  name: string;
  lastName: string;
  age: number;
  gender: GenderType;
  height: number;
  hobby: string;
  employed: boolean;
  favoriteColor: string;
};

const Vjezba2804 = () => {
  const frontendRazred: StudentType[] = [
    {
      name: "Ivan",
      lastName: "Sakoman",
      age: 29,
      gender: "male",
      height: 183,
      hobby: "Cycling",
      employed: true,
      favoriteColor: "red",
    },
    {
      name: "Goran",
      lastName: "Viljanac",
      age: 19,
      gender: "male",
      height: 185,
      hobby: "Musician",
      employed: true,
      favoriteColor: "green",
    },
    {
      name: "Katharina",
      lastName: "Zlosa",
      age: 27,
      gender: "female",
      height: 180,
      hobby: "reading",
      employed: true,
      favoriteColor: "green",
    },
    {
      name: "Antun",
      lastName: "Glumac",
      age: 22,
      gender: "male",
      height: 185,
      hobby: "Football",
      employed: false,
      favoriteColor: "Red",
    },
    {
      name: "Nikolina",
      lastName: "Kirčanski",
      age: 40,
      gender: "female",
      height: 164,
      hobby: "Martial arts",
      employed: true,
      favoriteColor: "black",
    },
    {
      name: "Robert",
      lastName: "Đujić",
      age: 24,
      gender: "male",
      height: 182,
      hobby: "Books, movies, games",
      employed: false,
      favoriteColor: "silver",
    },
    {
      name: "Monika",
      lastName: "Ivankovic",
      age: 23,
      gender: "female",
      height: 164,
      hobby: "roller skating",
      employed: true,
      favoriteColor: "grey",
    },
    {
      name: "Maja",
      lastName: "Juratovac",
      age: 32,
      gender: "female",
      height: 169,
      hobby: "dancing",
      employed: true,
      favoriteColor: "blue",
    },
    {
      name: "Ivan",
      lastName: "Puljić",
      age: 25,
      gender: "male",
      height: 175,
      hobby: "running",
      employed: false,
      favoriteColor: "blue",
    },
    {
      name: "Sara",
      lastName: "Cindric",
      age: 24,
      gender: "female",
      height: 161,
      hobby: "writing",
      employed: false,
      favoriteColor: "black",
    },
    {
      name: "Kristian",
      lastName: "Radoš",
      age: 30,
      gender: "male",
      height: 188,
      hobby: "Netflix",
      employed: true,
      favoriteColor: "blue",
    },
    {
      name: "Ivana",
      lastName: "Arbutina",
      age: 42,
      gender: "female",
      height: 166,
      hobby: "slikanje",
      employed: false,
      favoriteColor: "red",
    },
  ];

  //let youngestAge = frontendRazred[0].age;
  //let youngestName = frontendRazred[0].name;

  //for (let i = 0; i < frontendRazred.length; i++) {
  //  if (frontendRazred[i].age < youngestAge) {
  //    youngestAge = frontendRazred[i].age;
  //    youngestName = frontendRazred[i].name;
  //  } else if (frontendRazred[i].age > youngestAge) {
  //    youngestAge = youngestAge;
  //  }
  //}

  //console.log(
  //  "The youngest is: " +
  //    youngestName +
  //    " who is: " +
  //    youngestAge +
  //    " years old."
  //

  //1. Zadatak
  //Pronađi sve osobe kojima ime počinje na slovo "M"
  //Pronađi sve osobe koje su višlje od 160cm, a niže od 180cm
  //Pronađi sve osobe kojima je najdraža boja "red"
  //Pronađi sve osobe kojima prezime završava na "c" ili "ć"

  //let namesWithM = [];

  //for (let i = 0; i < frontendRazred.length; i++) {
  //  if (frontendRazred[i].name.includes("M")) {
  //    namesWithM.push(frontendRazred[i].name);
  //  }
  //}

  //console.log("Names which start with M are: " + namesWithM);

  //let height = frontendRazred[0].height;
  //let heightName = [];

  //for (let i = 0; i < frontendRazred.length; i++) {
  //  if (frontendRazred[i].height > 160 && frontendRazred[i].height < 180) {
  //    heightName.push(frontendRazred[i].name);
  //  }
  //}

  //console.log(
  //  "Student that are higher than 160cm and shorter than 180cm are " +
  //    heightName
  //);

  //let favoriteColor = frontendRazred[0].favoriteColor;
  //let favoriteColorName = [];

  //for (let i = 0; i < frontendRazred.length; i++) {
  //  if (frontendRazred[i].favoriteColor.includes("red")) {
  //    favoriteColor = frontendRazred[i].favoriteColor;
  //    favoriteColorName.push(frontendRazred[i].name);
  //  }
  //}

  //console.log("People whose favorite color is red are: " + favoriteColorName);

  //let lastName = [];

  //for (let i = 0; i < frontendRazred.length; i++) {
  //  if (/(c|ć)$/.test(frontendRazred[i].lastName)) {
  //    lastName.push(frontendRazred[i].lastName);
  //  }
  //}

  //console.log("People whose name end in c or ć are: " + lastName);

  //2. Zadatak
  //Ispiši u tablicu sve članove razreda

  //3. Zadatak
  //Obojaj tekst "favoriteColor" u boju koja je napisana npr. ako je favoriteColor: red, taj tekst u tablici treba biti crven

  return (
    <div className="container">
      <h1>Vjezba 2804</h1>
      <hr />
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Height</th>
              <th>Hobby</th>
              <th>Employed</th>
              <th>favoriteColor</th>
            </tr>
          </thead>
          <tbody>
            {frontendRazred.map((student) => {
              return (
                <tr>
                  <td>{student.name}</td>
                  <td>{student.lastName}</td>
                  <td>{student.age}</td>
                  <td>{student.gender}</td>
                  <td>{student.height}</td>
                  <td>{student.hobby}</td>
                  <td>{student.employed ? "Yes" : "No"}</td>
                  <td style={{ color: student.favoriteColor }}>
                    {student.favoriteColor}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <hr />
      <div>
        <ul>
          {frontendRazred.map((student) => {
            return (
              <li>
                {student.name} {student.lastName} {student.age}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Vjezba2804;
