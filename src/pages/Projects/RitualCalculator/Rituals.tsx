import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonGrid,
  IonItem,
  IonList,
  IonListHeader,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonTitle,
} from '@ionic/react'
import { CRitualAreaOptions, CRitualPotencyOptions } from '../../../consts/CRituals.const'
import { useState } from 'react'
import { IRitualArea, IRitualPotency } from '../../../models/IRituals.model'
import HorizontalDivider from '../../../components/HorizontalDivider/HorizontalDivider'

import scss from './RitualCalculator.module.scss'

const RitualCalculator = () => {
  const [ritualPotency, setRitualPotency] = useState<IRitualPotency>(CRitualPotencyOptions[0])
  const [ritualArea, setRitualArea] = useState<IRitualArea>(CRitualAreaOptions[0])

  return (
    <IonCard>
      <IonCardHeader className={`ion-no-padding ${scss.cardHeader}`}>
        <IonTitle>Rituali</IonTitle>
      </IonCardHeader>

      <IonCardContent class='ion-no-padding'>
        <IonGrid class='ion-no-padding'>
          <IonRow class='ion-padding'>
            <IonCol size='6'>
              <IonList lines='none'>
                <IonListHeader>Potenza</IonListHeader>
                <IonRadioGroup
                  value={ritualPotency.id}
                  onIonChange={(e) => {
                    const foundPotency = CRitualPotencyOptions.find(
                      (option) => option.id === e.detail.value,
                    )
                    if (foundPotency) {
                      setRitualPotency(foundPotency)
                    }
                  }}
                >
                  {CRitualPotencyOptions.map((option) => (
                    <IonItem key={'ritual-potency-option-' + option.id}>
                      <IonRadio
                        value={option.id}
                        color='success'
                        labelPlacement='end'
                        justify='start'
                      >
                        {option.label}
                      </IonRadio>
                    </IonItem>
                  ))}
                </IonRadioGroup>
              </IonList>
            </IonCol>

            <IonCol size='6'>
              <IonList lines='none'>
                <IonListHeader>Area</IonListHeader>
                <IonRadioGroup
                  value={ritualArea.id}
                  onIonChange={(e) => {
                    const foundArea = CRitualAreaOptions.find(
                      (option) => option.id === e.detail.value,
                    )
                    if (foundArea) {
                      setRitualArea(foundArea)
                    }
                  }}
                >
                  {CRitualAreaOptions.map((option) => (
                    <IonItem key={'ritual-area-option-' + option.id}>
                      <IonRadio
                        value={option.id}
                        color='success'
                        labelPlacement='end'
                        justify='start'
                      >
                        {option.label}
                      </IonRadio>
                    </IonItem>
                  ))}
                </IonRadioGroup>
              </IonList>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size='12'>
              <HorizontalDivider />

              <div className={scss.ritualResultContainer}>
                <span>{`Costo totale: ${ritualPotency.mpCost * ritualArea.mpMultiplier} MP`}</span>
                <span>{`Livello Difficoltà: ${ritualPotency.difficultyLevel}`}</span>
                <span>{`Dimensione Orologio (durante i conflitti): ${ritualPotency.clockSections} sezioni`}</span>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  )
}

export default RitualCalculator
