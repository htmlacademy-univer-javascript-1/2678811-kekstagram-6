const descriptions = [
  'Прекрасный закат на море',
  'Горный пейзаж в утреннем тумане',
  'Улицы старого города',
  'Архитектура современного мегаполиса',
  'Лесная тропинка после дождя',
  'Цветущий сад весной',
  'Зимний пейзаж с заснеженными деревьями',
  'Городской парк в солнечный день',
  'Морской берег с белым песком',
  'Горная река с кристально чистой водой',
  'Уличное кафе в европейском стиле',
  'Ночной город с огнями',
  'Осенний лес с разноцветными листьями',
  'Поля с подсолнухами',
  'Архитектурный памятник истории',
  'Сельский пейзаж с домиками',
  'Городская набережная',
  'Горный водопад',
  'Пляж с пальмами',
  'Улочки с граффити',
  'Старый мост через реку',
  'Современный небоскреб',
  'Церковь с золотыми куполами',
  'Поле с лавандой',
  'Городской фонтан'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Артём',
  'Игорь',
  'Ольга',
  'Светлана',
  'Никита',
  'Елизавета',
  'Дмитрий',
  'Марина',
  'Георгий',
  'Ксения',
  'Тимур',
  'Алексей',
  'Егор',
  'Лидия',
  'Владимир',
  'Татьяна'
];

const constants = {
  photosCount: 25,
  minLikes: 15,
  maxLikes: 200,
  minComments: 0,
  maxComments: 30,
  minAvatar: 1,
  maxAvatar: 6,
};

const generatePhotosArray = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const getRandomFrom = (arr) => arr[getRandomInt(0, arr.length - 1)];

  const generateAvatar = () => `img/avatar-${getRandomInt(constants.minAvatar, constants.maxAvatar)}.svg`;

  const generateMessage = () => {
    const num = getRandomInt(1, 2);
    const msgs = Array.from({ length: num }, () => getRandomFrom(messages));
    return msgs.join(' ');
  };

  let commentId = 1;
  const generateComment = () => ({
    id: commentId++,
    avatar: generateAvatar(),
    message: generateMessage(),
    name: getRandomFrom(names)
  });

  const generateComments = () => {
    const count = getRandomInt(constants.minComments, constants.maxComments);
    return Array.from({ length: count }, generateComment);
  };

  const generatePhoto = (i) => ({
    id: i,
    url: `photos/${i}.jpg`,
    description: getRandomFrom(descriptions),
    likes: getRandomInt(constants.minLikes, constants.maxLikes),
    comments: generateComments()
  });

  return Array.from({ length: constants.photosCount }, (_, idx) => generatePhoto(idx + 1));
};

generatePhotosArray();
