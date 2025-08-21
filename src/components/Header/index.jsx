import "./styles.css";
import { Pencil , Cloudy } from "lucide-react";
const Header = () => {
  return (
    <div className="header">
      <div className="searchbar">
        <input className="input" placeholder="Search" />
        <div className="searchicon">
          <Pencil color={'aliceblue'} size={16} />
        </div>
      </div>
      <div className="logo">
        <Cloudy  color={'aliceblue'} size={24} />
        <h3 className="h3">Weather Day</h3>
      </div>
    </div>
  );
};

export default Header;
