import { Component } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component {
  palabras = ["gato", "perro", "serpiente", "carrera", "messi", "demichelis"]
  modosJuego = ["vocales", "consonantes", "letras"]
  opciones = Array()
  palabraActual:string = ""
  modoActual:number = 0 // indice del modo de juego actual
  jugando:boolean = false
  opcionCorrecta:number = 0
  rondaActual = 1
  puntuacion = 0
  gameOver = false

  maxCantRondas = 3

  //Variables para los modals
  mensaje = ""

  reiniciarJuego():void {
    this.palabraActual = ""
    this.modoActual = 0 // indice del modo de juego actual
    this.jugando = false
    this.opcionCorrecta = 0
    this.rondaActual = 1
    this.puntuacion = 0
    this.gameOver = false
  }

  //Inicia una nueva ronda y muestra el tablero de juego
  iniciarJuego():void {
    this.iniciarNuevaRonda()
    this.jugando = true
  }

  //Gestiona las reglas del juego
  iniciarNuevaRonda():void {
    this.modoActual = Math.floor(Math.random() * this.modosJuego.length)
    this.palabraActual = this.obtenerPalabra()
    this.generarOpciones()
  }

  //Obtiene una palbra aleatoria de la lista de palabras
  obtenerPalabra():string{
    let numeroAleatorio = Math.floor(Math.random() * this.palabras.length)
    return this.palabras[numeroAleatorio]
  }

  //Genera la lista de respuestas, por defecto la respuesta correcta es la primera
  generarOpciones(): void {
    //Array de funciones, en js se puede hacer ;)
    let funciones = [this.contarVocales(), this.contarConsonantes(), this.contarLetras()]
    //Segun el modo de juego se obtiene el resultado correcto
    let resultado:number = funciones[this.modoActual]

    //se reinicia el array de opciones
    this.opciones = []
    this.opciones.push(resultado)

    //Generar resultados incorrectos sin repetir los valores
    let i = 0
    while(i < 3){
      //rango (resultado - 2 , resultado + 5)
      let valor = Math.floor(Math.random() * (resultado + 5)) + 2 // se suma 5 para establecer un rango
      if(this.comprobarRepetido(valor) === false){
        this.opciones.push(valor)
        i++
      }
    }

    //Debido a que la opción correcta siempre esta en la primera posicion
    //Se debe intercambiar
    this.intercambiarPosiciones()
  }

  //Comprueba si se repite algún número en el arreglo de opciones
  comprobarRepetido(valor:number):boolean{
    let i = 0
    let repetido = false
    while(i < this.opciones.length && !repetido){
      repetido = this.opciones[i] === valor
      i++
    }
    return repetido
  }

  //Se intercambia la posicion de la respuesta correcta en el vector de opciones
  intercambiarPosiciones():void {
    //Se genera una posicion aleatoria para la respuesta correcta
    this.opcionCorrecta = Math.floor(Math.random() * this.opciones.length)
    console.log("Nueva opcion: "+this.opcionCorrecta)
    let aux = this.opciones[this.opcionCorrecta]
    this.opciones[this.opcionCorrecta] = this.opciones[0]
    this.opciones[0] = aux
  }

  //Cuenta la cantidad de volcales en la palabraActual
  contarVocales(): number {
    let cantidad = 0
    for(let letra of this.palabraActual){
      if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        cantidad++
      }
    }
    return cantidad
  }

  //Cuenta la cantidad de consonantes en la palabraActual
  contarConsonantes(): number {
    let cantidad = this.palabraActual.length - this.contarVocales()
    return cantidad
  }

  contarLetras(): number {
    return this.palabraActual.length
  }

  //Comprueba que la opcion elegida por el usuario es correcta
  comprobarOpcion(valor:number) {
    if(valor == this.opciones[this.opcionCorrecta]){
      this.puntuacion++
      this.mostrarModal("Correcto")
    }
    else {
      this.mostrarModal("Incorrecto")
    }
  }

  //Luego de responder se aumenta la ronda
  aumentarRonda():void {
    if(this.rondaActual >= this.maxCantRondas){
      this.mensaje = "Puntuacion " + this.puntuacion
      this.gameOver=true
      return
    }
    this.rondaActual++;
    this.iniciarNuevaRonda()
  }

  mostrarModal(msj:string):void {
    this.mensaje = msj
  }
}
