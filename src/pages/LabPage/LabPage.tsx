import { IonBreadcrumb, IonBreadcrumbs, IonCol, IonContent, IonGrid, IonRow } from '@ionic/react'
import Clock from './Clock/Clock'

const LabPage = () => {
  return (
    <IonContent>
      <IonBreadcrumbs>
        <IonBreadcrumb routerLink='home'>Homepage</IonBreadcrumb>
        <IonBreadcrumb routerLink='projects' active>
          Progetti e Rituali
        </IonBreadcrumb>
      </IonBreadcrumbs>
      <h1>Progetti e Rituali</h1>

      <IonGrid>
        <IonRow>
          <IonCol size='6'>
            <Clock size={200} offset={0} stroke={70} />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  )
}

export default LabPage
