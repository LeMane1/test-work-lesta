import * as React from 'react';
import { css } from '@emotion/css'

interface IVehicleCardProps {
  shipLevel: number;
  icon: string;
  nationColor: string;
  nationName: string;
  nationIcon: string;
  type: string;
  typeIcon: string;
  className?: string;
}

const cardStyle = css`
  background-color: #fbfbfb;
  transition: all 0.3s ease-out;
  &:hover {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  }
`

const imageStyle = css({
  maxWidth: '100%',
  maxHeight: '500px',
  position: 'relative'
})

const nationImageStyle = css({
  maxWidth: '200px',
  maxHeight: '200px',
  position: 'absolute',
  top: '4px',
  left: '10px'
})

const parametersStyle = css({
  borderBottom: '1px solid #dedede'
})

const VehicleCard: React.FunctionComponent<IVehicleCardProps> = ({
  shipLevel,
  icon,
  nationIcon,
  nationName,
  type
}) => {
  return (
    <div className={`item rounded-3 pb-4 ${cardStyle}`}>
      <div className='position-relative pt-2'>
        <img src={nationIcon} className={nationImageStyle}></img>
        <img src={icon} className={imageStyle}></img>
      </div>

      <div className={`
                      p-3
                    `}>
        <h4 className='semi-bold'>Name</h4>
        <h6>{'Tier: ' + shipLevel}</h6>
      </div>

      <div className={`d-flex
                      flex-wrap
                      justify-content-between
                      align-items-center
                      pb-1
                      mb-2
                      ms-3
                      me-3
                      ${parametersStyle}`}>
        <h6 className='semi-bold'>Nation</h6>
        <h6>{nationName.toUpperCase()}</h6>
      </div>

      <div className={`d-flex
                      flex-wrap
                      justify-content-between
                      align-items-center
                      pb-1
                      mb-2
                      ms-3
                      me-3
                      ${parametersStyle}`}>
        <h6 className='semi-bold'>Class</h6>
        <h6>{type.toUpperCase()}</h6>
      </div>
    </div>
  )
};

export default VehicleCard;