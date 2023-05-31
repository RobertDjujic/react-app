import Accordion from "react-bootstrap/Accordion";
import { genres } from "../data/genres";
import { GenreType } from "./genres";

const BootstrapExe = () => {
  return (
    <div className="container">
      <h1>React Boostrap</h1>
      <Accordion defaultActiveKey="0">
        {genres.map((genre: GenreType) => {
          return (
            <Accordion.Item eventKey={`"${genre.id}"`}>
              <Accordion.Header>{genre.name}</Accordion.Header>
              <Accordion.Body>
                <img
                  src={genre.img}
                  alt={`Cover image for the ${genre.name} genre`}
                ></img>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default BootstrapExe;
