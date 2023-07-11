import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react'

const Header = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonMenuButton />
        </IonButtons>

        <IonTitle>HEADER</IonTitle>

        {/*<IonButtons slot='end'>
          <IonButton>
            <IonIcon ios='heart-outline' md='heart-sharp' />
          </IonButton>
        </IonButtons> */}
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
