import React from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonHeader,
} from '@ionic/react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import movies from '../movies.json';

const Home: React.FC = () => {
  const displayedMovies = movies.slice(0, 5);

  return (
    <IonPage>
      <Nav />
      <IonHeader>
       
      </IonHeader>

      <IonContent fullscreen>
        <IonGrid fixed>
          <IonRow
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {displayedMovies.map((movie) => (
              <IonCol key={movie.id} size="12" size-sm="4" size-sm="3" style={{ marginBottom: '20px' }}>
                <IonCard>
                  <Link to={`/movie/${movie.id}`}>
                    <div
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '300px',
                      }}
                    ></div>
                    <IonCardHeader>
                      <IonCardSubtitle style={{ fontSize: '14px', fontWeight: 'bold' }}>
                        {movie.genre}
                      </IonCardSubtitle>
                      <IonCardTitle style={{ fontSize: '18px', margin: '10px 0' }}>
                        {movie.title}
                      </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent style={{ textAlign: 'center' }}>
                      {/* Contenido adicional si es necesario */}
                    </IonCardContent>
                  </Link>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
