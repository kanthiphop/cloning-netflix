let poster = document.querySelector(".poster");
let main = document.querySelector("main");
let video = document.querySelector(".video");
let mute = document.querySelector(".mute");
let unmute = document.querySelector(".unmute");
let movieCon = document.querySelectorAll(".movie-con >span");
let green = document.querySelectorAll(".movie-con span .green");
let caret = document.querySelector(".fa-angle-right");
let aaa = document.createElement("span");
let API_KEY = "b6498fd4a43196054a9f571d87eda91d";
let TMBD_BASE_URL = "https://api.themoviedb.org/3";
let slide = document.querySelector(".slide");
let slideL = document.querySelector(".slide-left");
let slideR = document.querySelector(".slide-right");
let slideL2 = document.querySelector(".slide-left.two");
let slideR2 = document.querySelector(".slide-right.two");
let slideL3 = document.querySelector(".slide-left.three");
let slideR3 = document.querySelector(".slide-right.three");
let slideL4 = document.querySelector(".slide-left.four");
let slideR4 = document.querySelector(".slide-right.four");
let slideLtv = document.querySelector(".slide-left.tv");
let slideRtv = document.querySelector(".slide-right.tv");

const token = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjQ5OGZkNGE0MzE5NjA1NGE5ZjU3MWQ4N2VkYTkxZCIsInN1YiI6IjY1OGU1NTUwZDdkY2QyMWI3ZmVhZWMzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.61Cu3pKmQMu4OfPLfNHA7C6W2PEAEBzBT_TieLITdfg",
  },
};

const apiKey = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer b6498fd4a43196054a9f571d87eda91d",
  },
};
document.addEventListener("DOMContentLoaded", function () {
  let slideAmount = 1000;
  let maxLeft = -3290;
  let maxLefttv = -600;
  let minLeft = 0;
  let movieBoxs = document.querySelector(".movie-boxs");
  let movieBoxs2 = document.querySelector(".movie-boxs.two");
  let movieBoxs3 = document.querySelector(".movie-boxs.three");
  let movieBoxs4 = document.querySelector(".movie-boxs.four");
  let movieBoxstv = document.querySelector(".movie-boxs.tv");

  slideR.addEventListener("click", () => {
    movieBoxs.style.marginLeft =
      parseInt(movieBoxs.style.marginLeft || 0) - slideAmount + "px";
    if (parseInt(movieBoxs.style.marginLeft || 0) <= -3250) {
      slideR.style.display = "none";
      movieBoxs.style.marginLeft = `${maxLeft}px`;
    } else {
      slideR.style.display = "block";
    }
    if (parseInt(movieBoxs.style.marginLeft || 0) < 0) {
      slideL.style.display = "block";
    } else {
      slideL.style.display = "none";
      movieBoxs.style.marginLeft = `${minLeft}px`;
    }
  });
  slideR2.addEventListener("click", () => {
    movieBoxs2.style.marginLeft =
      parseInt(movieBoxs2.style.marginLeft || 0) - slideAmount + "px";
    if (parseInt(movieBoxs2.style.marginLeft || 0) <= -3250) {
      slideR2.style.display = "none";
      movieBoxs2.style.marginLeft = `${maxLeft}px`;
    } else {
      slideR2.style.display = "block";
    }
    if (parseInt(movieBoxs2.style.marginLeft || 0) < 0) {
      slideL2.style.display = "block";
    } else {
      slideL2.style.display = "none";
      movieBoxs2.style.marginLeft = `${minLeft}px`;
    }
  });
  slideR3.addEventListener("click", () => {
    movieBoxs3.style.marginLeft =
      parseInt(movieBoxs3.style.marginLeft || 0) - slideAmount + "px";
    if (parseInt(movieBoxs3.style.marginLeft || 0) <= -3250) {
      slideR3.style.display = "none";
      movieBoxs3.style.marginLeft = `${maxLeft}px`;
    } else {
      slideR3.style.display = "block";
    }
    if (parseInt(movieBoxs3.style.marginLeft || 0) < 0) {
      slideL3.style.display = "block";
    } else {
      slideL3.style.display = "none";
      movieBoxs3.style.marginLeft = `${minLeft}px`;
    }
  });
  slideR4.addEventListener("click", () => {
    movieBoxs4.style.marginLeft =
      parseInt(movieBoxs4.style.marginLeft || 0) - slideAmount + "px";
    if (parseInt(movieBoxs4.style.marginLeft || 0) <= -3250) {
      slideR4.style.display = "none";
      movieBoxs4.style.marginLeft = `${maxLeft}px`;
    } else {
      slideR4.style.display = "block";
    }
    if (parseInt(movieBoxs4.style.marginLeft || 0) < 0) {
      slideL4.style.display = "block";
    } else {
      slideL4.style.display = "none";
      movieBoxs4.style.marginLeft = `${minLeft}px`;
    }
  });
  slideRtv.addEventListener("click", () => {
    console.log(movieBoxstv.style.marginLeft);
    movieBoxstv.style.marginLeft =
      parseInt(movieBoxstv.style.marginLeft || 0) - slideAmount + "px";
    if (parseInt(movieBoxstv.style.marginLeft || 0) <= 0) {
      slideRtv.style.display = "none";
      movieBoxstv.style.marginLeft = `${maxLefttv}px`;
    } else {
      slideRtv.style.display = "block";
    }
    if (parseInt(movieBoxstv.style.marginLeft || 0) < 0) {
      slideLtv.style.display = "block";
    } else {
      slideLtv.style.display = "none";
      movieBoxstv.style.marginLeft = `${minLeft}px`;
    }
  });
  slideL.addEventListener("click", function () {
    movieBoxs.style.marginLeft =
      parseInt(movieBoxs.style.marginLeft || 0) + slideAmount + "px";
    if (parseInt(movieBoxs.style.marginLeft || 0) <= -3500) {
      slideR.style.display = "none";
      movieBoxs.style.marginLeft = `${maxLeft}px`;
    } else {
      slideR.style.display = "block";
    }
    if (parseInt(movieBoxs.style.marginLeft || 0) < 0) {
      slideL.style.display = "block";
    } else {
      slideL.style.display = "none";
      movieBoxs.style.marginLeft = `${minLeft}px`;
    }
  });
  slideL2.addEventListener("click", function () {
    movieBoxs2.style.marginLeft =
      parseInt(movieBoxs2.style.marginLeft || 0) + slideAmount + "px";
    if (parseInt(movieBoxs2.style.marginLeft || 0) <= -3500) {
      slideR2.style.display = "none";
      movieBoxs2.style.marginLeft = `${maxLeft}px`;
    } else {
      slideR2.style.display = "block";
    }
    if (parseInt(movieBoxs2.style.marginLeft || 0) < 0) {
      slideL2.style.display = "block";
    } else {
      slideL2.style.display = "none";
      movieBoxs2.style.marginLeft = `${minLeft}px`;
    }
  });
  slideL3.addEventListener("click", function () {
    movieBoxs3.style.marginLeft =
      parseInt(movieBoxs3.style.marginLeft || 0) + slideAmount + "px";
    if (parseInt(movieBoxs3.style.marginLeft || 0) <= -3500) {
      slideR3.style.display = "none";
      movieBoxs3.style.marginLeft = `${maxLeft}px`;
    } else {
      slideR3.style.display = "block";
    }
    if (parseInt(movieBoxs3.style.marginLeft || 0) < 0) {
      slideL3.style.display = "block";
    } else {
      slideL3.style.display = "none";
      movieBoxs3.style.marginLeft = `${minLeft}px`;
    }
  });
  slideL4.addEventListener("click", function () {
    movieBoxs4.style.marginLeft =
      parseInt(movieBoxs4.style.marginLeft || 0) + slideAmount + "px";
    if (parseInt(movieBoxs4.style.marginLeft || 0) <= -3500) {
      slideR4.style.display = "none";
      movieBoxs4.style.marginLeft = `${maxLeft}px`;
    } else {
      slideR4.style.display = "block";
    }
    if (parseInt(movieBoxs4.style.marginLeft || 0) < 0) {
      slideL4.style.display = "block";
    } else {
      slideL4.style.display = "none";
      movieBoxs4.style.marginLeft = `${minLeft}px`;
    }
  });
  slideLtv.addEventListener("click", function () {
    movieBoxstv.style.marginLeft =
      parseInt(movieBoxstv.style.marginLeft || 0) + slideAmount + "px";
    if (parseInt(movieBoxstv.style.marginLeft || 0) <= -3500) {
      slideRtv.style.display = "none";
      movieBoxstv.style.marginLeft = `${maxLeft}px`;
    } else {
      slideRtv.style.display = "block";
    }
    if (parseInt(movieBoxstv.style.marginLeft || 0) < 0) {
      slideLtv.style.display = "block";
    } else {
      slideLtv.style.display = "none";
      movieBoxstv.style.marginLeft = `${minLeft}px`;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  poster.classList.add("opacity");
});
video.addEventListener("play", () => {
  mute.style.display = "flex";
  video.volume = 0.2;
});
unmute.addEventListener("click", () => {
  if (unmute.src.endsWith("mute.png")) {
    unmute.src = "img/speaker.png";
    video.muted = false;
  } else {
    unmute.src = "img/mute.png";
    video.muted = true;
  }
});

async function tmdb() {
  try {
    let response1 = await fetch(
      `${TMBD_BASE_URL}/trending/all/week?api_key=${API_KEY}`
    );
    let data1 = await response1.json();
    let result1 = data1.results;
    
    result1.forEach(async (box, index) => {
      let movieBoxs = document.querySelector(".one >.movie-boxs");
      let movieee = document.createElement("div");


      async function getdetails() {
        try {
          let movieDetails = await fetch(
            `https://api.themoviedb.org/3/movie/${box.id}`,
            token
          );
          let movieDetail = await movieDetails.json();

          // console.log(movieDetail.genres)
          if (movieDetail.genres) {
            return movieDetail.genres;
          }

          let tvDetails = await fetch(
            `https://api.themoviedb.org/3/tv/${box.id}`,
            token
          );
          let tvDetail = await tvDetails.json();
          return tvDetail.genres;
        } catch (error) {
          console.error("Error:", error);
        }
      }
      async function getEpruntime() {
        try {
          let movieDetails = await fetch(
            `https://api.themoviedb.org/3/movie/${box.id}`,
            token
          );
          let movieDetail = await movieDetails.json();
          if (movieDetail.runtime) {
            return `${movieDetail.runtime} นาที`;
          }

          let tvDetails = await fetch(
            `https://api.themoviedb.org/3/tv/${box.id}`,
            token
          );
          let tvDetail = await tvDetails.json();
          return `${tvDetail.number_of_episodes} ตอน`;
        } catch (error) {
          console.error("Error:", error);
        }
      }
      let epruntimes = await getEpruntime();

      let genres = await getdetails();
      let genreName = genres.map((genre) => genre.name).join(`-`);

      async function translate() {
        try {
          let enToths = await fetch(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=th&dt=t&ie=UTF-8&oe=UTF-8&q=${genreName}`
          );
          let enToth = await enToths.json();
          let genreth = enToth[0][0][0];

          return genreth;
        } catch (error) {
          console.error("Error:", error);
        }
      }
      let trantoths = await translate();
      let trantoth = trantoths.replace(/-/g, " &nbsp;&bull;&nbsp; ");
      
      async function getvideo() {
        try {
          if (box.media_type == "movie") {
            let videosmv = await fetch(`https://api.themoviedb.org/3/movie/${box.id}/videos?language=en-US`, token)
            let videomv = await videosmv.json();
            let keymv;
            if(!videomv.results[0]){
              return keymv = "_ucy0zm5OKg"
            }else {
              keymv = videomv.results[1].key
              return keymv
            }
            
          } else {
            let videostvseries = await fetch(`https://api.themoviedb.org/3/tv/${box.id}/videos?language=en-US`, token)
            let videostvserie = await videostvseries.json();
            let keytvserie;
            if(!videostvserie.results[0]){
              return keytvserie = "_ucy0zm5OKg"
            }else {
              keytvserie = videostvserie.results[1].key
              return keytvserie
            }
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
      let fetchVideo = await getvideo()

      movieee.classList.add("movie", `movie-${index}-one`);
      movieee.innerHTML = `<img src="https://image.tmdb.org/t/p/original/${box.backdrop_path}" alt="">
                <div class="movie-info">
                    <img src="https://image.tmdb.org/t/p/original/${box.backdrop_path}" class="media fade" alt="">
                    <div class="media abs" id="player-${index}-one"></div>
                        <img src="img/mute.png" alt="" class="muted">
                    <div class="info-media">
                        <div class="movie-btn">
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/527/527995.png" alt=""></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" alt=""></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/9806/9806871.png" alt=""></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/142/142063.png" alt="">
                                <div class="epandinfo">
                                    <div class="message">ตอนและข้อมูล</div>
                                    <div class="triangle"></div>
                                </div>
                            </a>
                        </div>
                        <div class="about">
                            <span class="green">
                                ตรงกัน <span>98%</span>
                            </span>
                            <span>13+</span>
                            <span>${epruntimes}</span>
                            <span>HD</span>
                        </div>
                        <ul class="movie-categories"> 
                            <li >${trantoth}</li>
                        </ul>
                    </div>
                </div>`;
      movieBoxs.appendChild(movieee);

      let player;

      function initializePlayer(){
        player = new YT.Player(`player-${index}-one`,{
          height: '390',
        width: '640',
        videoId: fetchVideo,
        playerVars: {
        'autoplay': 0,
        'mute': 1,
        'controls': 0,
        'rel': 0,
        'loop': 1,
        'origin': window.location.origin,
      },
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
        })
      }
      initializePlayer()
      function onPlayerReady(event) {
        player.pauseVideo();
      }
      function onPlayerStateChange(e)  {
        if (e.data === YT.PlayerState.ENDED) {
            player.playVideo(); 
        }
    }
      movieCon.forEach((moviecon) => {
        let greens = moviecon.children[1].children[0];
        moviecon.addEventListener("mouseover", () => {
          greens.textContent = "ดูข้อมูลทั้งหมด";
          greens.style.transform = "translateX(1rem)";
          greens.style.opacity = "1";
          greens.classList.remove("hide");
          greens.style.animation = "fade 1.5s";
        });
      });
      movieCon.forEach((moviecon) => {
        let greens = moviecon.children[1].children[0];
        moviecon.addEventListener("mouseout", () => {
          greens.style.transform = "translateX(-6rem)";
          greens.textContent = "";
          greens.classList.add("hide");
          greens.style.animation = "";
        });
      });
      let muted = document.querySelector(`.movie-${index}-one .muted`);
      let movie = document.querySelector(`.movie-${index}-one`);
      
      let media = document.querySelector(`.movie-${index}-one .media.abs`);

     
      movie.addEventListener("mouseover", () => {
        player.playVideo()
      });
      movie.addEventListener("mouseout", () => {
        player.pauseVideo()
        

      });
      muted.addEventListener("click", () => {
         media = document.querySelector(`.movie-${index}-one .media.abs`);
        if (muted.src.endsWith("mute.png")) {
          muted.src = "img/speaker.png";
          player.unMute()
        } else {
          muted.src = "img/mute.png";
          player.mute()
        }
      });
    });

    let response2 = await fetch(
      "https://api.themoviedb.org/3/tv/127532/similar?language=en-US&page=1",
      token
    );
    let data2 = await response2.json();
    let result2 = data2.results;
    result2.forEach(async (box, index) => {
      let movieBoxs = document.querySelector(".movie-boxs.two");
      let movieee = document.createElement("div");
      async function getdetails() {
        try {
//           let movieDetails = await fetch(
//             `https://api.themoviedb.org/3/movie/${box.id}`,
//             token
//           );
//           let movieDetail = await movieDetails.json();
// console.log(movieDetail);
// if (movieDetail.genres) {
//   return movieDetail.genres;
// }

let tvDetails = await fetch(
  `https://api.themoviedb.org/3/tv/${box.id}`,token);
  let tvDetail = await tvDetails.json();
  console.log(tvDetail);
          return tvDetail.genres;
        } catch (error) {
          console.error("Error:", error);
        }
      }
      // console.log(await getdetails(),index,box.id);
      async function getEpruntime() {
        try {
          // let movieDetails = await fetch(
          //   `https://api.themoviedb.org/3/movie/${box.id}`,
          //   token
          // );
          // let movieDetail = await movieDetails.json();
          // if (movieDetail.runtime) {
          //   return `${movieDetail.runtime} นาที`;
          // }

          let tvDetails = await fetch(
            `https://api.themoviedb.org/3/tv/${box.id}`,
            token
          );
          let tvDetail = await tvDetails.json();
          return `${tvDetail.number_of_episodes} ตอน`;
        } catch (error) {
          console.error("Error:", error);
        }
      }
      let epruntimes = await getEpruntime();

      let genres = await getdetails();
      let genreName = genres.map((genre) => genre.name).join(`-`);

      async function translate() {
        try {
          let enToths = await fetch(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=th&dt=t&ie=UTF-8&oe=UTF-8&q=${genreName}`
          );
          let enToth = await enToths.json();
          let genreth = enToth[0][0][0];
          // console.log(genreth)
          return genreth;
        } catch (error) {
          console.error("Error:", error);
        }
      }
      let trantoths = await translate();
      let trantoth = trantoths.replace(/-/g, " &nbsp;&bull;&nbsp; ");
      async function getvideo() {
        try {
          if (box.media_type == "movie") {
            let videosmv = await fetch(`https://api.themoviedb.org/3/movie/${box.id}/videos?language=en-US`, token)
            let videomv = await videosmv.json();
            let keymv;
            if(!videomv.results[0]){
              return keymv = "_ucy0zm5OKg"
            }else {
              keymv = videomv.results[0].key
              return keymv
            }
            
          } else {
            let videostvseries = await fetch(`https://api.themoviedb.org/3/tv/${box.id}/videos?language=en-US`, token)
            let videostvserie = await videostvseries.json();
            let keytvserie;
            if(!videostvserie.results[0]){
              return keytvserie = "_ucy0zm5OKg"
            }else {
              keytvserie = videostvserie.results[1].key
              return keytvserie
            }
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
      let fetchVideo = await getvideo()
      movieee.classList.add("movie", `movie-${index}-two`);
      movieee.innerHTML = `<img src="https://image.tmdb.org/t/p/original/${box.backdrop_path}" alt="">
                  <div class="movie-info">
                    <img src="https://image.tmdb.org/t/p/original/${box.backdrop_path}" class="media fade" alt="">
                    <div class="media abs" id="player-${index}-two"></div>
                        <img src="img/mute.png" alt="" class="muted">
                    <div class="info-media">
                        <div class="movie-btn">
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/527/527995.png" alt=""></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" alt=""></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/9806/9806871.png" alt=""></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/142/142063.png" alt="">
                                <div class="epandinfo">
                                    <div class="message">ตอนและข้อมูล</div>
                                    <div class="triangle"></div>
                                </div>
                            </a>
                        </div>
                        <div class="about">
                            <span class="green">
                                ตรงกัน <span>98%</span>
                            </span>
                            <span>13+</span>
                            <span>${epruntimes}</span>
                            <span>HD</span>
                        </div>
                        <ul class="movie-categories"> 
                            <li >${trantoth}</li>
                        </ul>
                    </div>
                </div>`;
      movieBoxs.appendChild(movieee);

      let player;

      function initializePlayer(){
        player = new YT.Player(`player-${index}-two`,{
          height: '390',
        width: '640',
        videoId: fetchVideo,
        playerVars: {
        'autoplay': 0,
        'mute': 1,
        'controls': 0,
        'rel': 0,
        'loop': 1,
        'origin': window.location.origin,
      },
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
        })
      }
      initializePlayer()
      function onPlayerReady(event) {
        player.pauseVideo();
      }
      function onPlayerStateChange(e)  {
        if (e.data === YT.PlayerState.ENDED) {
          player.playVideo(); 
        }
    }
      movieCon.forEach((moviecon) => {
        let greens = moviecon.children[1].children[0];
        moviecon.addEventListener("mouseover", () => {
          greens.textContent = "ดูข้อมูลทั้งหมด";
          greens.style.transform = "translateX(1rem)";
          greens.style.opacity = "1";
          greens.classList.remove("hide");
          greens.style.animation = "fade 1.5s";
        });
      });
      movieCon.forEach((moviecon) => {
        let greens = moviecon.children[1].children[0];
        moviecon.addEventListener("mouseout", () => {
          greens.style.transform = "translateX(-6rem)";
          greens.textContent = "";
          greens.classList.add("hide");
          greens.style.animation = "";
        });
      });
      let muted = document.querySelector(`.movie-${index}-two .muted`);
      let movie = document.querySelector(`.movie-${index}-two`);
      movie.addEventListener("mouseover", () => {
        player.playVideo()
      });
      movie.addEventListener("mouseout", () => {
        player.pauseVideo()
        
      });
      muted.addEventListener("click", () => {
        let media = document.querySelector(`.movie-${index}-two .media.abs`);
        if (muted.src.endsWith("mute.png")) {
          muted.src = "img/speaker.png";
          player.unMute()
        } else {
          muted.src = "img/mute.png";
          media.muted = true;
          player.mute()
        }
      });
    });

    let response3 = await fetch(
      "https://api.themoviedb.org/3/tv/18123/similar",
      token
    );
    let data3 = await response3.json();
    let result3 = data3.results;

    result3.forEach(async (box, index) => {
      let movieBoxs = document.querySelector(".three > .movie-boxs");
      let movieee = document.createElement("div");
      async function getdetails() {
        try {
          // let movieDetails = await fetch(
          //   `https://api.themoviedb.org/3/movie/${box.id}`,
          //   token
          // );
          // let movieDetail = await movieDetails.json();

          // // console.log(movieDetail.genres)
          // if (movieDetail.genres) {
          //   return movieDetail.genres;
          // }

          let tvDetails = await fetch(
            `https://api.themoviedb.org/3/tv/${box.id}`,
            token
          );
          let tvDetail = await tvDetails.json();
          return tvDetail.genres;
        } catch (error) {
          console.error("Error:", error);
        }
      }
      async function getEpruntime() {
        try {
          // let movieDetails = await fetch(
          //   `https://api.themoviedb.org/3/movie/${box.id}`,
          //   token
          // );
          // let movieDetail = await movieDetails.json();
          // if (movieDetail.runtime) {
          //   return `${movieDetail.runtime} นาที`;
          // }

          let tvDetails = await fetch(
            `https://api.themoviedb.org/3/tv/${box.id}`,
            token
          );
          let tvDetail = await tvDetails.json();
          return `${tvDetail.number_of_episodes} ตอน`;
        } catch (error) {
          console.error("Error:", error);
        }
      }
      let epruntimes = await getEpruntime();

      let genres = await getdetails();
      let genreName = genres.map((genre) => genre.name).join(`-`);

      async function translate() {
        try {
          let enToths = await fetch(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=th&dt=t&ie=UTF-8&oe=UTF-8&q=${genreName}`
          );
          let enToth = await enToths.json();
          let genreth = enToth[0][0][0];
          // console.log(genreth)
          return genreth;
        } catch (error) {
          console.error("Error:", error);
        }
      }
      let trantoths = await translate();
      let trantoth = trantoths.replace(/-/g, " &nbsp;&bull;&nbsp; ");
      async function getvideo() {
        try {
          if (box.media_type == "movie") {
            let videosmv = await fetch(`https://api.themoviedb.org/3/movie/${box.id}/videos?language=en-US`, token)
            let videomv = await videosmv.json();
            let keymv;
            if(!videomv.results[0]){
              return keymv = "_ucy0zm5OKg"
            }else {
              keymv = videomv.results[1].key
              return keymv
            }
            
          } else {
            let videostvseries = await fetch(`https://api.themoviedb.org/3/tv/${box.id}/videos?language=en-US`, token)
            let videostvserie = await videostvseries.json();
            let keytvserie;
            if(!videostvserie.results[0]){
              return keytvserie = "_ucy0zm5OKg"
            }else {
              keytvserie = videostvserie.results[1].key
              return keytvserie
            }
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
      let fetchVideo = await getvideo()
      movieee.classList.add("movie", `movie-${index}-three`);
      movieee.innerHTML = `<img src="https://image.tmdb.org/t/p/original/${box.backdrop_path}" alt="">
                    <div class="movie-info">
                    <img src="https://image.tmdb.org/t/p/original/${box.backdrop_path}" class="media fade" alt="">
                    <div class="media abs" id="player-${index}-three"></div>
                        <img src="img/mute.png" alt="" class="muted">
                    <div class="info-media">
                        <div class="movie-btn">
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/527/527995.png" alt=""></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" alt=""></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/9806/9806871.png" alt=""></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/142/142063.png" alt="">
                                <div class="epandinfo">
                                    <div class="message">ตอนและข้อมูล</div>
                                    <div class="triangle"></div>
                                </div>
                            </a>
                        </div>
                        <div class="about">
                            <span class="green">
                                ตรงกัน <span>98%</span>
                            </span>
                            <span>13+</span>
                            <span>${epruntimes}</span>
                            <span>HD</span>
                        </div>
                        <ul class="movie-categories"> 
                            <li >${trantoth}</li>
                        </ul>
                    </div>
                </div>`;
      movieBoxs.appendChild(movieee);

      let player;

      function initializePlayer(){
        player = new YT.Player(`player-${index}-three`,{
          height: '390',
        width: '640',
        videoId: fetchVideo,
        playerVars: {
        'autoplay': 0,
        'mute': 1,
        'controls': 0,
        'rel': 0,
        'loop': 1,
        'origin': window.location.origin,
      },
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
        })
      }
      initializePlayer()
      function onPlayerReady(event) {
        player.pauseVideo();
      }
      function onPlayerStateChange(e)  {
        if (e.data === YT.PlayerState.ENDED) {
            player.playVideo(); 
        }
    }
      movieCon.forEach((moviecon) => {
        let greens = moviecon.children[1].children[0];
        moviecon.addEventListener("mouseover", () => {
          greens.textContent = "ดูข้อมูลทั้งหมด";
          greens.style.transform = "translateX(1rem)";
          greens.style.opacity = "1";
          greens.classList.remove("hide");
          greens.style.animation = "fade 1.5s";
        });
      });
      movieCon.forEach((moviecon) => {
        let greens = moviecon.children[1].children[0];
        moviecon.addEventListener("mouseout", () => {
          greens.style.transform = "translateX(-6rem)";
          greens.textContent = "";
          greens.classList.add("hide");
          greens.style.animation = "";
        });
      });

      let muted = document.querySelector(`.movie-${index}-three .muted`);
      let movie = document.querySelector(`.movie-${index}-three`);
      movie.addEventListener("mouseover", () => {
        player.playVideo()
      });
      movie.addEventListener("mouseout", () => {
        player.pauseVideo()
        
      });
      muted.addEventListener("click", () => {
        let media = document.querySelector(`.movie-${index}-three .media.abs`);
        if (muted.src.endsWith("mute.png")) {
          muted.src = "img/speaker.png";
          player.unMute()
        } else {
          muted.src = "img/mute.png";
          media.muted = true;
          player.mute()
        }
      });
    });
    let responsetv = await fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
      token
    );
    let datatv = await responsetv.json();
    let resulttv = datatv.results;
    let tvCard = []

    resulttv.forEach(async (box, index) => {
      let movieBoxs = document.querySelector(".tv > .movie-boxs");

      async function getdetails() {
        try {
          let tvDetails = await fetch(
            `https://api.themoviedb.org/3/tv/${box.id}`,
            token
          );
          let tvDetail = await tvDetails.json();
          let episode = `${tvDetail.number_of_episodes} ตอน`;
          let genre = tvDetail.genres.map((genre) => genre.name).join("-");
          let enToths = await fetch(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=th&dt=t&ie=UTF-8&oe=UTF-8&q=${genre}`
          );
          let enToth = await enToths.json();
          let tothai = enToth[0][0][0];
          return [episode, tothai.replace(/-/g, " &nbsp;&bull;&nbsp; "), index];
        } catch (error) {
          console.error("Error:", error);
        }
      }

      let fetchDetail = await getdetails();
      let ep = fetchDetail[0];
      let genr = fetchDetail[1];
      async function getvideo() {
        try {
          if (box.media_type == "movie") {
            let videosmv = await fetch(`https://api.themoviedb.org/3/movie/${box.id}/videos?language=en-US`, token)
            let videomv = await videosmv.json();
            let keymv;
            if(!videomv.results[0]){
              return keymv = "_ucy0zm5OKg"
            }else {
              keymv = videomv.results[1].key
              return keymv
            }
            
          } else {
            let videostvseries = await fetch(`https://api.themoviedb.org/3/tv/${box.id}/videos?language=en-US`, token)
            let videostvserie = await videostvseries.json();
            let keytvserie;
            if(!videostvserie.results[0]){
              return keytvserie = "_ucy0zm5OKg"
            }else {
              keytvserie = videostvserie.results[1].key
              return keytvserie
            }
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
      let fetchVideo = await getvideo()
      let movieee = document.createElement("div");
      movieee.classList.add("movie", `movie-${index}-tv`, "tv");
      movieee.innerHTML = `<span class="top10" hidden>${index + 1}</span>
        <img src="https://image.tmdb.org/t/p/original/${
          box.poster_path
        }" alt="">
        <div class="movie-info">
                      <img src="https://image.tmdb.org/t/p/original/${
                        box.backdrop_path
                      }" class="media fade" alt="">
                      <div class="media abs" id="player-${index}-tv"></div>
                      <img src="img/mute.png" alt="" class="muted">
                      <div class="info-media">
                          <div class="movie-btn">
                              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/527/527995.png" alt=""></a>
                              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" alt=""></a>
                              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/9806/9806871.png" alt=""></a>
                              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/142/142063.png" alt="">
                                  <div class="epandinfo">
                                  <div class="message">ตอนและข้อมูล</div>
                                      <div class="triangle"></div>
                                  </div>
                              </a>
                          </div>
                          <div class="about">
                              <span class="green">
                                  ตรงกัน <span>98%</span>
                              </span>
                              <span>13+</span>
                              <span>${ep}</span>
                              <span>HD</span>
                              </div>
                          <ul class="movie-categories"> 
                          <li>${genr}</li>
                          </ul>
                      </div>
                      </div>`;
                      if (index < 10) {
                        tvCard.push({ ep, genr, index, element: movieee })

       
        tvCard.sort((a, b) => a.index - b.index)
        tvCard.forEach((card) => {
          movieBoxs.appendChild(card.element)
          
        })
      }
      let player;
          function initializePlayer(){
            player = new YT.Player(`player-${index}-tv`,{
              height: '390',
            width: '640',
            videoId: fetchVideo,
            playerVars: {
            'autoplay': 0,
            'mute': 1,
            'controls': 0,
            'rel': 0,
            'loop': 1,
            'origin': window.location.origin,
          },
            events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
            })
          }
          initializePlayer()
          function onPlayerReady(event) {
            player.pauseVideo();
          }
          function onPlayerStateChange(e)  {
            if (e.data === YT.PlayerState.ENDED) {
                player.playVideo(); 
            }
        }
      movieCon.forEach((moviecon) => {
        let greens = moviecon.children[1].children[0];
        moviecon.addEventListener("mouseover", () => {
          greens.textContent = "ดูข้อมูลทั้งหมด";
          greens.style.transform = "translateX(1rem)";
          greens.style.opacity = "1";
          greens.classList.remove("hide");
          greens.style.animation = "fade 1.5s";
        });
      });
      movieCon.forEach((moviecon) => {
        let greens = moviecon.children[1].children[0];
        moviecon.addEventListener("mouseout", () => {
          greens.style.transform = "translateX(-6rem)";
          greens.textContent = "";
          greens.classList.add("hide");
          greens.style.animation = "";
        });
      });
      let muted = document.querySelector(`.movie-${index}-tv .muted`);
      let movie = document.querySelector(`.movie-${index}-tv`);
      movie.addEventListener("mouseover", () => {
        player.playVideo()
      });
      movie.addEventListener("mouseout", () => {
        player.pauseVideo()
      });
      muted.addEventListener("click", () => {
        let media = document.querySelector(`.movie-${index}-tv .media.abs`);
        if (muted.src.endsWith("mute.png")) {
          muted.src = "img/speaker.png";
          player.unMute()
        } else {
          muted.src = "img/mute.png";
          player.mute()
        }
      });
    });

    let response4 = await fetch(
      "https://api.themoviedb.org/3/tv/95479/similar?language=en-US&page=1",
      token
    );
    let data4 = await response4.json();
    let result4 = data4.results;

    result4.forEach(async (box, index) => {
      let movieBoxs = document.querySelector(".four > .movie-boxs");
      let movieee = document.createElement("div");
      async function getdetails() {
        try {
          // let movieDetails = await fetch(
          //   `https://api.themoviedb.org/3/movie/${box.id}`,
          //   token
          // );
          // let movieDetail = await movieDetails.json();

          // // console.log(movieDetail.genres)
          // if (movieDetail.genres) {
          //   return movieDetail.genres;
          // }

          let tvDetails = await fetch(
            `https://api.themoviedb.org/3/tv/${box.id}`,
            token
          );
          let tvDetail = await tvDetails.json();
          return tvDetail.genres;
        } catch (error) {
          console.error("Error:", error);
        }
      }
      async function getEpruntime() {
        try {
          // let movieDetails = await fetch(
          //   `https://api.themoviedb.org/3/movie/${box.id}`,
          //   token
          // );
          // let movieDetail = await movieDetails.json();
          // if (movieDetail.runtime) {
          //   return `${movieDetail.runtime} นาที`;
          // }

          let tvDetails = await fetch(
            `https://api.themoviedb.org/3/tv/${box.id}`,
            token
          );
          let tvDetail = await tvDetails.json();
          return `${tvDetail.number_of_episodes} ตอน`;
        } catch (error) {
          console.error("Error:", error);
        }
      }
      let epruntimes = await getEpruntime();

      let genres = await getdetails();
      let genreName = genres.map((genre) => genre.name).join(`-`);

      async function translate() {
        try {
          let enToths = await fetch(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=th&dt=t&ie=UTF-8&oe=UTF-8&q=${genreName}`
          );
          let enToth = await enToths.json();
          let genreth = enToth[0][0][0];
          // console.log(genreth)
          return genreth;
        } catch (error) {
          console.error("Error:", error);
        }
      }
      let trantoths = await translate();
      let trantoth = trantoths.replace(/-/g, " &nbsp;&bull;&nbsp; ");
      async function getvideo() {
        try {
          if (box.media_type == "movie") {
            let videosmv = await fetch(`https://api.themoviedb.org/3/movie/${box.id}/videos?language=en-US`, token)
            let videomv = await videosmv.json();
            let keymv;
            if(!videomv.results[0]){
              return keymv = "_ucy0zm5OKg"
            }else {
              keymv = videomv.results[1].key
              return keymv
            }
            
          } else {
            let videostvseries = await fetch(`https://api.themoviedb.org/3/tv/${box.id}/videos?language=en-US`, token)
            let videostvserie = await videostvseries.json();
            let keytvserie;
            if(!videostvserie.results[0]){
              return keytvserie = "_ucy0zm5OKg"
            }else {
              keytvserie = videostvserie.results[1].key
              return keytvserie
            }
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
      let fetchVideo = await getvideo()
      movieee.classList.add("movie", `movie-${index}-four`);
      movieee.innerHTML = `<img src="https://image.tmdb.org/t/p/original/${box.backdrop_path}" alt="">
                    <div class="movie-info">
                    <img src="https://image.tmdb.org/t/p/original/${box.backdrop_path}" class="media fade" alt="">
                    <div class="media abs" id="player-${index}-four"></div>
                        <img src="img/mute.png" alt="" class="muted">
                    <div class="info-media">
                        <div class="movie-btn">
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/527/527995.png" alt=""></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" alt=""></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/9806/9806871.png" alt=""></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/142/142063.png" alt="">
                                <div class="epandinfo">
                                    <div class="message">ตอนและข้อมูล</div>
                                    <div class="triangle"></div>
                                </div>
                            </a>
                        </div>
                        <div class="about">
                            <span class="green">
                                ตรงกัน <span>98%</span>
                            </span>
                            <span>13+</span>
                            <span>${epruntimes}</span>
                            <span>HD</span>
                        </div>
                        <ul class="movie-categories"> 
                            <li >${trantoth}</li>
                        </ul>
                    </div>
                </div>`;
      movieBoxs.appendChild(movieee);
      let player;

      function initializePlayer(){
        player = new YT.Player(`player-${index}-four`,{
          height: '390',
        width: '640',
        videoId: fetchVideo,
        playerVars: {
        'autoplay': 0,
        'mute': 1,
        'controls': 0,
        'rel': 0,
        'loop': 1,
        'origin': window.location.origin,
      },
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
        })
      }
      initializePlayer()
      function onPlayerReady(event) {
        player.pauseVideo();
      }
      function onPlayerStateChange(e)  {
        if (e.data === YT.PlayerState.ENDED) {
            player.playVideo(); 
        }
    }
      movieCon.forEach((moviecon) => {
        let greens = moviecon.children[1].children[0];
        moviecon.addEventListener("mouseover", () => {
          greens.textContent = "ดูข้อมูลทั้งหมด";
          greens.style.transform = "translateX(1rem)";
          greens.style.opacity = "1";
          greens.classList.remove("hide");
          greens.style.animation = "fade 1.5s";
        });
      });
      movieCon.forEach((moviecon) => {
        let greens = moviecon.children[1].children[0];
        moviecon.addEventListener("mouseout", () => {
          greens.style.transform = "translateX(-6rem)";
          greens.textContent = "";
          greens.classList.add("hide");
          greens.style.animation = "";
        });
      });

      let muted = document.querySelector(`.movie-${index}-four .muted`);
      let movie = document.querySelector(`.movie-${index}-four`);
      movie.addEventListener("mouseover", () => {
        player.playVideo()
      });
      movie.addEventListener("mouseout", () => {
        player.pauseVideo()
        
      });
      muted.addEventListener("click", () => {
        let media = document.querySelector(`.movie-${index}-four .media.abs`);
        if (muted.src.endsWith("mute.png")) {
          muted.src = "img/speaker.png";
          player.unMute()
        } else {
          muted.src = "img/mute.png";
          player.mute()
        }
      });
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
tmdb();
