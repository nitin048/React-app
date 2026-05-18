import { useNavigate } from 'react-router-dom'

const ReturnHome = () => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-between">
      <div>
        <button
          className="bg-amber-500 cursor-pointer active:scale-95 py-2 px-2 rounded-xl my-2 mx-1 text-white"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button
          className="bg-amber-500 cursor-pointer active:scale-95 py-2 px-2 rounded-xl my-2 mx-1 text-white"
          onClick={() => navigate(+1)}
        >
          Next
        </button>
      </div>
      <button
        className="bg-amber-500 cursor-pointer active:scale-95 py-2 px-2 rounded-xl my-2 mx-1 text-white"
        onClick={() => navigate('/')}
      >
        Return Home
      </button>
    </div>
  )
}

export default ReturnHome
