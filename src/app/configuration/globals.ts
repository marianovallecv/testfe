import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { environment as e } from '../../environments/environment';
import { GlobalIcons as gi, GlobalTheme as gtc, GlobalStyles as gsc
  , GlobalBackGroundColor as gbc, GlobalBackGroundColorButton as gbbc, GlobalTextColor as gtxc
  , GlobalTableColor as gttc
  , GlobalMargin as gm} from './bootstrap-config';
import { Configiguration } from '../model/configuration/configuration';

/**
 * Separador de rutas.
 */
export const SEP = '/';

/**
 *
 */
const LocalFunctions = Object.freeze({
  /**
   *
   */
  valueName(): any {
    let Value = '';
    switch (e.production) {
      case true:
        Value = 'Producción';
        break;
      case false:
        Value = 'Desarrollo';
        break;
    }
    return Value;
  },

  /**
   *
   * @returns Retorna la configuración desde el environment.
   */
  returnConfigEnvironment(): any{
    return {
    production: e.production,
    name: e.name,
    title: e.title,
    apiURL: e.apiURL,
    size: e.Size,
    valueName: LocalFunctions.valueName(),
    tipeConfig: 'environment',
    message: 'Configuration loaded successfully'
    };
  },

  /**
   *
   * timezone: 'UTC - 03:00',
   * local
   * 'http://localhost:8080' | 'http://127.0.0.1:8080',
   * ruta dev
   * env['apiURL'], //'https://apidev.ues21.edu.ar/aulero-backend',
   * ruta pre
   * 'https://apipre.ues21.edu.ar/aulero-backend',
   * prod --se complementa con archivo proxy de ser necesario para sortear CORS
   * '/services/api' -> aulero-frontend-new\proxy.conf.json
   * @returns Retorna la configuración.
   */
  returnConfig(): any{
    let configuration!: Configiguration;

    switch (e.production) {
      case true:
        configuration = {
          general: {
            production: true,
            name: 'Production',
            title: 'Project',
            apiURL: 'http://127.0.0.1:8020',
            value: '',
            valueName: LocalFunctions.valueName(),
            tipeConfig: 'manual',
            message: 'Configuration loaded successfully',
            pageSize: LocalVariables.PAGE_SIZE
          }
        };
        break;
      case false:
        configuration = {
          general: {
            production: false,
            name: 'Development',
            title: 'Project Test',
            apiURL: 'http://127.0.0.1:8020',
            value: '',
            valueName: LocalFunctions.valueName(),
            tipeConfig: 'manual',
            message: 'Configuration loaded successfully',
            pageSize: LocalVariables.PAGE_SIZE
          }
        };
        break;
      default: {
        configuration = {
          general: {
            name: 'Empty',
            production: false,
            title: '',
            apiURL: '',
            value: '',
            valueName: '',
            tipeConfig: 'error',
            message: 'Configuration not loaded',
            pageSize: LocalVariables.PAGE_SIZE
          }
        };
      }
    }
    return configuration;
  },

  /**
   * Total margin between controls
   *
   * ml/mr/mb/mt
   *
   * mgcg
   */
  modeMGCG(): string{
    return gm.MARGIN_GLOBAL_CONTROL.M1;
  },

  /**
   * Bottom margin between controls
   *
   * mb
   *
   * mgbg
   */
  modeMGCB(): string{
    return gm.MARGIN_BOTTON_GLOBAL_CONTROL.MB2;
  },

});

/**
 * Funciones accesibles.
 */
export const GlobalFunctions = Object.freeze({

  /**
   * Error handling
   */
  // handleError(error: any): Observable<never>{
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = `Message: ${error.error.message}`;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
  //   }
  //   window.alert(errorMessage);
  //   return throwError(errorMessage);
  // },

  /**
   * Background form.
   */
  modeBGCT(mode: number): string{
    switch (mode) {
      case GlobalVariables.MODE.MODE_ABM: {
        return  gbc.BACKGROUND_COLOR.SECONDARY;
      }
      case GlobalVariables.MODE.MODE_SEARCH: {
        return gbc.BACKGROUND_COLOR.INFO;
      }
      case GlobalVariables.MODE.MODE_ABM_SEARCH: {
        return gbc.BACKGROUND_COLOR.PRIMARY;
      }
      case GlobalVariables.MODE.MODE_ABM_DATA: {
        return '';
      }
      case GlobalVariables.MODE.MODE_NONE: {
        return  gbc.BACKGROUND_COLOR.DANGER;
      }
      case GlobalVariables.MODE.MODE_ABM_GENERIC: {
        return gbc.BACKGROUND_COLOR.SUCCESS;
      }
      default: {
        return '';
      }
    }
  },
  /**
   * Text color title.
   */
  modeTXCT(mode: number): string{
    switch (mode) {
      case GlobalVariables.MODE.MODE_ABM: {
        return gtxc.TEXT_COLOR.DARK; // BACKGROUND_COLOR.SECONDARY
      }
      case GlobalVariables.MODE.MODE_SEARCH: {
        return gtxc.TEXT_COLOR.DARK; // BACKGROUND_COLOR.INFO
      }
      case GlobalVariables.MODE.MODE_ABM_SEARCH: {
        return gtxc.TEXT_COLOR.DARK; // BACKGROUND_COLOR.PRIMARY
      }
      case GlobalVariables.MODE.MODE_ABM_DATA: {
        return '';
      }
      case GlobalVariables.MODE.MODE_NONE: {
        return gtxc.TEXT_COLOR.DARK; // BACKGROUND_COLOR.DANGER
      }
      case GlobalVariables.MODE.MODE_ABM_GENERIC: {
        return gtxc.TEXT_COLOR.DARK; // BACKGROUND_COLOR.SUCCESS
      }
      default: {
        return '';
      }
    }
  },
  /**
   * Background ABM.
   */
  modeABMBG(modeABM: number): string{
    switch (modeABM) {
      case GlobalVariables.MODE_ABM.MODE_ABM_LIST: {
        return gbc.BACKGROUND_COLOR.INFO;
      }
      case GlobalVariables.MODE_ABM.MODE_ABM_DETAIL: {
        return gbc.BACKGROUND_COLOR.PRIMARY;
      }
      case GlobalVariables.MODE_ABM.MODE_ABM_CREATE: {
        return gbc.BACKGROUND_COLOR.SUCCESS;
      }
      case GlobalVariables.MODE_ABM.MODE_ABM_UPDATE: {
        return gbc.BACKGROUND_COLOR.WARNING;
      }
      case GlobalVariables.MODE_ABM.MODE_ABM_DUPLICATE: {
        return gbc.BACKGROUND_COLOR.SECONDARY;
      }
      case GlobalVariables.MODE_ABM.MODE_ABM_DELETE: {
        return gbc.BACKGROUND_COLOR.DANGER;
      }
      case GlobalVariables.MODE_ABM.MODE_NONE: {
        return gbc.BACKGROUND_COLOR.DANGER;
      }
      case GlobalVariables.MODE_ABM.MODE_ABM_GENERIC: {
        return gbc.BACKGROUND_COLOR.DARK;
      }
      default: {
        return '';
      }
    }
  },
  /**
   * Text color ABM.
   */
  modeABMTT(modeABM: number): string{
    switch (modeABM) {
      case GlobalVariables.MODE_ABM.MODE_ABM_LIST: {
        return gtxc.TEXT_COLOR.DARK; // BACKGROUND_COLOR.INFO

      }
      case GlobalVariables.MODE_ABM.MODE_ABM_DETAIL: {
        return gtxc.TEXT_COLOR.DARK; // BACKGROUND_COLOR.PRIMARY
      }
      case GlobalVariables.MODE_ABM.MODE_ABM_CREATE: {
        return gtxc.TEXT_COLOR.DARK; // BACKGROUND_COLOR.SUCCESS
      }
      case GlobalVariables.MODE_ABM.MODE_ABM_UPDATE: {
        return gtxc.TEXT_COLOR.DARK; // BACKGROUND_COLOR.WARNING
      }
      case GlobalVariables.MODE_ABM.MODE_ABM_DUPLICATE: {
        return gtxc.TEXT_COLOR.DARK; // BACKGROUND_COLOR.SECONDARY
      }
      case GlobalVariables.MODE_ABM.MODE_ABM_DELETE: {
        return gtxc.TEXT_COLOR.DARK; // BACKGROUND_COLOR.DANGER
      }
      case GlobalVariables.MODE_ABM.MODE_NONE: {
        return gtxc.TEXT_COLOR.DARK; // BACKGROUND_COLOR.DANGER
      }
      case GlobalVariables.MODE_ABM.MODE_ABM_GENERIC: {
        return gtxc.TEXT_COLOR.SUCCESS; // BACKGROUND_COLOR.DARK
      }
      default: {
        return '';
      }
    }
  },

});

/**
 * Variables accesibles localmente.
 */
const LocalVariables = Object.freeze({
    GLOBAL_THEME: gtc.COLOR.CONTRAST,
    PAGE_SIZE: 7,


  });

/**
 * Variables accesibles.
 */
export const GlobalVariables = Object.freeze({
  // --------------------------------------------- config -----------------------------------------------
  /**
   * Cofiguración general
   */
  CONFIGURATION: LocalFunctions.returnConfig(),

  //PAGE_SIZE: LocalVariables.PAGE_SIZE,

  BG_COLOR: gbc.BACKGROUND_COLOR,


  // --------------------------------------------- config -----------------------------------------------

  /**
   * Http Options
   */
  httpOptions: {
    headers: new HttpHeaders({
      'Content-Type':
      'application/x-www-form-urlencoded application/json',
      'Access-Control-Allow-Origins': '*'
    })
  },

  httpOptionsJSON: {
    headers: new HttpHeaders({'Content-Type':
    'application/json; charset=UTF-8'})
  },

  /**
   * Especifica el modo de la pantalla.
   */
  MODE: {
    MODE_NONE: -1,
    MODE_ABM: 0,
    MODE_SEARCH: 1,
    MODE_ABM_SEARCH: 2,
    MODE_ABM_DATA: 3,
    MODE_ABM_GENERIC: 4
  },

  /**
   * Especifica la acción abm de la pantalla.
   */
  MODE_ABM: {
    MODE_NONE: -1,
    MODE_ABM_LIST: 0,
    MODE_ABM_DETAIL: 1,
    MODE_ABM_CREATE: 2,
    MODE_ABM_UPDATE: 3,
    MODE_ABM_DUPLICATE: 4,
    MODE_ABM_DELETE: 5,
    MODE_ABM_GENERIC: 6
  },

  /**
   * Especifica el modo de pantalla.
   */
  MODE_FORM: {
    MODE_NONE: -1,
    MODE_SIMPLE: 0,
    MODE_FULL: 1,
  },

  GLOBAL_STYLE_MESSAGE: gsc.STYLE,

  MESSAGE_TYPE: gsc.MESSAGE_TYPE
});
