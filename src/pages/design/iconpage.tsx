import { useState } from "react";

function IconPage() {
  // Dummy data for icons, replace it with your actual icon data
  const [icons] = useState([
    { id: 1, name: "icon1", imageUrl: "icon1.png" },
    { id: 2, name: "icon2", imageUrl: "icon2.png" },
    { id: 3, name: "icon3", imageUrl: "icon3.png" },
    // Add more icons here
  ]);

  const handleDownload = (iconId: any) => {
    // Dummy function for download, replace it with actual download logic
    console.log(`Downloading icon with id ${iconId}`);
    // Implement your download logic here
  };

  return (
    <>
      <div className="wrap">
        <h1>Icon Library</h1>
        <div className="iconCardWrap">
          {icons.map((icon) => (
            <div className="iconCard" key={icon.id}>
              <img src={icon.imageUrl} alt={icon.name} />
              <button onClick={() => handleDownload(icon.id)}>Download</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default IconPage;
