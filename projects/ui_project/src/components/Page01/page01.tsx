import NavBar from './NavBar'
import PageContent from './PageContent'

const Page01 = (props) => {
  return (
    <div>
      <NavBar />
      <PageContent users={props.users} />
    </div>
  )
}

export default Page01
