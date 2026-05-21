import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className="h-full w-80 overflow-hidden relative rounded-4xl bg-red-200 shrink-0">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent tag={props.tag} id={props.id + 1} color={props.color} />
    </div>
  )
}

export default RightCard
