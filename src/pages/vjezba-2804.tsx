import { frontendRazred } from "../data/class";

type GenderType = "male" | "female";

export type StudentType = {
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
