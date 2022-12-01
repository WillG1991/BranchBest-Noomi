import React from "react";
import PhotoAlbum from "react-photo-album";
import Container from '@mui/material/Container';

const photosBreakfast = [
  {
      src: "https://picsum.photos/200/150?random=1",
      width: 200,
      height: 150
  },
  {
      src: "https://picsum.photos/800/600?random=2",
      width: 400,
      height: 225
  },
  {
    src: "https://picsum.photos/800/600?random=3",
    width: 200,
      height: 150
},
{
  src: "https://picsum.photos/800/600?random=4",
  width: 400,
  height: 225
},
{
  src: "https://picsum.photos/800/600?random=5",
  width: 200,
  height: 150
},
{
  src: "https://picsum.photos/800/600?random=6",
  width: 400,
  height: 225
},
{
  src: "https://picsum.photos/800/600?random=7",
  width: 200,
  height: 150
},
{
  src: "https://picsum.photos/800/600?random=8",
  width: 400,
  height: 225
},
{
src: "https://picsum.photos/800/600?random=9",
width: 200,
height: 150
},
];

const photosLunch = [
  {
      src: "https://picsum.photos/200/150?random=1",
      width: 200,
      height: 150
  },
  {
      src: "https://picsum.photos/800/600?random=2",
      width: 400,
      height: 225
  },
  {
    src: "https://picsum.photos/800/600?random=3",
    width: 200,
      height: 150
},
{
  src: "https://picsum.photos/800/600?random=4",
  width: 400,
  height: 225
},
{
  src: "https://picsum.photos/800/600?random=5",
  width: 200,
  height: 150
},
{
  src: "https://picsum.photos/800/600?random=6",
  width: 400,
  height: 225
},
{
  src: "https://picsum.photos/800/600?random=7",
  width: 200,
  height: 150
},
{
  src: "https://picsum.photos/800/600?random=8",
  width: 400,
  height: 225
},
{
src: "https://picsum.photos/800/600?random=9",
width: 200,
height: 150
},
];
const photosCatering = [
  {
      src: "https://picsum.photos/200/150?random=1",
      width: 200,
      height: 150
  },
  {
      src: "https://picsum.photos/800/600?random=2",
      width: 400,
      height: 225
  },
  {
    src: "https://picsum.photos/800/600?random=3",
    width: 200,
      height: 150
},
{
  src: "https://picsum.photos/800/600?random=4",
  width: 400,
  height: 225
},
{
  src: "https://picsum.photos/800/600?random=5",
  width: 200,
  height: 150
},
{
  src: "https://picsum.photos/800/600?random=6",
  width: 400,
  height: 225
},
{
  src: "https://picsum.photos/800/600?random=7",
  width: 200,
  height: 150
},
{
  src: "https://picsum.photos/800/600?random=8",
  width: 400,
  height: 225
},
{
src: "https://picsum.photos/800/600?random=9",
width: 200,
height: 150
},
];


function GalleryPhotos() {
    return (
      <div>
        <h2 align="center">Breakky</h2>
        <Container>
        <PhotoAlbum layout="rows" photos={photosBreakfast} />
        </Container>
      <h2 align="center">Lunch</h2>
      <Container>
      <PhotoAlbum layout="rows" photos={photosLunch} />
      </Container>
      <h2 align="center">Catering</h2>
      <Container>
      <PhotoAlbum layout="rows" photos={photosCatering} />
      </Container>
      </div>
    );
  }
  
  export default GalleryPhotos;
  




