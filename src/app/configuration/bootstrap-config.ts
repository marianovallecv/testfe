/**
 * Definición de estilos.
 */
 export const GlobalTheme = Object.freeze({
  COLOR: {
    LIGHT: 'light',
    DARK: 'dark',
    CONTRAST: 'contrast',

    EMPTY: ''
  }
})

/**
 * ´Definición de ICONOS.
 */
//  bi bi-skip-backward-fill	first
//  bi bi-skip-start-fill		back
//  bi bi-skip-end-fill		next
//  bi bi-skip-forward-fill		end

 export const GlobalIcons = Object.freeze({
  ICON: {
    OK: ' bi bi-check-circle-fill ',
    CANCEL: ' bi bi-dash-circle-fill ',
    CANCEL_FLAT: ' bi bi-dash-circle ',
    SELECT: ' bi bi-hand-index-thumb ',
    SELECT_FLAT: ' bi bi-hand-index-thumb-fill ',
    BACK: ' bi bi-arrow-left-circle-fill ',
    FIRST: ' bi bi-skip-backward-circle-fill ',
    FORWARD: ' bi bi-arrow-right-circle-fill ',
    LAST: ' bi bi-skip-forward-circle-fill ',
    BACK_FLAT: ' bi bi-skip-start-fill ',
    FIRST_FLAT: ' bi bi-skip-backward-fill ',
    FORWARD_FLAT: ' bi bi-skip-end-fill ',
    LAST_FLAT: ' bi bi-skip-forward-fill ',
    VIEW: ' bi bi-circle-fill ',
    ADD: ' bi bi-plus-circle ',
    CLONE: ' bi bi-circle-half ',
    EDIT: ' bi bi-record-circle ',
    DELETE: ' bi bi-x-circle ',
    QUESTION: ' bi bi-question-circle-fill ',
    QUESTION_FLAT: ' bi bi-question-circle ',
    EXCLAMATION: ' bi bi-exclamation-circle-fill ',
    EXCLAMATION_FLAT: ' bi bi-exclamation-circle ',
    INFORMATION: ' bi bi-info-circle-fill ',
    INFORMATION_FLAT: ' bi bi-info-circle ',
    LOGIN: ' bi bi-unlock-fill ',
    LOGIN_FLAT: ' bi bi-unlock ',
    LOGOUT: ' bi bi-door-open-fill ',
    LOGOUT_FLAT: ' bi bi-door-open ',
    FILTER: ' bi bi-filter-circle-fill ',
    FILTER_FLAT: 'bi bi-filter',
    HOME: ' bi bi-house-door-fill ',
    HOME_FLAT: ' bi bi-house-door ',
    SEND: ' bi bi-arrow-up-circle-fill ',
    SEND_FLAT: ' bi bi-arrow-up-circle ',
    OPEN: '',
    EMPTY: ''
  }
})

/**
 * Definición de colores bootstrap.
 */
export const GlobalColors = Object.freeze({
  COLOR: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    SUCCESS: 'success',
    DANGER: 'danger',
    WARNING: 'warning',
    INFO: 'info',
    LIGHT: 'light',
    DARK: 'dark',
    BODY: 'body',
    MUTED: 'muted',
    BLACK: 'black',

    CBLUE: 'blue',
    CINDIGO: 'indigo',
    CPURPLE: 'purple',
    CPNIK: 'pink',
    CRED: 'red',
    CORANGE: 'orange',
    CYELLOW: 'yellow',
    CGREEN: 'green',
    CTEAL: 'teal',
    CCYAN: 'cyan',
    CWHITE: 'white',
    CGRAY: 'gray',
    CGRAY_DARK: 'gray-dark',

    EMPTY: ''
  }
})

/**
 * ´Definición de estilos de alertas.
 */
export const GlobalStyles = Object.freeze({
  MESSAGE_TYPE:{
    /**
     * For questions
     */
    PRIMARY: 'primary',
    /**
     * For message
     */
    SECONDARY: 'secondary',
    /**
     * For success
     */
    SUCCESS: 'success',
    /**
     * For error
     */
    DANGER: 'danger',
    /**
     * For earning
     */
    WARNING: 'warning',
    /**
     * For info
     */
    INFO: 'info',
    LIGHT: 'light',
    DARK: 'dark'
  },

  STYLE: {
    PRIMARY: 'alert alert-' + GlobalColors.COLOR.PRIMARY,
    SECONDARY: 'alert alert-' + GlobalColors.COLOR.SECONDARY,
    SUCCESS: 'alert alert-' + GlobalColors.COLOR.SUCCESS,
    DANGER: 'alert alert-' + GlobalColors.COLOR.DANGER,
    WARNING: 'alert alert-' + GlobalColors.COLOR.WARNING,
    INFO: 'alert alert-' + GlobalColors.COLOR.INFO,
    LIGHT: 'alert alert-' + GlobalColors.COLOR.LIGHT,
    DARK: 'alert alert-' + GlobalColors.COLOR.DARK,
    MUTED: 'alert alert-' + GlobalColors.COLOR.MUTED,
    BLACK: 'alert alert-' + GlobalColors.COLOR.BLACK,
    WHITE: 'alert alert-' + GlobalColors.COLOR.CWHITE,

    EMPTY: ''
  }
})

/**
 * Definición de colores para background.
 */
export const GlobalBackGroundColor = Object.freeze({
  BACKGROUND_COLOR: {
    PRIMARY: ' bg-' + GlobalColors.COLOR.PRIMARY + ' ',
    SECONDARY: ' bg-' + GlobalColors.COLOR.SECONDARY + ' ',
    SUCCESS: ' bg-' + GlobalColors.COLOR.SUCCESS + ' ',
    DANGER: ' bg-' + GlobalColors.COLOR.DANGER + ' ',
    WARNING: ' bg-' + GlobalColors.COLOR.WARNING + ' ',
    INFO: ' bg-' + GlobalColors.COLOR.INFO + ' ',
    LIGHT: ' bg-' + GlobalColors.COLOR.LIGHT + ' ',
    DARK: ' bg-' + GlobalColors.COLOR.DARK + ' ',
    BODY: ' bg-' + GlobalColors.COLOR.BODY + ' ',
    MUTED: ' bg-' + GlobalColors.COLOR.MUTED + ' ',
    WHITE: ' bg-' + GlobalColors.COLOR.CWHITE + ' ',

    EMPTY: ''
  }
})

/**
 * Definición de color de texto.
 */
 export const GlobalTableColor = Object.freeze({
  TABLE_COLOR: {
    PRIMARY: ' table-' + GlobalColors.COLOR.PRIMARY + ' ',
    SECONDARY: ' table-' + GlobalColors.COLOR.SECONDARY + ' ',
    SUCCESS: ' table-' + GlobalColors.COLOR.SUCCESS + ' ',
    DANGER: ' table-' + GlobalColors.COLOR.DANGER + ' ',
    WARNING: ' table-' + GlobalColors.COLOR.WARNING + ' ',
    INFO: ' table-' + GlobalColors.COLOR.INFO + ' ',
    LIGHT: ' table-' + GlobalColors.COLOR.LIGHT + ' ',
    DARK: ' table-' + GlobalColors.COLOR.DARK + ' ',
    BODY: ' table-' + GlobalColors.COLOR.BODY + ' ',
    MUTED: ' table-' + GlobalColors.COLOR.MUTED + ' ',
    BLACK: ' table-' + GlobalColors.COLOR.BLACK + ' ',
    WHITE: ' table-' + GlobalColors.COLOR.CWHITE + ' ',

    EMPTY: ''
  },
})

/**
 * Definición de color de texto.
 */
export const GlobalTextColor = Object.freeze({
  TEXT_COLOR: {
    PRIMARY: ' text-' + GlobalColors.COLOR.PRIMARY + ' ',
    SECONDARY: ' text-' + GlobalColors.COLOR.SECONDARY + ' ',
    SUCCESS: ' text-' + GlobalColors.COLOR.SUCCESS + ' ',
    DANGER: ' text-' + GlobalColors.COLOR.DANGER + ' ',
    WARNING: ' text-' + GlobalColors.COLOR.WARNING + ' ',
    INFO: ' text-' + GlobalColors.COLOR.INFO + ' ',
    LIGHT: ' text-' + GlobalColors.COLOR.LIGHT + ' ',
    DARK: ' text-' + GlobalColors.COLOR.DARK + ' ',
    BODY: ' text-' + GlobalColors.COLOR.BODY + ' ',
    MUTED: ' text-' + GlobalColors.COLOR.MUTED + ' ',
    BLACK: ' text-' + GlobalColors.COLOR.BLACK + ' ',
    WHITE: ' text-' + GlobalColors.COLOR.CWHITE + ' ',

    EMPTY: ''
  },
})

/**
 * Definición de colores para background de button.
 */
export const GlobalBackGroundColorButton = Object.freeze({
  BUTTON_OUTLINE_BACKGROUND_COLOR: {
    PRIMARY: ' btn btn-outline-' + GlobalColors.COLOR.PRIMARY + ' ',
    SECONDARY: ' btn btn-outline-' + GlobalColors.COLOR.SECONDARY + ' ',
    SUCCESS: ' btn btn-outline-' + GlobalColors.COLOR.SUCCESS + ' ',
    DANGER: ' btn btn-outline-' + GlobalColors.COLOR.DANGER + ' ',
    WARNING: ' btn btn-outline-' + GlobalColors.COLOR.WARNING + ' ',
    INFO: ' btn btn-outline-' + GlobalColors.COLOR.INFO + ' ',
    LIGHT: ' btn btn-outline-' + GlobalColors.COLOR.LIGHT + ' ',
    DARK: ' btn btn-outline-' + GlobalColors.COLOR.DARK + ' ',
    MUTED: ' btn btn-outline-' + GlobalColors.COLOR.MUTED + ' ',
    PINK: ' btn btn-outline-' + GlobalColors.COLOR.CPNIK + ' ',

    WHITE: ' btn btn-outline-' + GlobalColors.COLOR.CWHITE + ' ',

    EMPTY: ''
  },
  BUTTON_BACKGROUND_COLOR: {
    PRIMARY: ' btn btn-' + GlobalColors.COLOR.PRIMARY + ' ',
    SECONDARY: ' btn btn-' + GlobalColors.COLOR.SECONDARY + ' ',
    SUCCESS: ' btn btn-' + GlobalColors.COLOR.SUCCESS + ' ',
    DANGER: ' btn btn-' + GlobalColors.COLOR.DANGER + ' ',
    WARNING: ' btn btn-' + GlobalColors.COLOR.WARNING + ' ',
    INFO: ' btn btn-' + GlobalColors.COLOR.INFO + ' ',
    LIGHT: ' btn btn-' + GlobalColors.COLOR.LIGHT + ' ',
    DARK: ' btn btn-' + GlobalColors.COLOR.DARK + ' ',
    MUTED: 'btn btn-' + GlobalColors.COLOR.MUTED + ' ',
    WHITE: ' btn btn-' + GlobalColors.COLOR.CWHITE + ' ',

    EMPTY: ''
  },
})

/**
 * Definición de margenes.
 */
export const GlobalMargin = Object.freeze({
  MARGIN_GLOBAL_CONTROL: {
    M1: ' m-1 ',
    M2: ' m-2 ',
    M3: ' m-3 ',
    M4: ' m-4 ',
    M5: ' m-5 ',

    EMPTY: ''
  },
  MARGIN_BOTTON_GLOBAL_CONTROL: {
    MB1: ' mb-1 ',
    MB2: ' mb-2 ',
    MB3: ' mb-3 ',
    MB4: ' mb-4 ',
    MB5: ' mb-5 ',

    EMPTY: ''
  },
  MARGIN_TOP_GLOBAL_CONTROL: {
    MB1: ' mt-1 ',
    MB2: ' mt-2 ',
    MB3: ' mt-3 ',
    MB4: ' mt-4 ',
    MB5: ' mt-5 ',

    EMPTY: ''
  },
  MARGIN_LEFT_GLOBAL_CONTROL: {
    MB1: ' ml-1 ',
    MB2: ' ml-2 ',
    MB3: ' ml-3 ',
    MB4: ' ml-4 ',
    MB5: ' ml-5 ',

    EMPTY: ''
  },
  MARGIN_RIGTH_GLOBAL_CONTROL: {
    MB1: ' mr-1 ',
    MB2: ' mr-2 ',
    MB3: ' mr-3 ',
    MB4: ' mr-4 ',
    MB5: ' mr-5 ',

    EMPTY: ''
  }
})
