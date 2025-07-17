import React, { useState } from 'react';
import { Carousel } from '../../carousel/Carousel';
import classes from "./Silder.module.css";

const FileList = () => {
  const [services] = useState([
    { img: "107,1abcdc43044bb5.png", id: 1 },
    { img: "107,1abcdc43044bb5.png", id: 2 },
    { img: "107,1abcdc43044bb5.png", id: 3 },
    { img: "105,1abce0f2c611e5.webp", id: 4 },

  ])
  console.log()
  return (
    <div className={classes.contentBlock}>
      <Carousel>
        {services.map(service =>
          <div key={service.id} className={classes.contentBlockSilder}><img className={classes.contentBlockSilde} src={`./img/${service.img}`} alt="" /></div>

        )}
      </Carousel>
    </div>


  );
}
export default FileList;