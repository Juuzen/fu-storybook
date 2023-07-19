import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCheckbox,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonList,
  IonListHeader,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonTitle,
} from '@ionic/react'
import { useState } from 'react'
import { IProjectArea, IProjectPotency, IProjectUseType } from '../../../models/projects.model'
import {
  CProjectAreaOptions,
  CProjectPotencyOptions,
  CProjectUseTypeOptions,
} from '../../../consts/projects.const'
import HorizontalDivider from '../../../components/HorizontalDivider/HorizontalDivider'

import scss from './ProjectCalculator.module.scss'

const ProjectCalculator = () => {
  const [projectPotency, setProjectPotency] = useState<IProjectPotency>(CProjectPotencyOptions[0])
  const [projectArea, setProjectArea] = useState<IProjectArea>(CProjectAreaOptions[0])
  const [projectUseType, setProjectUseType] = useState<IProjectUseType>(CProjectUseTypeOptions[0])

  const [workingCharacters, setWorkingCharacters] = useState<number>(0)
  const [workingTinkerers, setWorkingTinkerers] = useState<number>(0)
  const [workingHelpers, setWorkingHelpers] = useState<number>(0)

  const [terribleFlaw, setTerribleFlaw] = useState<boolean>(false)

  const projectTotalCost =
    projectPotency.zenithCost *
    projectArea.zenithCostMultiplier *
    projectUseType.zenithCostMultiplier *
    (terribleFlaw ? 0.75 : 1)

  const helperTotalCost = (projectTotalCost / 2) * workingHelpers

  const totalCost = projectTotalCost + helperTotalCost

  const progress = Math.ceil(projectTotalCost / 100)

  const requiredDays = Math.ceil(progress / (workingCharacters + workingTinkerers + workingHelpers))

  return (
    <IonCard>
      <IonCardHeader className={`ion-no-padding ion-padding-top`}>
        <IonTitle>Progetti</IonTitle>
      </IonCardHeader>

      <IonCardContent class='ion-no-padding'>
        <IonGrid class='ion-no-padding'>
          <IonRow class='ion-padding'>
            <IonCol size='4'>
              <IonList lines='none'>
                <IonListHeader>Potenza</IonListHeader>
                <IonRadioGroup
                  value={projectPotency.id}
                  onIonChange={(e) => {
                    const foundPotency = CProjectPotencyOptions.find(
                      (option) => option.id === e.detail.value,
                    )
                    if (foundPotency) {
                      setProjectPotency(foundPotency)
                    }
                  }}
                >
                  {CProjectPotencyOptions.map((option) => (
                    <IonItem key={'project-potency-option-' + option.id}>
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

            <IonCol size='4'>
              <IonList lines='none'>
                <IonListHeader>Area</IonListHeader>

                <IonRadioGroup
                  value={projectArea.id}
                  onIonChange={(e) => {
                    const foundArea = CProjectAreaOptions.find(
                      (option) => option.id === e.detail.value,
                    )
                    if (foundArea) {
                      setProjectArea(foundArea)
                    }
                  }}
                >
                  {CProjectAreaOptions.map((option) => (
                    <IonItem key={'project-area-option-' + option.id}>
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

            <IonCol size='4'>
              <IonList lines='none'>
                <IonListHeader>Utilizzo</IonListHeader>

                <IonRadioGroup
                  value={projectUseType.id}
                  onIonChange={(e) => {
                    const foundUseType = CProjectUseTypeOptions.find(
                      (option) => option.id === e.detail.value,
                    )
                    if (foundUseType) {
                      setProjectUseType(foundUseType)
                    }
                  }}
                >
                  {CProjectUseTypeOptions.map((option) => (
                    <IonItem key={'project-use-type-option-' + option.id}>
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
            <IonCol size='3' className='ion-padding'>
              <IonInput
                type='number'
                inputMode='numeric'
                color='success'
                fill='outline'
                label='Personaggi al lavoro'
                labelPlacement='floating'
                value={workingCharacters}
                min={0}
                onIonInput={(e) => {
                  setWorkingCharacters(Number(e.detail.value))
                }}
              />
            </IonCol>

            <IonCol size='3' className='ion-padding'>
              <IonInput
                type='number'
                inputMode='numeric'
                color='success'
                fill='outline'
                label='Artefici al lavoro'
                labelPlacement='floating'
                value={workingTinkerers}
                min={0}
                onIonInput={(e) => {
                  setWorkingTinkerers(Number(e.detail.value))
                }}
              />
            </IonCol>

            <IonCol size='3' className='ion-padding'>
              <IonInput
                type='number'
                inputMode='numeric'
                color='success'
                fill='outline'
                label='Aiutanti al lavoro'
                labelPlacement='floating'
                value={workingHelpers}
                min={0}
                onIonInput={(e) => {
                  setWorkingHelpers(Number(e.detail.value))
                }}
              />
            </IonCol>

            <IonCol size='3' className='ion-padding'>
              <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                <IonCheckbox
                  checked={terribleFlaw}
                  onIonChange={() => setTerribleFlaw((prevState) => !prevState)}
                  labelPlacement='end'
                  color='success'
                >
                  Terribile difetto
                </IonCheckbox>
              </div>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size='12'>
              <HorizontalDivider />

              <div className={scss.projectResultContainer}>
                <span>{`Costo totale: ${totalCost} Zenith${
                  helperTotalCost !== 0
                    ? ` (${projectTotalCost} Zenith di progetto + ${helperTotalCost} Zenith per gli aiutanti)`
                    : ''
                }`}</span>

                <span>{`Progresso richiesto: ${progress}`}</span>
                <span>{`Giorni richiesti: ${requiredDays === Infinity ? '∞' : requiredDays}`}</span>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  )
}

export default ProjectCalculator
