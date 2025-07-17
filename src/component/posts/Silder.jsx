import React, { useState } from 'react';
import { Carousel } from '../../carousel/Carousel';
import classes from "./Silder.module.css";

const FileList = () => {
  const [services] = useState([
    { img: "122,233ea2b07ba55b.webp", id: 1 },
    { img: "118,2222a993600ade.webp", id: 2 },
    { img: "107,1abcdc43044bb5.webp", id: 3 },
    { img: "105,1abce0f2c611e5.webp", id: 4 },
    { img: "106,1acd68edc3cb01.webp", id: 5 },
    { img: "105,1abce43cf24941.webp", id: 6 },
    { img: "1051abcee5c98775a.webp", id: 7 },
    

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