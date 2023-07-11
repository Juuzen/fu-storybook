import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react'

const ProjectsPage = () => {
  return (
    <div>
      <IonBreadcrumbs>
        <IonBreadcrumb routerLink='home'>Homepage</IonBreadcrumb>
        <IonBreadcrumb routerLink='projects' active>
          Progetti
        </IonBreadcrumb>
      </IonBreadcrumbs>
      <h1>Projects</h1>
    </div>
  )
}

export default ProjectsPage
