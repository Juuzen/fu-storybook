import { IonCard, IonCardContent, IonCardHeader, IonInput, IonTitle } from '@ionic/react'
import { useState } from 'react'
import { IClockSectionData } from '../../../models/clock.model'
import ClockSection from './ClockSection/ClockSection'

interface IProps {
  size: number
  offset: number
  stroke: number
}

const Clock = ({ size, offset, stroke }: IProps) => {
  const [clockName, setClockName] = useState<string>('')
  const [maxSections, setMaxSections] = useState<number>(6)
  const [filledSections, setFilledSections] = useState<number>(2)

  const clockSections = getClockSectionData()

  function getClockSectionData(): IClockSectionData[] {
    let prevStartAngle = 0
    let prevEndAngle = 0
    const sectionLength = (360 - offset * maxSections) / maxSections

    const sections: IClockSectionData[] = []

    for (let i = 1; i <= maxSections; i++) {
      prevStartAngle = prevEndAngle + (i === 1 ? offset / 2 : offset)
      prevEndAngle = sectionLength * i + offset * i - offset / 2

      const section: IClockSectionData = {
        isFilled: i <= filledSections,
        pathDescriptor: describeArc(size / 2, size / 2, stroke, prevStartAngle, prevEndAngle),
      }

      sections.push(section)
    }

    return sections
  }

  /**
   * Specify the cartesian coordinates so we can use the elliptical arc command
   * @param {Number} centerX X Polar coordinate
   * @param {Number} centerY Y Polar coordinate
   * @param {Number} radius Radius of the circle
   * @param {Number} angleInDegrees Angle from 0 to 360
   */
  function polarToCartesian(
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number,
  ) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    }
  }

  /**
   * Creates the value of the d attribute of an svg path to draw the segment
   * @param {Number} x X coordinate of the center of the circle
   * @param {Number} y Y coordinate of the center of the circle
   * @param {Number} startAngle In degrees from 0 to 360, starting point of the arc
   * @param {Number} endAngle In degrees from 0 to 360, end point of the arc
   */
  function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
    let start = polarToCartesian(x, y, radius, endAngle),
      end = polarToCartesian(x, y, radius, startAngle),
      arcSweep = endAngle - startAngle <= 180 ? '0' : '1',
      d = ['M', start.x, start.y, 'A', radius, radius, 0, arcSweep, 0, end.x, end.y].join(' ')

    return d
  }

  return (
    <IonCard>
      <IonCardHeader>
        <IonTitle>Orologio</IonTitle>
      </IonCardHeader>

      <IonCardContent>
        <div className='clock-container'>
          <svg viewBox={`0 0 ${size} ${size}`}>
            {clockSections.map((section, index) => (
              <ClockSection key={'clock-section-' + index} section={section} />
            ))}
          </svg>

          <IonInput
            color='success'
            value={clockName}
            onIonInput={(e) => setClockName(e.detail.value ?? '')}
            placeholder='Nome Orologio'
          />
        </div>
      </IonCardContent>
    </IonCard>
  )
}

export default Clock
