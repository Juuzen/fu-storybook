import { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonContent, IonIcon } from '@ionic/react'
import scss from './HomePage.module.scss'
import { sidebarRoutes } from '../../routes/routes'

const HomePage = () => {
  return (
    <IonContent>
      <div className={scss.homeBanner}>
        <h1>Storybook</h1>
        <h4>Un tool NON ufficiale per Fabula Ultima</h4>
      </div>

      <IonGrid>
        <IonRow>
          {sidebarRoutes.map((route, index) => (
            <IonCol
              key={'home-card-route-' + index}
              size='12'
              sizeSm='6'
              sizeMd='4'
              sizeLg='4'
              sizeXl='3'
            >
              <IonCard routerLink={route.url} disabled={route.disabled}>
                <IonCardContent>
                  <div className={scss.cardContent}>
                    <IonIcon icon={route.icon} />
                    <h1>{route.title}</h1>
                    <span>{route.subtitle}</span>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
  )
}

export default HomePage
