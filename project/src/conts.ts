export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AppPage {
  Main = 'main',
  SignIn = 'login',
  MyList = 'user-page',
  Film = 'film-card',
  AddReview = 'review',
  Player = 'player'
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
}
