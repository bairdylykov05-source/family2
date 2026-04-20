const members = [
  {
    id: 1,
    name: "Бадураева Баирма Эрдэмовна",
    role: "Сестра",
    trait: "Любит кушать",
    description: "Баирма Эрдэмовна — любимая сестра, которая умеет превращать любое застолье в теплый и душевный семейный момент.",
    photo: "./sister.jpg",
    thumbPosition: "5% 58%",
    spotlightPosition: "0% 46%"
  },
  {
    id: 2,
    name: "Бадураев Булат Чингисович",
    role: "Племянник",
    trait: "Всегда смеется",
    description: "Булат Чингисович — веселый племянник, который заряжает дом смехом и сразу поднимает всем настроение.",
    photo: "./bulat.jpg",
    thumbPosition: "18% 21%",
    spotlightPosition: "18% 18%"
  },
  {
    id: 3,
    name: "Бадураев Андрей Борисович",
    role: "Дядя",
    trait: "Купил новую машину",
    description: "Андрей Борисович — дядя, у которого сейчас особенный повод для радости: новая машина и новые семейные поездки впереди.",
    photo: "./andrey.jpg",
    thumbPosition: "28% 38%",
    spotlightPosition: "30% 36%"
  },
  {
    id: 4,
    name: "Дылыкова Цыбегмит Бадмацыреновна",
    role: "Мама",
    trait: "Лучшая мама",
    description: "Цыбегмит Бадмацыреновна — лучшая мама, заботливая и сильная, тот человек, вокруг которого держится семейное тепло.",
    photo: "./mom.jfif",
    thumbPosition: "40% 26%",
    spotlightPosition: "42% 20%"
  },
  {
    id: 5,
    name: "Бадураев Алдар Чингисович",
    role: "Племянник",
    trait: "Почти подросток",
    description: "Алдар Чингисович — племянник на пороге взросления: уже серьезный, но в нем еще живет детская легкость и энергия.",
    photo: "./aldar.jpg",
    thumbPosition: "49% 54%",
    spotlightPosition: "48% 52%"
  },
  {
    id: 6,
    name: "Дылыков Баир Эрдэмович",
    role: "Создатель сайта",
    trait: "Это я",
    description: "Баир Эрдэмович — создатель этого сайта. Именно он собрал здесь всю семью, чтобы сохранить общие воспоминания в одном красивом месте.",
    photo: "./me.jpg",
    thumbPosition: "59% 42%",
    spotlightPosition: "58% 38%"
  },
  {
    id: 7,
    name: "Дылыков Эрдэм Дугарович",
    role: "Отец",
    trait: "Лучший батька",
    description: "Эрдэм Дугарович — лучший отец, надежный и сильный человек, рядом с которым семья чувствует опору и уверенность.",
    photo: "./erdem.jfif",
    thumbPosition: "66% 12%",
    spotlightPosition: "65% 12%"
  },
  {
    id: 8,
    name: "Дылыков Айдар Батоевич",
    role: "Племянник",
    trait: "Самый спокойный",
    description: "Айдар Батоевич — самый спокойный племянник: тихий, уравновешенный и очень приятный в общении.",
    photo: "./aidar.jpg",
    thumbPosition: "77% 54%",
    spotlightPosition: "76% 50%"
  },
  {
    id: 9,
    name: "Дылыкова Сарюн Чингисовна",
    role: "Тетя",
    trait: "Любит отжиматься",
    description: "Сарюн Чингисовна — тетя с характером и энергией. Любовь к отжиманиям отлично подчеркивает ее силу и бодрость.",
    photo: "./saryun.jfif",
    thumbPosition: "74% 24%",
    spotlightPosition: "74% 20%"
  },
  {
    id: 10,
    name: "Дылыков Максар Батоевич",
    role: "Племянник",
    trait: "Главный озорник",
    description: "Максар Батоевич — главный семейный озорник, с которым рядом всегда есть движение, шум и смешные моменты.",
    photo: "./maksar.jpg",
    thumbPosition: "85% 57%",
    spotlightPosition: "84% 54%"
  },
  {
    id: 11,
    name: "Дылыков Бато Эрдэмович",
    role: "Брат",
    trait: "Хочет новую машину",
    description: "Бато Эрдэмович — брат, который уже смотрит в сторону новой машины и наверняка знает, какой она должна быть.",
    photo: "./bato.jpg",
    thumbPosition: "92% 30%",
    spotlightPosition: "92% 26%"
  }
];

const familyGrid = document.getElementById("familyGrid");
const template = document.getElementById("memberTemplate");
const spotlightName = document.getElementById("spotlightName");
const spotlightRole = document.getElementById("spotlightRole");
const spotlightDescription = document.getElementById("spotlightDescription");
const spotlightPhoto = document.getElementById("spotlightPhoto");
const familyAudio = document.getElementById("familyAudio");
const musicToggle = document.getElementById("musicToggle");

let activeId = 6;

function setPhoto(element, member, fallbackPosition) {
  if (member.photo) {
    element.style.backgroundImage = `url("${member.photo}")`;
    element.style.backgroundPosition = "center";
    element.classList.add("is-portrait");
  } else {
    element.style.backgroundImage = 'url("./family-photo.jfif")';
    element.style.backgroundPosition = fallbackPosition;
    element.classList.remove("is-portrait");
  }
}

function setSpotlight(member) {
  spotlightName.textContent = member.name;
  spotlightRole.textContent = `${member.role} • ${member.trait}`;
  spotlightDescription.textContent = member.description;
  setPhoto(spotlightPhoto, member, member.spotlightPosition);
  spotlightPhoto.animate(
    [
      { opacity: 0.4, transform: "translateY(12px) scale(0.96)" },
      { opacity: 1, transform: "translateY(0) scale(1)" }
    ],
    {
      duration: 420,
      easing: "ease-out"
    }
  );

  document.querySelectorAll(".member-card").forEach((card) => {
    card.classList.toggle("is-active", Number(card.dataset.id) === member.id);
  });
}

function createMemberCard(member, index) {
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector(".member-card");
  const photo = fragment.querySelector(".member-card__photo");
  const name = fragment.querySelector(".member-card__name");
  const meta = fragment.querySelector(".member-card__meta");

  card.dataset.id = String(member.id);
  card.setAttribute("aria-label", `${member.name}, ${member.role}`);
  setPhoto(photo, member, member.thumbPosition);
  name.textContent = member.name;
  meta.textContent = `${member.role} • ${member.trait}`;

  card.addEventListener("click", () => {
    activeId = member.id;
    setSpotlight(member);
  });

  familyGrid.appendChild(fragment);

  const insertedCard = familyGrid.lastElementChild;
  window.setTimeout(() => {
    insertedCard.classList.add("is-visible");
    if (member.id === activeId) {
      insertedCard.classList.add("is-active");
    }
  }, 1000 + index * 180);
}

members.forEach(createMemberCard);
setSpotlight(members.find((member) => member.id === activeId));

function updateMusicButton(isPlaying) {
  musicToggle.textContent = isPlaying ? "Музыка: вкл" : "Музыка: выкл";
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
}

familyAudio.volume = 0.35;
updateMusicButton(false);

familyAudio.addEventListener("play", () => updateMusicButton(true));
familyAudio.addEventListener("pause", () => updateMusicButton(false));

async function tryStartAudio() {
  try {
    await familyAudio.play();
    updateMusicButton(true);
    return true;
  } catch (error) {
    updateMusicButton(false);
    return false;
  }
}

musicToggle.addEventListener("click", async () => {
  if (familyAudio.paused) {
    await tryStartAudio();
    return;
  }

  familyAudio.pause();
  updateMusicButton(false);
});

window.addEventListener("load", () => {
  tryStartAudio();
});
