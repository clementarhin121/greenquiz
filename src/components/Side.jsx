import { useState } from "react";

function Side() {
  const [sideBody, setSidebody] = useState("sideBody");

  return (
    <>
      <div className={sideBody}>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Games</li>
            <li>Contact</li>
            <li>Exit</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Side;
