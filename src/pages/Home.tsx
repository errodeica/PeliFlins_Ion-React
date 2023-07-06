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
import './Home.css';


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
              <IonCol key={movie.id} size="12" size-sm="4" size-md="3" style={{ marginBottom: '20px' }}>
                <IonCard>
                  <Link to={`/movie/${movie.id}`} className="link-no-underline">
                    <div
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '300px',
                      }}
                    ></div>
                    <IonCardHeader className="titcen">
                      <IonCardTitle style={{ fontSize: '18px' }}>
                        {movie.title}
                      </IonCardTitle>
                    </IonCardHeader>
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
