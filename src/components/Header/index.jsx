import "./styles.css";
import { useState, useEffect } from "react";
import { Pencil, Cloudy } from "lucide-react";

const Header = ({ searchCity }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleKeyDown = (e) =>{
    if(e.key === 'Enter')
    {
      searchCity(value);
    }
  }

  return (
    <div className="header">
      <div className="searchbar">
        <input
          className="input"
          placeholder="Search"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <div className="searchicon">
          <Pencil color={"aliceblue"} size={16} />
        </div>
      </div>
      <div className="logo">
        <Cloudy color={"aliceblue"} size={24} />
        <h3 className="h3">Weather Day</h3>
      </div>
    </div>
  );
};

export default Header;
