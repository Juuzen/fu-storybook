import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonGrid,
  IonItem,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonTitle,
} from '@ionic/react'
import { useEffect, useState } from 'react'

const ProjectCalculator = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonTitle>Progetti</IonTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol size='6'></IonCol>

            <IonCol size='6'></IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  )
}

export default ProjectCalculator
