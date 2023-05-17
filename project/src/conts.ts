export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum FilmNavigation {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum GenreFilter {
  AllGenres = 'All genre',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Horror = 'Horror',
  KidsFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thrillers'
}

export enum AppPage {
  Main = 'main',
  SignIn = 'sign-in',
  MyList = 'page-title',
  Film = 'film-card',
  AddReview = 'review',
  Player = 'player',
}

export enum HeaderVersion {
  UserPage = 'user-page__head',
  FilmCard = 'film-card__head',
  Empty = '',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  Service = 'SERVICE',
}
