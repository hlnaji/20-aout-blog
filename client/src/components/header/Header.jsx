import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Lycee 20 aout</span>
        <span className="headerTitleLg">Ideas</span>
      </div>
      <img
        className="headerImg"
        src="https://res.cloudinary.com/dlhbc051y/image/upload/v1706560945/lycee/yx3iabq7vftfc4dxgpb0.jpg"
        alt=""
      />
    </div>
  );
}
