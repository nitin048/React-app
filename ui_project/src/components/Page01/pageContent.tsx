
import LeftContent from './leftContent'
import RightContent from './rightContent'

const  pageContent = (props) => {
  return (
    <div className='pb-20 pt-6 flex gap-10 items-center py-10 px-18 h-[90vh]'>
      <LeftContent/>
      <RightContent users={props.users}/>


    </div>
  )
}

export default pageContent