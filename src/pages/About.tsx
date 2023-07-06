import React from 'react';
import { IonContent, IonPage, IonButton, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Nav from '../components/Nav';

const About: React.FC = () => {
  const history = useHistory();

  const handleGoHome = () => {
    history.push('/home');
  };

  return (
    <IonPage>
      <Nav />
      <IonContent className="ion-padding">
        <IonText>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Sobre PeliFlins</h1>
          <p style={{ textIndent: '1em' }}>
            La aplicación es un ejemplo de una app basada en Ionic y React que muestra una lista de películas en la
            página de inicio. Cada película se presenta en forma de tarjeta con su imagen de carátula, género y título.
            Al hacer clic en una tarjeta, se navega a una página individual de la película donde se muestra más
            información, como el título, la sinopsis y otros detalles.
          </p>
          <p style={{ textIndent: '1em' }}>
            La aplicación también incluye una página "About" que proporciona información general sobre la aplicación. El
            menú de la aplicación se encuentra en la parte izquierda de la pantalla y ofrece opciones para acceder a la
            página de inicio (Home) y a la página "About".
          </p>
          <p style={{ textIndent: '1em' }}>
            El diseño de la aplicación es responsivo, lo que significa que se adapta a diferentes tamaños de pantalla,
            permitiendo una experiencia de usuario óptima tanto en dispositivos móviles como en pantallas de escritorio.
          </p>
          <p style={{ textIndent: '1em' }}>
            La aplicación utiliza componentes proporcionados por Ionic para lograr una apariencia y sensación nativa en
            múltiples plataformas. También hace uso de React Router para la navegación entre páginas.
          </p>
          <p style={{ textIndent: '1em' }}>
            Este es solo un ejemplo básico de una aplicación, y se puede personalizar y ampliar según las necesidades y
            requisitos específicos del proyecto.
          </p>
        </IonText>
        <IonButton expand="full" onClick={handleGoHome} style={{ marginTop: '20px' }}>
          Volver al Home
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default About;
