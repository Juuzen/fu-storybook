import { Redirect, Route } from 'react-router-dom'
import { footerRoutes, sidebarRoutes } from '../../routes/routes'
import { IonContent } from '@ionic/react'
import scss from './Content.module.scss'

const Content = () => {
  return (
    <IonContent className={`${scss.appContent} ion-padding`}>
      {[...sidebarRoutes, ...footerRoutes].map((route, index) => (
        <Route key={'route-' + index} path={route.url} exact component={route.component} />
      ))}
      <Route>
        <Redirect to='/home' />
      </Route>
    </IonContent>
  )
}

export default Content
