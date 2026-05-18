import React from 'react'
import { useParams } from 'react-router-dom'
import ReturnHome from '../../Components/ReturnHome'

const CourseDetail = () => {
    const param = useParams()
    console.log(param.Course_id)
  return (
    <div>
        <ReturnHome/>
      <h1>{param.Course_id} CourseDetail</h1>
    </div>
  )
}

export default CourseDetail
