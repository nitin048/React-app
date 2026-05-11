
const rightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between ">
        <h2 className='bg-white rounded-full h-12 w-12 font-semiboldbold text-2xl flex justify-center items-center'>{props.id}</h2>
        <div>
          <p className='text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam alias, dicta aspernatur rem impedit expedita dignissimos dolore culpa</p>
          <div className='flex justify-between'>
          <button style={{background:props.color}} className=' text-shadow-2xs text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
          <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button></div>
        </div>
      </div>
  )
}

export default rightCardContent