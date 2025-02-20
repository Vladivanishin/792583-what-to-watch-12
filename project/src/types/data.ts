export type Film = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
};

export type Films = Film[];

export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    id: number;
    name: string;
  };
};

export type Comments = Comment[];

export type NewComment = {
  comment: string;
  rating: number;
};

export type UserAuthStatus = {
  avatarUrl?: string;
  email: string;
  id: number;
  name?: string;
  token: string;
}

export type UserLoginData = {
  email: string;
  password: string;
}

export type UserData = {
  id: number;
  email: string;
  token: string;
}
