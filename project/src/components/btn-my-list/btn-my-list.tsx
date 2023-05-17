import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSetFavoriteAction } from '../../store/api-actions';
import { getAuthStatus, getFavorites } from '../../store/user-process/selectors';
import { AppRoute } from '../../conts';
import { getFavoriteStatus } from '../../store/data-process/selectors';
import { useState } from 'react';

type BtnMyListProps = {
  filmId: number;
  isFavorite: boolean;
}
export default function BtnMyList({ filmId, isFavorite }: BtnMyListProps): JSX.Element {
  const favorites = useAppSelector(getFavorites);
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(getAuthStatus);
  const navigate = useNavigate();
  const isFavoriteStatus = useAppSelector(getFavoriteStatus);
  console.log('isFavorite', isFavorite);
  console.log('isFavoriteStatus', isFavoriteStatus);
  const handleFavoriteBtn = () => {
    if (isAuthorized) {
      dispatch(fetchSetFavoriteAction({ filmId: filmId, status: Number(!isFavorite) }));
    } else {
      navigate(AppRoute.SignIn);
    }
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleFavoriteBtn}>
      {isFavorite === false ? (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      )}
      <span>My list</span>
      <span className="film-card__count">{favorites.length}</span>
    </button>
  );
}
