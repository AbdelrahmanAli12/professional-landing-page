import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import App from "../../App";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
function Project1() {
  return (
    <App>
      <div style={{}}>
        <h1>Online learning website</h1>
        <h4>
          The goal of the project is to build a full online learning system. An
          online learning system is a website where people can take courses that
          have already been recorded. The Scrum Agile Methodology was used to
          create this project using the MERN stack (MongoDB, Express JS, React
          JS, and Node JS). We used Java Script as our main language.
        </h4>
      </div>
      <div style={{ display: "flex", marginLeft: "25%" }}>
        <ImageList
          sx={{ width: 800, height: 600 }}
          variant="quilted"
          rows={3}
          cols={6}
          rowHeight={121}
          gap={5}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </App>
  );
}
const itemData = [
  {
    img: "online learning website/online learning website homepage.png",
    title: "homepage",
    rows: 3,
    cols: 6,
  },
  {
    img: "online learning website/Capture7.png",
    title: "create course",
    rows: 3,
    cols: 6,
  },
  {
    img: "online learning website/Capture1.png",
    title: "reports",
    rows: 3,
    cols: 6,
  },
  {
    img: "online learning website/Capture4.png",
    title: "login",
    rows: 3,
    cols: 6,
  },
  {
    img: "online learning website/Capture5.png",
    title: "forget password",
    rows: 3,
    cols: 6,
  },
  {
    img: "online learning website/Capture6.png",
    title: "instructor balance",

    rows: 3,
    cols: 6,
  },
  {
    img: "online learning website/Capture (1).png",
    title: "admin dashboard",
    rows: 3,
    cols: 6,
  },
];

export default Project1;
