import React, { useState } from "react";
import "./footbar.scss";

const Footbar = () => {
  const [del, setdel] = useState(false);
  const dest = () => {
    setdel(true);
  };

  if (del) {
    return <div></div>;
  } else {
    return (
      <div className="foooot">
        <span onClick={dest}>X</span> Kimyax projesinin
        <a href="kaynakca"> kaynakçalarına</a> <br className="var-y" />{" "}
        teşekkürler <br />
        Copyright © 2023 Mehmet Ali Tunç
      </div>
    );
  }
};

export default Footbar;
