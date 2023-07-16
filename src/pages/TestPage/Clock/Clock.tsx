import { IonCard, IonCardContent, IonCardHeader, IonTitle } from '@ionic/react'
import { useState } from 'react'
import { IClockSectionData } from '../../../models/IClock.model'
import ClockSection from './ClockSection/ClockSection'

const Clock = () => {
  const [maxSections, setMaxSections] = useState<number>(7)
  const [filledSections, setFilledSections] = useState<number>(4)

  const clockSections = getClockSectionData()

  function getClockSectionData(): IClockSectionData[] {
    let prevStartAngle = 0
    let prevEndAngle = 0
    const offset = 24
    const sectionLength = (360 - offset * maxSections) / maxSections

    const sections: IClockSectionData[] = []

    for (let i = 1; i <= maxSections; i++) {
      //FIXME: l'offset deve essere uguale per ogni sezione, e deve essere simmetrico tra prima e ultima sezione
      prevStartAngle = prevEndAngle + offset - (i === 1 ? offset / 2 : 0)
      prevEndAngle = sectionLength * i + offset * i - offset + (i === maxSections ? offset / 2 : 0)

      const section: IClockSectionData = {
        isFilled: i <= filledSections,
        pathDescriptor: describeArc(100, 100, 70, prevStartAngle, prevEndAngle),
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
          <svg viewBox='0 0 200 200'>
            {clockSections.map((section, index) => (
              <ClockSection key={'clock-section-' + index} section={section} />
            ))}
          </svg>
        </div>
      </IonCardContent>
    </IonCard>
  )
}

export default Clock
