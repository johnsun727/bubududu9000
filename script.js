/* 
  ANNIVERSARY SURPRISE WEBSITE
  This is where you edit most of the content.
*/

/* 
  INTRO TITLE CONTENT
  Change these placeholder lines to your own words.
*/
const intro = {
  kicker: "Our Story Thus Far",
  title: "Happy Anniversary Bub Bub!",
  subtitle: "These are special moments that we have shared and will treasure forever. Many many more to come <3",

  /*
    OPTIONAL BUBU/DUDU STYLE STICKERS
    Put sticker images inside /images and update these paths.
    You can leave these blank "" if you do not want stickers.
  */
  stickerOne: "images/budu1.png",
  stickerTwo: "images/budu2.png"
};

/* 
  MEMORY SECTIONS
  Add as many objects as you want.
  Each object creates one full memory section.

  image: put your photo path here
  title: big heading for that memory
  subtitle: smaller italic text
  text: your write-up/message
*/
const memories = [
  {
    title: "In the Beginning",
    subtitle: "reference to meme 'In dah begingin...'",
    image: "images/IMG_8613.jpg",
    text: "This was where our story started bub, one of our first walks where we walked to Lincoln park"
  },
  {
    title: "My First Gift To You",
    subtitle: "The first of many...",
    image: "images/rose.jpeg",
    text: "This was the first flower i have ever given to you, to celebrate mother's day, bc youre my mommy UwU. JKKKK (or am i?)"
  },
  {
    title: "Our First Official Date",
    subtitle: "looking bad food was aight but my view was exceptional (bro behind me agrees)",
    image: "images/IMG_0667.jpeg",
    text: "Unfortunately this was the only pic i have of the date hehe but i just want to remind you that this is what we will tell our grandchildren. THe movie was also pretty good POP QUIZ: do you remember what we watched!?"
  },
  {
    title: "Ending My Days With Your Smile",
    subtitle: "this helps me sleep at night no cap",
    image: "images/IMG_8659.PNG",
    text: "The first screenshot i took of you on our nightly calls, look at you, who got you smiling like that?"
  },
  {
    title: "Cooking For You",
    subtitle: "I like cooking for people, but i love cooking for you",
    image: "images/IMG_0747.jpeg",
    text: "This was one of the first meals i've cooked for you, you;re gonna be eating good bub, make sure to keep exercising or else we are hitting 200lbs :D"
  },
  {
    title: "Our First Zumba Class",
    subtitle: "you're actually kinda good at this sheeesh",
    image: "images/IMG_1085.jpeg",
    text: "This was our first Zumba class together and i enjoyed dancing with you bub, we can do our own zumba next time, the aunties were blocking the view. Weekly zumba at home concept?"
  },
  {
    title: "A Year Ago Today...",
    subtitle: "The official beginning of us",
    image: "images/IMG_1128.jpeg",
    text: "Eyyyyy one year ago today we made it official. One of the best decisions of my life and i'm glad to have you by my side. Hoping for many many more to come."
  },
  {
    title: "Cooking With You",
    subtitle: "We have many recipes yet to explore",
    image: "images/IMG_8881.jpg",
    text: "I love when we do things together, and cooking is definitely one of the top ones. We gon cook up a storm bub."
  },
  {
    title: "Putting Me On",
    subtitle: "First experiences with you...",
    image: "images/IMG_1467.jpg",
    text: "Bub i love when you put me on something new, this is one of the first things you put me on which was Bamiyan Kabob - did you know its Afganistani food? We might have to go back"
  },
  {
    title: "St Jacob Farmer's Market",
    subtitle: "Supreme Apple Fritters but the rest? Forget about it...",
    image: "images/IMG_1609.jpeg",
    text: "One of our first big field trips. Despite getting scammed with the jam, it was one of the most memorable days spent with you. Perhaps an annual tradition? hopefully the other foods step up!!!"
  },
  {
    title: "Canada Day Special",
    subtitle: "Good thing we had bug spray?",
    image: "images/IMG_1818.jpeg",
    text: "Our first fireworks! It was very romantic and I enjoyed every second of it next to you. See you there same spot this year!"
  },
  {
    title: "RIP Cold Noodle",
    subtitle: "We gotta find a new spot for me",
    image: "images/IMG_9206.jpg",
    text: "I remember we used to rank the restaurants we visit, though we dont do it anymore, i just want to share that i really enjoy being able to try new things and then share our thoughts on it. I love that we can do that for each other."
  },
  {
    title: "Summerlicious Pt 1 (Oh God...)",
    subtitle: "Dog food, but the most beautiful companion",
    image: "images/IMG_2017.jpeg",
    text: "This was our first fine dining experience, even though the food was not what we expeceted, I really enjoyed sharing the experience with you and I hope to do more of this in the future. You looked very very beautiful that night bub (you look beautiful every day just more so that night hehe)"
  },
  {
    title: "Summerlicious Pt 2",
    subtitle: "We should have gotten more steak...",
    image: "images/IMG_2128.jpg",
    text: "We will work hard so that we can dine like this whenever we want and order as many beef dishes as we like."
  },
  {
    title: "Celebrating With You",
    subtitle: "Thanks for standing in the rain with me bub",
    image: "images/IMG_9560.jpg",
    text: "Thank you for celebrating my birthday with me and making it special. I want us to grow old together so we can have twice as many cakes :D"
  },
  {
    title: "Making it Special For Me",
    subtitle: "You are a sneaky sneaky bubu",
    image: "images/IMG_9710.jpg",
    text: "Thank you for spoiling me on my birthday bub! I really appreciate you for planning the day for me and being next to me to experience it all"
  },
  {
    title: "One of Our Favourite Days",
    subtitle: "Should we have a drag queen at our wedding?",
    image: "images/IMG_3112.jpeg",
    text: "I know this is one of your favourite pictures hehe and i can see why. You look very good in green bub. Look at the backdrop thoooo."
  },
  {
    title: "Spontaneous Adventures",
    subtitle: "'Hey look over there.. o it's gone'",
    image: "images/IMG_3297.jpeg",
    text: "I promise you bub bub, once we have more time, we will go on more adventures like this one. Another first for me seeing shooting stars, and I wouldn't want to see it with anyone else. Thank you for the invite!"
  },
  {
    title: "Downtown Takeover",
    subtitle: "We run these streets",
    image: "images/IMG_3427.jpg",
    text: "CNE with the bub! You know this one of my favourite pictures and i am very grateful for you for taking me to places i wouldn't normally visit."
  },
  {
    title: "Picasso 2.0",
    subtitle: "I will never stop doing this",
    image: "images/IMG_0314.png",
    text: "I am an artist and this is one of my greatest works."
  },
  {
    title: "Food In Car",
    subtitle: "One of my favourite things to do with you - watch sunset, eat food",
    image: "images/IMG_0419.jpg",
    text: "I am glad you have high standards for certain foods because that means i get to eat it too haha. You also put me on Taro's Fish!"
  },
  {
    title: "Growing Together",
    subtitle: "Never forget, 5k in 15 mins",
    image: "images/IMG_0530.jpg",
    text: "I love growing with you bub, and there's nothing more tangible than exercising and getting stronger together! We will run a marathon together one day!"
  },
  {
    title: "Gilbert",
    subtitle: "Our son",
    image: "images/IMG_0606.jpg",
    text: "Gilbert was too easy bub, it's time for us to find something bigger and better! Another activity that i love doing next to you <3"
  },
  {
    title: "Brown Mountain",
    subtitle: "We might be racist for real (i am definitely racist)",
    image: "images/IMG_8417.jpeg",
    text: "Although there wasn't a lot of blue, this was our first actual hike together, and it felt amazing seeing the skyline with you at the top, lets find the next mountain to climb!"
  },
  {
    title: "The Most Beautiful Girl I've Ever laid My Eyes On",
    subtitle: "Thank you Nicole for this picture",
    image: "images/IMG_0823.png",
    text: "My bub bub <3"
  },
  {
    title: "My First Concert",
    subtitle: "Laufey kinda slapped",
    image: "images/IMG_8750.jpg",
    text: "Thank you for taking me to my first and second ever concert bub, i love sharing these first experiences with you!"
  },
  {
    title: "Beeg Beeg Pumpkin Pt 1",
    subtitle: "Michael put us on",
    image: "images/IMG_9016.jpg",
    text: "This is when we went to Maple Grove farm and found our beeg beeg pumpkins."
  }
  ,
  {
    title: "Beeg Beeg Pumpkin Pt 2",
    subtitle: "Not only are we austistic, we are also very artistic",
    image: "images/IMG_0999.jpg",
    text: "We did good work on these pumpkins bub, we gotta run it back"
  }
  ,
  {
    title: "Beeg Beeg Pumpkin Pt 3",
    subtitle: "wooooooo, spooky",
    image: "images/IMG_9311.jpeg",
    text: "While i think yours look better, mine is definitely better in general hehe"
  }
  ,
  {
    title: "WE DID IT!",
    subtitle: "One of our proudest moments",
    image: "images/IMG_7515.jpeg",
    text: "This is one of OUR favourite pictures and undoubtedly one of our most treasured memories! I am so proud of us for accomplishing the CN Tower climb, it shows that when we set our minds on a goal, with persistence and determination, we will attain it. Lets do that for all our goals!"
  }
  ,
  {
    title: "The Revolution Pt 1",
    subtitle: "How can anyone stop us when we look like this",
    image: "images/IMG_1824.jpg",
    text: "I know we had our ups and downs on our trip but it was our first trip together regardless, and guess what bub, we came back together! In the face of any challenge - like the revolution, as lonng as we stay together, we are unstoppable!"
  }
  ,
  {
    title: "The Revolution Pt 2",
    subtitle: "Cold but hot because you were next to me UwU",
    image: "images/IMG_1843.jpg",
    text: "I am glad to have made memories with you on this trip, like going tobogganing with you and trying new foods together!"
  }
  ,
  {
    title: "The Revolution Pt 3",
    subtitle: "Hot and cold at the same time",
    image: "images/IMG_2102.jpg",
    text: "Thank you bub bub for treating me to the SPA, it was a definitely a new experience that i don't think i would have had by myself. We might have to run it back at the one in Waterloo :D"
  }
  ,
  {
    title: "Celebrating You Pt 1",
    subtitle: "One day this would be pocket change",
    image: "images/IMG_2174.jpg",
    text: "This is my first Omakase and we did it to celebrate your birthday! I hope you had an amazing day and enjoyed the food. I will take you to somewhere even better, i promise!"
  },
  {
    title: "Celebrating You Pt 2",
    subtitle: "I cooked with the cake dont lie",
    image: "images/IMG_2434.jpg",
    text: "When you are happy, i am happy, and i was very happy that night because i know how much you liked the cake :))"
  },
  {
    title: "Valentine's Day",
    subtitle: "First of many",
    image: "images/IMG_2862.jpg",
    text: "This is our first Valentine's day celebration and i hope one day we can do this at our own place :D I will make you a nice juicy dinner just like this one but better in the comfort of our own home <3"
  },
  {
    title: "Learning Something New Together",
    subtitle: "There is a chance one day we get a call from the Toronto Maple Leafs",
    image: "images/IMG_6880.jpeg",
    text: "I love learning something new with you bub bub, we see each other struggle, overcome, and grow. Let's go skating again maybe i can become a hockey player and you a figure skater!"
  },
  {
    title: "Club With Bub",
    subtitle: "You got moves bub, from Zumba?",
    image: "images/IMG_3993.jpeg",
    text: "This was your first time clubbing bub and I made sure to be there to protect you. I hope you enjoyed it! We will go bust it out on the dance floor once more."
  },
  {
    title: "Bonus Pt 1",
    subtitle: "I will never delete this",
    image: "images/IMG_3484.png",
    text: "This is the person i fell in love with"
  },
  {
    title: "Bonus Pt 2",
    subtitle: "'Try denying me bubble tea again, just try it' is what i imagine is going through your head with that look",
    image: "images/IMG_3630.jpg",
    text: "This > everything else"
  }

];

/* 
  SUNSET PHOTOS
  Add as many sunset objects as you want.
  Each object creates one carousel card.
*/
const sunsetPhotos = [
  {
    image: "images/sunset1.jpg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset2.jpeg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset3.jpeg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset4.jpg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset5.jpg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset6.jpg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset7.jpeg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset8.jpeg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset9.jpg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset10.jpeg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset11.jpeg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset12.jpg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset13.jpg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset14.jpg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset15.jpg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset16.jpg",
    caption: "Sunset placeholder caption one."
  },
  {
    image: "images/sunset17.jpg",
    caption: "Sunset placeholder caption one."
  }

];

/* Grab HTML elements */
const fakeLanding = document.getElementById("fakeLanding");
const surpriseBtn = document.getElementById("surpriseBtn");
const mainExperience = document.getElementById("mainExperience");
const bgMusic = document.getElementById("bgMusic");
const backgroundBlur = document.getElementById("backgroundBlur");
const introContent = document.getElementById("introContent");
const memoriesContainer = document.getElementById("memoriesContainer");
const sunsetCarousel = document.getElementById("sunsetCarousel");

/* 
  When she clicks the ugly landing page button:
  1. Hide fake landing
  2. Show main website
  3. Start music
*/
surpriseBtn.addEventListener("click", () => {
  fakeLanding.style.display = "none";
  mainExperience.classList.remove("hidden");

  // Try to play music. If no music file exists yet, nothing bad happens.
  bgMusic.play().catch(() => {
    console.log("Music did not play. Add your music file or check browser autoplay rules.");
  });

  // Set first memory image as blurred background
  if (memories.length > 0) {
    backgroundBlur.style.backgroundImage = `url('${memories[0].image}')`;
  }
});

/* Build intro title section */
function renderIntro() {
  introContent.innerHTML = `
    ${intro.stickerOne ? `<img class="intro-sticker sticker-one" src="${intro.stickerOne}" alt="cute sticker" />` : ""}
    ${intro.stickerTwo ? `<img class="intro-sticker sticker-two" src="${intro.stickerTwo}" alt="cute sticker" />` : ""}

    <p class="intro-kicker">${intro.kicker}</p>
    <h1 class="intro-title">${intro.title}</h1>
    <p class="intro-subtitle">${intro.subtitle}</p>
  `;
}

/* Build memory sections from the memories array */
function renderMemories() {
  memoriesContainer.innerHTML = "";

  memories.forEach((memory, index) => {
    const section = document.createElement("section");

    section.className = `memory-section ${index % 2 === 1 ? "reverse" : ""}`;
    section.dataset.bg = memory.image;

    section.innerHTML = `
      <div class="memory-photo-wrap">
        <img class="memory-photo" src="${memory.image}" alt="${memory.title}" />
      </div>

      <article class="memory-text-card">
        <h2>${memory.title}</h2>
        <p class="memory-subtitle">${memory.subtitle}</p>
        <p class="memory-body">${memory.text}</p>
      </article>
    `;

    memoriesContainer.appendChild(section);
  });
}

/* Build sunset carousel from the sunsetPhotos array */
function renderSunsets() {
  sunsetCarousel.innerHTML = "";

  sunsetPhotos.forEach((photo) => {
    const card = document.createElement("article");
    card.className = "sunset-card";

    card.innerHTML = `
      <img src="${photo.image}" alt="${photo.caption}" />
    `;

    sunsetCarousel.appendChild(card);
  });
}

/* 
  Scroll observer:
  - Fades sections in
  - Changes the blurred background based on the memory currently in view
*/
function setupScrollEffects() {
  const memorySections = document.querySelectorAll(".memory-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          const newBg = entry.target.dataset.bg;
          backgroundBlur.style.backgroundImage = `url('${newBg}')`;
        }
      });
    },
    {
      threshold: 0.45
    }
  );

  memorySections.forEach((section) => observer.observe(section));
}

/* Run everything */
renderIntro();
renderMemories();
renderSunsets();
setupScrollEffects();

