import { Menu } from './menu.model';

export const verticalMenuItems = [ 
    new Menu (1, 'M_ACCUEIL','Accueil', '/pages/dashboard', null, 'tachometer', null, false, 0),
]

export const horizontalMenuItems = [ 
    new Menu (10, 'M_ACCUEIL','Accueil', '/pages/dashboard', null, 'home', null, false, 0),
    new Menu (1000, 'M_','Rondiers', null, null, 'file-text-o', null, true, 0),
    new Menu (1100, 'M_PLANNING','Planning', '/pages/planning', null, 'file-o', null, false, 1000),
    new Menu (2, 'M_P1', 'P1','/pages/p1', null, 'tachometer', null, false, 0),
    new Menu (40, 'M_MAIN','Main courante', null, null, 'file-text-o', null, true, 0),
    new Menu (43, 'M_CONNEXION','Page connexion', '/login', null, 'sign-in', null, false, 0),    
    new Menu (45, 'M_BLANK','Page 1', '/pages/blank', null, 'file-o', null, false, 40),
    new Menu (47, 'M_BLANK','Page 2', '/pages/blank', null, 'file-o', null, false, 40),
    new Menu (48, 'M_BLANK','Sous menu', null, null, 'file-o', null, true, 40),
    new Menu (49, 'M_BLANK','Sous menu1', '/pages/blank', null, 'file-o', null, false, 48),
    new Menu (50, 'M_BLANK','Sous menu2', '/pages/blank', null, 'file-o', null, false, 48),
    new Menu (200, 'M_BLANK','Lien externe', null, 'http://o-happyday.com', 'external-link', '_blank', false, 0)
]