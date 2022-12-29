import BikeList from "../../apollo/queries/BikeList";
import Navbar from "./../Navbar/navbar";

function Catalog() {
    return (<><Navbar props="bg-red" /><BikeList /></>);
}

export default Catalog;