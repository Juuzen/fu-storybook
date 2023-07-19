import {
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { footerRoutes, homeRoute, sidebarRoutes } from '../../routes/routes'
import { close } from 'ionicons/icons'

const Sidebar = () => {
  return (
    <IonMenu contentId='main-content' type='overlay'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton>
              <IonIcon icon={close} />
            </IonMenuButton>
          </IonButtons>

          <IonTitle>Sidebar</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList className='ion-no-padding' lines='none'>
          {[homeRoute, ...sidebarRoutes].map((route, index) => (
            <IonMenuToggle key={'route-' + index} autoHide={false}>
              <IonItem button routerLink={route.url} disabled={route.disabled}>
                <IonIcon slot='start' icon={route.icon} />
                <IonLabel>{route.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>

      {footerRoutes.length > 0 && (
        <IonFooter>
          <IonList className='ion-no-padding' lines='none'>
            {footerRoutes.map((route, index) => (
              <IonMenuToggle key={'route-' + index} autoHide={false}>
                <IonItem button routerLink={route.url}>
                  <IonIcon slot='start' icon={route.icon} />
                  <IonLabel>{route.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            ))}
          </IonList>
        </IonFooter>
      )}
    </IonMenu>
  )
}

export default Sidebar
