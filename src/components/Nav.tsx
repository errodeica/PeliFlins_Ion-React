import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import myCustomIcon from '../assets/Logoapp.svg';


const Nav: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        {/* ...otros elementos del encabezado... */}
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonIcon slot="start" src={myCustomIcon} style={{ width: '40px', height: '40px' }} />
        <IonTitle style={{ fontSize: '28px' }}>PeliFlins</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Nav;
