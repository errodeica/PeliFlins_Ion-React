import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import { useParams, useHistory } from 'react-router-dom';
import Nav from '../components/Nav';

import movies from '../movies.json';

const Movie: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  // Buscar la película correspondiente al ID en los datos de películas
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) {
    return (
      <IonPage>
        <Nav />
        <IonContent fullscreen>
          <div>No se encontró la película.</div>
        </IonContent>
      </IonPage>
    );
  }

  const handleGoHome = () => {
    history.push('/home');
  };

  return (
    <IonPage>
      <Nav />
      <IonContent fullscreen>
        <IonCard key={movie.id}>
          {/* Contenido de la tarjeta */}
          <IonCardHeader>
            
            <IonCardTitle>{movie.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </IonCardContent>
        </IonCard>
        <IonButton expand="full" onClick={handleGoHome}>
          Volver al Home
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Movie;
