import 'remixicon/fonts/remixicon.css';
import HeroText from './heroText';
import Arrow from './arrow';

const leftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 font-bold'>
       <HeroText/>
       <Arrow/>
        </div>
  )
}

export default leftContent