var myVid = document.getElementById("backgroundVideo");
  switch (Math.floor(Math.random() * 7)) {
  case 0:
    myVid.poster = "Images/Poster/Part 1.jpg"
    myVid.src = "Videos/Part 1.mp4"
    break;
  case 1:
    myVid.poster = "Images/Poster/Part 2.jpg"
    myVid.src = "Videos/Part 2.mp4"
    break;
  case 2:
    myVid.poster = "Images/Poster/Part 3.jpg"
    myVid.src = "Videos/Part 3.mp4"
    break;
  case 3:
    myVid.poster = "Images/Poster/Part 4.jpg"
    myVid.src = "Videos/Part 4.mp4"
    break;
  case 4:
    myVid.poster = "Images/Poster/Part 5.jpg"
    myVid.src = "Videos/Part 5.mp4"
  case 5:
    myVid.poster = "Images/Poster/Part 6.jpg"
    myVid.src = "Videos/Part 6.mp4"
  case 6:
    myVid.poster = "Images/Poster/Part 7.jpg"
    myVid.src = "Videos/Part 7.mp4"
}
