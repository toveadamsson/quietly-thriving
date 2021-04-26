import React from "react";
function Intro() {
  return (
    <div className="home-page">
      <div className="introduction">
        <h2>Welcome !</h2>
        <p>
          Quietly thriving is all about taking the power into your own hands –
          all in your pace. No competition, no need for attention, no need to
          show the whole world what you’re doing, no deadline, no pressure.{" "}
          <br /> It’s just about YOU! Thank you for being here!
        </p>
      </div>
      <div className="contact">
        <div className="text">
          <div className="tekst">
          <p>
            Are you feeling stuck in your career/ holding yourself back because
            of your more quiet nature? Or are you struggling with socializing or
            about to start your own business, but you’re feeling too
            overwhelmed?</p>
            <p>

            Book a first 30 minutes free call.
            </p>
          
          </div>
          <div className="button1">
            <a
              href="https://calendly.com/nataschavejenhenriksen/30min?month=2021-03"
              className="button-calendly"
            >
              Book a meeting
            </a>
          </div>
        </div>
        <div className="text2">
          <div className="tekst">

          <p>
            Join the community on Facebook. A safe space for like-minded women.
            Introverted women who are on a journey of personal growth.
          </p>
          <p className="text2-points">
            - Weekly Check-ins/ Debates <br />- Monthly Workshops <br />- Full
            support / Encouragement
          </p>
          </div>
          <div className="button2">

          <a
            href="https://www.facebook.com/groups/quietlythriving"
            className="button-facebook"
          >
            Go to Facebook
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro;
