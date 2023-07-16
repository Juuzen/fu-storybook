import { IonBreadcrumb, IonBreadcrumbs, IonCol, IonContent, IonGrid, IonRow } from '@ionic/react'
import Clock from './Clock/Clock'

const TestPage = () => {
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
            <Clock />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  )
}

export default TestPage
