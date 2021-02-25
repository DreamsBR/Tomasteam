import { Contacto } from "../add-contacto/contato";

export class Factura {
  codfactura: number;
  anulado :string;
  descuento :string;
  fechar : string;
  igv: number;
  subtotal :number;
  total :number
  transferido :string;
  contacto : Contacto[]
}
