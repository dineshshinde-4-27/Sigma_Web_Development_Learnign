let generateNewCard = (
  imgThumbnail = "Img/page.jpg",
  videoDuration = "30:00",
  titleOfVideo = "Sigma web development",
  channelName = "codeWithHarry",
  views = 7000,
  uploadTime = "5 months ago"
) => {
  let img;
  let duration;
  let title;
  let channel;
  let viewers;
  let howOld;

  img = imgThumbnail;
  duration = videoDuration;
  title = titleOfVideo;
  channel = channelName;
  viewers = views;
  howOld = uploadTime;

  if (imgThumbnail == null || imgThumbnail == "") {
    img = "Img/page.jpg";
  }
  if (videoDuration == null || videoDuration == "") {
    duration = "30:00";
  }
  if (titleOfVideo == null || titleOfVideo == "") {
    title = "Sigma web development";
  }
  if (channelName == null || channelName == "") {
    channel = "codeWithHarry";
  }
  if (views == null || views == "") {
    viewers = 7000;
  }
  if (uploadTime == null || uploadTime == "") {
    howOld = "5 months";
  }
  if (viewers > 1 && viewers <= 999) {
    viewers = viewers;
  } else if (viewers > 999 && viewers < 1099) {
    viewers = viewers.toString();
    viewers = viewers[0] + "k".toUpperCase();
  } else if (viewers > 1099 && viewers <= 9999) {
    viewers = viewers.toString();
    viewers = viewers[0] + viewers[1] + "k".toUpperCase();
  } else if (viewers > 9999 && viewers <= 999999) {
    viewers = viewers.toString();
    viewers = viewers[0] + viewers[1] + viewers[2] + "k".toUpperCase();
  } else if (viewers > 999999 && viewers <= 9999999) {
    viewers = viewers.toString();
    viewers = viewers[0] + "m".toUpperCase();
  } else {
    viewers = viewers.toString();
    viewers =
      viewers[0] +
      viewers[1] +
      "." +
      viewers[2] +
      viewers[3] +
      "m".toUpperCase();
  }
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.innerHTML = `
         <div class="box-1">
          <img class="img" src="${img}" alt=" card" />
          <p class="time">${duration}</p>
        </div>
        <div class="box-2">
          <p class="title">${title}</p>
          <p class="s-v-h">
            <span>${channel}</span><span>${viewers}</span
            ><span>${howOld}</span>
          </p>
        </div>
    `;

  let container = document.querySelector(".container");
  container.append(card);
};
let btnOfNewCard = document.getElementsByClassName("create-btn")[0];

btnOfNewCard.addEventListener("click", () => {
  setTimeout(() => {
    let img = prompt("Enter thumbnail of video");
    let duration = prompt("Enter duration of video");
    let title = prompt("Enter title of video");
    let channel = prompt("Enter channel name");
    let viewers = prompt("Enter videos viewers");
    let howOld = prompt("Enter how old video is ");

    generateNewCard(img, duration, title, channel, viewers, howOld);
  }, 200); // Randomly choose between 1 or 2 seconds delay
});
