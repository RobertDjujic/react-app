import DollarIcon from "../assets/dollar-icon";
import Button from "../components/button";
import Card from "../components/card";
import CardGrid from "../components/card-grid";
import CardGrid2 from "../components/card-grid-2";
import Checkbox from "../components/checkbox";
import FlexExe from "../components/flex-exe";
import Input from "../components/input";
import Modal from "../components/modal";
import Pagination from "../components/pagination";
import Tags from "../components/tags";
import TransformExe from "../components/transform-exe";

const Exe = () => {
  return (
    <>
      <div className="container">
        <div className="container--component">
          <h2>Button</h2>
          <Button value="ANIMATE ME" animate={true} icon={<DollarIcon />} />
        </div>
        <div className="container--component">
          <h2>Card</h2>
          <Card />
        </div>
        <div className="container--component">
          <h2>Checkbox</h2>
          <Checkbox />
        </div>
        <div className="container--component">
          <h2>Modal</h2>
          <Modal />
        </div>
        <div className="container--component">
          <h2>Pagination</h2>
          <Pagination />
        </div>
        <div className="container--component">
          <h2>Tags</h2>
          <Tags />
        </div>
        <div className="container--component">
          <h2>Transform property exercise</h2>
          <TransformExe />
        </div>
        <div className="container--component">
          <h2>Flex property exercise</h2>
          <FlexExe />
        </div>
        <div className="container--component">
          <h2>Input</h2>
          <Input validation="" label="" />
          <Input validation="Lorem Ipsum" label="Last Name" rounded />
        </div>
        <div className="container--component">
          <h2>Responsive grid</h2>
          <CardGrid />
        </div>
        <div className="container--component">
          <h2>Responsive grid #2</h2>
          <CardGrid2 />
        </div>
      </div>
    </>
  );
};

export default Exe;
