import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';

function Menu () {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu de PeliFlins</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonButton expand="full" routerLink="/about" routerDirection="forward">
            About
          </IonButton>
          <br/><br/>
          <IonButton expand="full" routerLink="/home" routerDirection="forward">
            Home
          </IonButton>
          <br/><br/><br/>
          Esta es la pestaña del Menú. Desde aquí puede ir al 'Home' o al 'About'
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.</IonContent>
      </IonPage>
    </>
  );
}

export default Menu;
