import IRoute from '../models/IRoute.model'
import { construct, diamond, dice, home, informationCircle, receipt, skull } from 'ionicons/icons'
import HomePage from '../pages/Home/HomePage'
import ProjectsPage from '../pages/Projects/ProjectsPage'
import AboutPage from '../pages/About/AboutPage'
import BattleTrackerPage from '../pages/BattleTracker/BattleTrackerPage'
import RareItemsPage from '../pages/RareItems/RareItemsPage'
import NPCPage from '../pages/NPC/NPCPage'
import DiceUtilsPage from '../pages/DiceUtils/DiceUtilsPage'

export const sidebarRoutes: IRoute[] = [
  {
    title: 'Home',
    url: '/home',
    icon: home,
    component: HomePage,
  },
  {
    title: 'Progetti',
    url: '/projects',
    icon: construct,
    component: ProjectsPage,
  },
  {
    title: 'Oggetti Rari',
    url: '/items',
    icon: diamond,
    component: RareItemsPage,
  },
  {
    title: 'Generazione NPCs',
    url: '/npcs',
    icon: skull,
    component: NPCPage,
  },
  {
    title: 'Tracker combattimento',
    url: '/battle-tracker',
    icon: receipt,
    component: BattleTrackerPage,
  },
  {
    title: 'Utilità dadi',
    url: '/dice-utils',
    icon: dice,
    component: DiceUtilsPage,
  },
]

export const footerRoutes: IRoute[] = [
  {
    title: 'About',
    url: '/about',
    icon: informationCircle,
    component: AboutPage,
  },
]
