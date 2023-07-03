import IRoute from "../models/IRoute.model";
import { constructOutline, constructSharp, diamondOutline, diamondSharp, diceOutline, diceSharp, homeOutline, homeSharp, receiptOutline, receiptSharp, skullOutline, skullSharp } from 'ionicons/icons';

export const routes: IRoute[] = [
    {
        title: 'Home',
        url: '/home',
        iosIcon: homeOutline,
        mdIcon: homeSharp
      },
    {
      title: 'Progetti',
      url: '/projects',
      iosIcon: constructOutline,
      mdIcon: constructSharp
    },
    {
      title: 'Oggetti Rari',
      url: '/items',
      iosIcon: diamondOutline,
      mdIcon: diamondSharp
    },
    {
      title: 'Generazione NPCs',
      url: '/npcs',
      iosIcon: skullOutline,
      mdIcon: skullSharp
    },
    {
      title: 'Tracker combattimento',
      url: '/battle-tracker',
      iosIcon: receiptOutline,
      mdIcon: receiptSharp
    },
    {
      title: 'Utilità dadi', 
      url: '/dice-utils',
      iosIcon: diceOutline,
      mdIcon: diceSharp
    }
  ];