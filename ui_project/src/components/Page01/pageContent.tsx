import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
  return (
    <div className="pb-20 pt-6 flex gap-10 items-center py-10 px-18 h-[90vh]">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default PageContent
