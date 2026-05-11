
import NavBar from './navBar'
import PageContent from './pageContent'

const page01 = (props) => {
  return (
    <div>
    <NavBar/>
    <PageContent users={props.users}/>
    </div>
  )
}

export default page01