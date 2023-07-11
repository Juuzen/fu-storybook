import { IonContent, IonRouterOutlet } from '@ionic/react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import Content from './content/Content'

const Layout = () => {
  return (
    <>
      <Sidebar />

      <div id='main-content'>
        <Header />

        <Content />
      </div>
    </>
  )
}

export default Layout
