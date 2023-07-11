import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { heart } from 'ionicons/icons'

const Header = () => {
  return (
    <IonHeader>
      <IonToolbar color='primary'>
        <IonButtons slot='start'>
          <IonMenuButton />
        </IonButtons>

        <IonTitle>Storybook</IonTitle>

        <IonButtons slot='end'>
          <IonButton>
            <IonIcon icon={heart} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
