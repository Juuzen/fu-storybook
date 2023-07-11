import {
  IonBreadcrumbs,
  IonBreadcrumb,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
} from '@ionic/react'
import scss from './HomePage.module.scss'
import { construct, diamond, dice, receipt, skull } from 'ionicons/icons'

const HomePage = () => {
  return (
    <IonContent>
      <div className={scss.homeBanner}>
        <h1>Storybook</h1>
        <h4>Un tool NON ufficiale per Fabula Ultima</h4>
      </div>

      <IonGrid>
        <IonRow>
          <IonCol size='12' sizeSm='6' sizeMd='4' sizeLg='4' sizeXl='3'>
            <IonCard routerLink='/projects'>
              <IonCardContent>
                <div className={scss.cardContent}>
                  <IonIcon icon={construct} />
                  <h1>Progetti</h1>
                  <span>Ottieni al volo tutte le informazioni per un nuovo progetto.</span>
                </div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size='12' sizeSm='6' sizeMd='4' sizeLg='4' sizeXl='3'>
            <IonCard color='warning'>
              <IonCardContent>
                <div className={scss.cardContent}>
                  <IonIcon icon={diamond} />
                  <h1>Oggetti rari</h1>
                  <span>Crea un oggetto raro, specificandone tutte le caratteristiche.</span>
                </div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size='12' sizeSm='6' sizeMd='4' sizeLg='4' sizeXl='3'>
            <IonCard color='warning'>
              <IonCardContent>
                <div className={scss.cardContent}>
                  <IonIcon icon={skull} />
                  <h1>Generazione NPC</h1>
                  <span>
                    Crea un NPC (alleato o nemico), specificandone tutte le caratteristiche.
                  </span>
                </div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size='12' sizeSm='6' sizeMd='4' sizeLg='4' sizeXl='3'>
            <IonCard color='warning'>
              <IonCardContent>
                <div className={scss.cardContent}>
                  <IonIcon icon={receipt} />
                  <h1>Tracker Combattimento</h1>
                  <span>Tieni traccia dell'ordine di azione in un combattimento, e altro!</span>
                </div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size='12' sizeSm='6' sizeMd='4' sizeLg='4' sizeXl='3'>
            <IonCard color='warning'>
              <IonCardContent>
                <div className={scss.cardContent}>
                  <IonIcon icon={dice} />
                  <h1>Utilità Dadi</h1>
                  <span>Diverse utilità riguardanti i Tiri di dado.</span>
                </div>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  )
}

export default HomePage
