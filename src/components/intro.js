import React from "react";
function Intro() {
  return (
    <div className="intro">
      {/* <div>
        <h1>
          QUIETLY <br /> THRIVING
        </h1>
        <h3>WITH NATASCHA HENRIKSEN</h3>
      </div> */}
      <div className="intro-text">
        <p>Lidt text her som beskriver hvordan man booker et møde osv</p>
        <p>Click on the link below to book a meeting</p>
        <a
          className="click"
          href="https://calendly.com/nataschavejenhenriksen/30min?month=2021-03&fbclid=IwAR1WnZBK5YsZ0-8hFcCdUkNbKCEExosnTmnahbDd6RZ1PuiO9zHu-PpKznA"
          class="button"
        >
          Book
        </a>
        <p>Link til Facebook Gruppe</p>
        <a
          className="click"
          href="https://www.facebook.com/groups/quietlythriving"
          class="button"
        >
          Facebook
        </a>
      </div>
    </div>
  );
}

export default Intro;
