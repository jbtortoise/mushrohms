import "./VRKingdom.css";

function VRKingdom() {
  return (
    <div className="">
      <div className="coming-soon-image-container">
        <img
          className="banner-image"
          src="https://mushrohms.io/images/vr-mushrohm-kingdom.png"
          alt="Mushrohm Kingdom"
        />
        {/* <div className="coming-soon-overlay">
        </div> */}
        <h2 className="coming-soon-overlay">Coming soon...</h2>
      </div>

      <div className="page-content">
        <p>
          Soon shrohmies will be able to take a fully immersive trip to the
          Mushrohm Kingdom. This 3D world will serve as a hub for Mushrohm
          metaverse activities, as well as a place for Shrohmies to hang out and
          explore.
        </p>
      </div>
    </div>
  );
}

export default VRKingdom;
