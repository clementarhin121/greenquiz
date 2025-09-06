import Side from "./Side";

function Menu() {
  const slider = () => {
    const slide = document.querySelector(".sideBody");
    const lanes = document.querySelector(".lanes");
    slide.classList.toggle("isactive");
    lanes.classList.toggle("toggle");
  };

  return (
    <>
      <div className="menuBody">
        <div className="logo">
          <h1>REACT QUIZ</h1>
        </div>
        <div className="burger">
          <div
            className="lanes"
            onClick={slider}>
            <div className="lane1"></div>
            <div className="lane2"></div>
            <div className="lane3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;
