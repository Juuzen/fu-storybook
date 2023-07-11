import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react'

const ProjectsPage = () => {
  return (
    <div>
      <IonBreadcrumbs>
        <IonBreadcrumb routerLink='home'>Homepage</IonBreadcrumb>
        <IonBreadcrumb routerLink='projects' active>
          Progetti e Rituali
        </IonBreadcrumb>
      </IonBreadcrumbs>
      <h1>Progetti e Rituali</h1>
    </div>
  )
}

export default ProjectsPage
