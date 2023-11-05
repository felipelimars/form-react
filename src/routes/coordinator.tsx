import { NavigateFunction } from 'react-router-dom'; 

export const goToHome = (navigate: NavigateFunction) => {
  navigate('/');
}

export const goToListPage = (navigate: NavigateFunction) => {
  navigate('/listpage');
}
