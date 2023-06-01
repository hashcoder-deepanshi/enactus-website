import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import logo from './homeAssets/Enactus.png'
import Vdo from "./Images/Enactus.mp4"
import { Typography } from '@mui/material';
import NAVBAR from './NAVBAR';
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (

    <div className='gallery'>
      {/* <div className="hero">
        <div className="left">
          <img src={logo} alt="" />
        </div>
      </div> */}
      <NAVBAR />
      <video id="example_video_1" class="video-js vjs-default-skin" controls="controls" width="1440" height="650">
        <source src={Vdo} type='video/mp4' />
      </video>

      <div className="yellow-container"></div>
      <div>
        <ImageList
          sx={{ width: 950, height: 950, marginLeft: 29, marginTop: 5, marginBottom: 5 }}
          variant="quilted"
          cols={4}
          rowHeight={154}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 130, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <>
        <div className="yellow-container"></div>
        <div className="site-footer">
          <div className="north">
            <Typography bgcolor={'black'} variant="h2" align="left" fontFamily={'Rubik'} fontSize={25} sx={{ paddingLeft: 0, paddingTop: 2, margin: 1.5, color: "whitesmoke", fontWeight: 650 }}> Contact Us </Typography>
            <div className="one"> <ion-icon className="ions" name="location-sharp"></ion-icon>
              <div className="text">Indira Gandhi Delhi Technical University for women,  <br />
                Opp to James church, delhi-110006</div>
            </div>
            <div className="one"><ion-icon name="call-sharp"></ion-icon>
              <div className="text">  Eeshika Madaan: +91 85955 81045 <br />
                Adhya Mittal: +91 77039 20800
              </div>
            </div>
            <div className="one"> <ion-icon name="mail-sharp"></ion-icon>
              <div className="text">
                enactus.igdtuw@gmail.com</div>
            </div>

          </div>
          <div className="south">
            <div className="enactusLogo">
              <img src={logo} alt="" />
            </div>
            <div className="meaning-text">
              <p>
                <span>En</span>trepreneurial - igniting business innovation with integrity and passion.<br />
                <span>Act</span>ion - the experience of social impact that sparks social enterprise.
                <br />
                <span>Us</span> - student, academic and business leaders collaborating to create a better world.
              </p>
            </div>

            <div className="follow">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  <li><a class="twitter" href="#"><i class="fa fa-tree" aria-hidden="true"></i></a></li>
                  <li><a class="instagram" href="https://instagram.com/enactus.igdtuw?igshid=MzRlODBiNWFlZA=="><i class="fa fa-instagram"></i></a></li>
                  <li><a class="linkedin" href="https://www.linkedin.com/company/enactusigdtuw/"><i class="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="white-container"></div>

          <Typography variant="body1" align="center" sx={{ color: "white", margin: 2, fontWeight: 650, fontSize: 20 }}>Enactus IGDTUW Copyright @ 2023 </Typography>
        </div>
      </>
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];