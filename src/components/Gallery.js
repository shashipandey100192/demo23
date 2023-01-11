import React from 'react';
import Myimg from '../image/img3.jpg';
import Myimg1 from '../image/img4.jpg';
import Myimg2 from '../image/img5.jpg';

function Gallery() {
  return (
    <div>
        <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="online pic" />
       
       
        <img src={Myimg} alt="import" />
        <img src={Myimg1} alt="import" />
        <img src={Myimg2} alt="import" />

        <img src='image/img4.jpg' alt="first" width="200" />

    </div>
  )
}

export default Gallery