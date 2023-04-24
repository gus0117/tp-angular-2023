import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component {
  productos = [
    { id: 1, nombre: "notebook asus 13L", descripcion: "disco 40GB, 15pulgadas", img: "producto1.png", precio: 45.5},
    { id: 2, nombre: "Monitor LG 14", descripcion: "texto descriptivo producto 02", img: "producto02.jpg", precio: 99},
    { id: 3, nombre: "Monitor LG 14", descripcion: "texto descriptivo producto 03", img: "producto03.jpg", precio: 199},
    { id: 4, nombre: "Monitor LG 14", descripcion: "texto descriptivo producto 04", img: "producto04.jpg", precio: 239},
    { id: 5, nombre: "Monitor LG 14", descripcion: "texto descriptivo producto 04", img: "producto04.jpg", precio: 239},
    { id: 6, nombre: "Monitor LG 14", descripcion: "texto descriptivo producto 04", img: "producto04.jpg", precio: 239}
  ]

  carrito = new Array()
  total = 0

  agregarCarrito(producto: any): void{
    //const producto = this.productos.find( p => p.id == id)
    this.carrito.push(producto)
    this.total += producto.precio
    console.log(this.carrito)
  }
}
