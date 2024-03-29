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

const cardStyle = css({
  backgroundColor: '#eeeeee',
  position: 'relative'
})

const imageStyle = css({
  maxWidth: '100%',
  maxHeight: '400px'
})

const nationImageStyle = css({
  maxWidth: '200px',
  maxHeight: '200px',
  position: 'absolute',
  top: '0px',
  zIndex: 1
})

const headerStyle = css({
  zIndex: 10
})

const VehicleCard: React.FunctionComponent<IVehicleCardProps> = ({
  shipLevel,
  icon,
  nationIcon
}) => {
  return (
    <div className={`rounded-3 ${cardStyle}`}>
      <img src={nationIcon} className={nationImageStyle}></img>
      <div className={`d-flex
                      flex-wrap
                      justify-content-between
                      align-items-center
                      p-3
                      ${headerStyle}`}>
        <h3 className='semi-bold'>Name</h3>
        <h3>{'Tier: ' + shipLevel}</h3>
      </div>
      <img src={icon} className={imageStyle}></img>
    </div>
  )
};

export default VehicleCard;
