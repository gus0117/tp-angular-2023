import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoEspectador'
})
export class TipoEspectadorPipe implements PipeTransform {

  transform(value: string): string {
    if(value == "e"){
      return "Extranjero"
    } else if(value == "l"){
      return "Local"
    }
    return "Desconocido"
  }

}
