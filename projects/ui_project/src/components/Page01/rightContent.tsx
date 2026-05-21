import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full w-2/3 p-6 rounded-3xl gap-10 flex flex-nowrap overflow-x-auto"
    >
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            img={elem.img}
            tag={elem.tag}
            id={idx}
            color={elem.color}
          />
        )
      })}
    </div>
  )
}

export default RightContent
