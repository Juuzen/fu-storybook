import { IClockSectionData } from '../../../../models/IClock.model'
import scss from './ClockSection.module.scss'

interface IProps {
  section: IClockSectionData
}

const ClockSection = ({ section }: IProps) => {
  return (
    <path
      className={`${scss.clockSection} ${section.isFilled ? scss.filled : ''}`}
      d={section.pathDescriptor}
    />
  )
}

export default ClockSection
