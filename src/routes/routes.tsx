import IRoute from '../models/IRoute.model'
import { construct, diamond, dice, home, informationCircle, receipt, skull } from 'ionicons/icons'
import HomePage from '../pages/Home/HomePage'
import ProjectsPage from '../pages/Projects/ProjectsPage'
import AboutPage from '../pages/About/AboutPage'
import BattleTrackerPage from '../pages/BattleTracker/BattleTrackerPage'
import RareItemsPage from '../pages/RareItems/RareItemsPage'
import NPCPage from '../pages/NPC/NPCPage'
import DiceUtilsPage from '../pages/DiceUtils/DiceUtilsPage'

export const homeRoute: IRoute = {
  title: 'Home', //TODO: aggiungere localizzazione
  subtitle: '', //TODO: aggiungere localizzazione
  url: '/home',
  icon: home,
  component: HomePage,
}

export const sidebarRoutes: IRoute[] = [
  {
    title: 'Progetti e Rituali', //TODO: aggiungere localizzazione
    subtitle: 'Calcola subito i costi e i tempi di realizzazione di un progetto o di un rituale.', //TODO: aggiungere localizzazione
    url: '/projects',
    icon: construct,
    component: ProjectsPage,
  },
  {
    title: 'Oggetti Rari', //TODO: aggiungere localizzazione
    subtitle: 'Genera al volo oggetti rari e leggendari.', //TODO: aggiungere localizzazione
    url: '/items',
    icon: diamond,
    component: RareItemsPage,
    disabled: true,
  },
  {
    title: 'Generazione NPCs', //TODO: aggiungere localizzazione
    subtitle: 'Genera al volo un nuovo personaggio non giocante (alleato o nemico).', //TODO: aggiungere localizzazione
    url: '/npcs',
    icon: skull,
    component: NPCPage,
    disabled: true,
  },
  {
    title: 'Tracker combattimento', //TODO: aggiungere localizzazione
    subtitle: 'Tieni traccia di tutti i partecipanti al combattimento e delle loro iniziative.', //TODO: aggiungere localizzazione
    url: '/battle-tracker',
    icon: receipt,
    component: BattleTrackerPage,
    disabled: true,
  },
  {
    title: 'Utilità dadi', //TODO: aggiungere localizzazione
    subtitle: 'Vari tool utili per i Tiri.', //TODO: aggiungere localizzazione
    url: '/dice-utils',
    icon: dice,
    component: DiceUtilsPage,
    disabled: true,
  },
]

export const footerRoutes: IRoute[] = [
  {
    title: 'About', //TODO: aggiungere localizzazione
    subtitle: 'Informazioni su questo progetto.', //TODO: aggiungere localizzazione
    url: '/about',
    icon: informationCircle,
    component: AboutPage,
  },
]
