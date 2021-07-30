/**
 * Se utiliza para los abm, diferencia entre amb y search.
 *
 */
export interface  ColumnsABM {
  /**
   * Nombre del campo.
   *
   */
  field: string;
  /**
   * Nombre del campo en caso que sea una tabla relacionada.
   *
   */
  target: string;
  /**
   * Titulo a mostrar.
   *
   */
  header: string;
  /**
   * Tipo de dato del campo.
   *
   */
  type: string;
  /**
   * Formato que se va a usar para el campo (depende del tipo de dato).
   *
   */
  format: string;
  /**
   * Clase css.
   *
   */
  class: string;
  /**
   * Para indicar que es un campo que se puede ordenar.
   *
   */
  iconSort: string;
  /**
   * Icono a mostrar.
   *
   */
  icon: string;
  /**
   * Estilo css.
   *
   */
  style: string;
  /**
   * Ancho.
   *
   */
  width: string;
  /**
   * Col actualización que reemplaza a width
   */
  col: string;
  /**
   * BackColor.
   *
   */
  color: string;
  /**
   * Estilo del cursor.
   *
   */
  cursor: string;
  /**
   * Ruta de destino.
   *
   */
  routerLink: string;
  /**
   * Indica si es o no administrador.
   *
   */
  isAdmin: boolean;
  /**
   * Indica si es un campo para ordenar.
   *
   */
  isSort: boolean;
  /**
   * Mostrar el control en modo search.
   *
   */
  mode?: number;
  /**
   * Define el modo ABM.
   *
   */
  modeABM: number;
  /**
   * Titulo html.
   *
   */
  title?: string;
}
