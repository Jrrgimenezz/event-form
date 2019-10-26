import { Component } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/es';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectYedra2';
  destino: String;
  precio:Number;
  lugarRecogidaIda: String;
  lugarRecogidaVuelta:String;
  horaIda: String;
  horaVuelta: String;
  public texto: String
  fechaIda = moment();
  fechaVuelta = moment();
  diaHoy = moment();
  horaHoy = "9:31"
  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };




  setFechaVuelta() {
    if (this.fechaIda.isAfter(this.fechaVuelta)) {
      this.fechaVuelta = this.fechaIda
    }
  }

  toString(precio, horaIda, horaVuelta, lugarRecogidaIda, lugarRecogidaVuelta, destino, diaIda, diaVuelta) {
  this.texto = ""
  console.log(this.fechaIda.format("dddd DD MMMM"))
  this.texto = "Buenas, el próximo día " + this.fechaIda.format("dddd DD MMMM") + "  a las" + horaIda + "quedaremos en " + lugarRecogidaIda + " para ir a " + destino + ", la recogida será en "
  if (lugarRecogidaIda == lugarRecogidaVuelta) {
    this.texto += "el mismo sitio"
  }
  else this.texto += lugarRecogidaVuelta
  if (diaVuelta == diaIda) {
    this.texto += "el mismo día"
  }
  else this.texto += "el día " + this.fechaVuelta.format("dddd DD MMMM")
  this.texto += "a las " + horaVuelta + "."
  if(precio != 0) {
    this.texto += "El precio de la actividad será de " + precio + " euros."
  }
  this.texto += "Saludos SCOUTS!!"
}

}
