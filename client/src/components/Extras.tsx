import React from "react";

export default function Extras() {
  return (
    <div className="left-align extra-tab">
      <h3>Item Refining FAQ</h3>
      <div className="italics">
        Which items do what, and their upgrade paths!
      </div>
      <div>
        <a
          href="https://gamefaqs.gamespot.com/ps2/536705-star-ocean-till-the-end-of-time/faqs/33178"
          target="_blank"
          rel="noreferrer"
        >
          A guide by Demonfayt
        </a>
      </div>
      <h3 className="extra-h3">Support Item{" >>> "}Location</h3>
      <p>Alchemist's Stone (ALCH){" >>> "}Mosel Dunes</p>
      <p>Multi-Flask (CMPD){" >>> "}Arias</p>
      <p>Keen Kitchen Knife (COOK){" >>> "}Gemity [buy for 55,000 Fol]</p>
      <p>Cherubic Bust (CRFT){" >>> "}Palmira Plains</p>
      <p>NC Program Disk (ENG){" >>> "}Moonbase</p>
      <p>Smithy Hammer (SMTH){" >>> "}Arkives [Flad's House]</p>
      <p>Enchanted Pen (WRIT){" >>> "}Shrine of Kaddan [RoD needed]</p>
      <h3 className="extra-h3">Special Thanks to:</h3>
      <p>
        <span className="bold">3vrB257A5gq3fg</span> for laying down the
        foundations in their{" "}
        <a
          href="https://gamefaqs.gamespot.com/ps2/536705-star-ocean-till-the-end-of-time/faqs/77830"
          target="_blank"
          rel="noreferrer"
        >
          guide
        </a>
        !
      </p>
      <p>
        <span className="bold">A I e x</span> for their{" "}
        <a
          href="https://gamefaqs.gamespot.com/ps2/536705-star-ocean-till-the-end-of-time/faqs/32232"
          target="_blank"
          rel="noreferrer"
        >
          guide
        </a>{" "}
        used for cross-referencing!
      </p>
      <p>
        <span className="bold">Aerius</span> and their{" "}
        <a
          href="http://pendell.atspace.cc/so3ic.html"
          target="_blank"
          rel="noreferrer"
        >
          crafting calculator
        </a>{" "}
        used for testing and ideas!
      </p>
      <div className="contact">
        <p className="bold italics">
          This was created as a passion project, and a learning experience.
        </p>
        <div>
          <div>If you find a bug or inaccuracy:</div>
          First:{" "}
          <button
            onClick={() => {
              sessionStorage.clear();
              localStorage.clear();
            }}
          >
            Clear Web Storage
          </button>
        </div>
        <div>
          Still broken? Please{" "}
          <a href="mailto:arnob_talukder@hotmail.com?subject=SO3-IC-BUG">
            contact me
          </a>
          !
        </div>
      </div>
    </div>
  );
}
