

export interface User {

    id: number,
    profilContent: string,
    content: string,
    date: number,
    likes: number,
    followers: number,
    image: {
      webp: string,
    },
    img: {
      webp: string,
    }
    pseudo: string,
    spot: string,
    tweets?: Tweet[],
    username: string,
    otherUsers:User[]

}

interface Tweet {
  id: number;
  tweet: string;
  date: number;
  likes: number;
  img: string | null;
  messages: Message[]
}

interface Message {
  id: number;
  otherUser: string;
  pseudo: string;
  tweet: string;
  likes: string;
  date: number;
  img: string | null;
  answer: Message[]
}

export interface ExtendedUser extends User{
  profilUser: User[]
}
export interface ProfilUserState {
 otherUsers: User
 profilUser: User
}

export enum IdOtherClients {
  ARTHUR,
  ALAIN,
  MELANIE
}