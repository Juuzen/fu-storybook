import { IonBreadcrumb, IonBreadcrumbs, IonCol, IonContent, IonGrid, IonRow } from '@ionic/react'
import ProjectCalculator from './ProjectCalculator/ProjectCalculator'
import RitualCalculator from './RitualCalculator/RitualCalculator'

const ProjectsPage = () => {
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
            <ProjectCalculator />
          </IonCol>

          <IonCol size='6'>
            <RitualCalculator />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  )
}

export default ProjectsPage
