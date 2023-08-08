import { IdOtherClients } from "./share/module";

export const dataSocial = {
  currentUser: [
    {
      image: {
        webp: "/image-juliusomo.webp",
      },
      username: "Mahmoud Zakaria",
      pseudo: "@AlbertII",
      content:
        "MS in Investments & Securities dropout. Full time crypto, stock, level 5 option trader. Real Estate investor/developer, corporation owner *Not",
      spot: "Reunion Island",
      date: 112209209209,
      followers: 2,
      tweets: [
        {
          id: 1,
          tweet: "Mon premier tweet!",
          date: 123322178678687,
          likes: 1,
          img: `https://source.unsplash.com/random/?Games/${Math.random()}`,
          messages: [
            {
              id: 1,
              otherUser: "Maxime",
              pseudo: "@MaximeOk",
              tweet: "GOOD",
              likes: 1,
              date: 123322178678687,
              img: `https://source.unsplash.com/random/?Games/${Math.random()}`,
              answer: [],
            },
            {
              id: 2,
              otherUser: "Blee",
              pseudo: "@Blee",
              tweet: "Welcome à toi",
              likes: 5,
              date: 123322118687,
              answer: [],
            },
            {
              id: 3,
              otherUser: "Joshua",
              pseudo: "@MartinJoshua",
              tweet: "Enchanté Julien",
              likes: 0,
              date: 1233221786786,
              answer: [],
            },
            {
              id: 4,
              otherUser: "Brandon",
              pseudo: "@MissileB",
              tweet: "Bonjour tout le monde",
              likes: 2,
              date: 1278678687,
              answer: [],
            },
          ],
        },
        {
          id: 1,
          tweet: "Il fait quelle temps",
          date: 123322178678687,
          likes: 1,
          img: `https://source.unsplash.com/random/?Games/${Math.random()}`,
          messages: [
            {
              id: 1,
              otherUser: "Maxime",
              pseudo: "@MaximeOk",
              tweet: "Soleil",
              likes: 1,
              date: 123322178678687,
              img: `https://source.unsplash.com/random/?Games/${Math.random()}`,
              answer: [
                {
                  id: 1,
                  username: "Mahmoud Zakaria",
                  pseudo: "@MZakaria12",
                  webp: "./images/avatars/image-juliusomo.webp",
                  date: 123322178678687,
                  likes: 1,
                  answer: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  otherUsers: [
    {
      id: IdOtherClients.ARTHUR,
      likes: 2,
      image: {
        webp: "/assets/profil-1.png",
      },
      username: "Gwaenardel",
      pseudo: "@Int23",
      content:
        "Bisounoursiste Non Angélique. Vous voulez du sang?... 😁 Ma CUP est pleine. À la bonne vôtre! 🍷 Allez vous faire Loutre. 🪷🧘🏻‍♀️🕊️",
      profilContent: "Hello la populass",
      img: {
        webp: "/assets/game_2.png",
      },
      spot: null,
      date: 112209209209,
      followers: 2,
      tweets: [
        {
          id: 1,

          tweet: "HELLO",
          date: 123322178678687,
          likes: 12,
          img: null,
          messages: [
            {
              id: 1,
              otherUser: "Maxime",
              pseudo: "@MaximeOk",
              tweet: "GOOD",
              likes: 1,
              date: 123322178678687,
              img: `${`https://source.unsplash.com/random/?Games/${Math.random()}"`} `,
              answer: [],
            },
          ],
        },
      ],
    },
    {
      id: IdOtherClients.ALAIN,
      likes: 400,
      image: {
        webp: "/assets/profil-2.png",
      },
      username: "Marcel",
      pseudo: "@realmarcel1",
      content:
        "Les retraités qui vivent à l’étranger ont cotisé toute leur carrière pour leur retraite, comme tout le monde. Ils ont le droit de la prendre où ils veulent…",

      profilContent: "Bonjour my space",
      img: {
        webp: "/assets/game_1.png",
      },
      spot: null,
      date: 112209209209,
      followers: 2,
      tweets: [
        {
          id: 1,
          tweet: "parlons-en quelques minutes de cette fraude fiscale",
          date: 123322178678687,
          likes: 111,
          img: null,
          messages: [
            {
              id: 1,
              otherUser: "Maxime",
              pseudo: "@MaximeOk",
              tweet: "GOOD",
              likes: 1,
              date: 123322178678687,
              img: null,
              answer: [],
            },
          ],
        },
      ],
    },
    {
      id: IdOtherClients.MELANIE,
      likes: 10,
      image: {
        webp: "/assets/profil-3.png",
      },
      username: "Alain",
      pseudo: "@realmarcel1",
      content:
        "Vos avis sur l’épisode 9 de la saison 3 de l’anime Demon Slayer ?",

      profilContent:
        "Compte relayant toute l'actu manga/anime en temps réel | 🔔 ",
      img: {
        webp: null,
      },
      spot: "Japon",
      date: 112209209,
      followers: 200,
      tweets: [
        {
          id: 1,
          tweet: "parlons-en quelques minutes de cette fraude fiscale",
          date: 123322178678687,
          likes: 1,
          img: null,
          messages: [
            {
              id: 1,
              otherUser: "Maxime",
              pseudo: "@MaximeOk",
              tweet: "GOOD",
              likes: 1,
              date: 123322178678687,
              img: null,
              answer: [],
            },
          ],
        },
      ],
    },
  ],
};
