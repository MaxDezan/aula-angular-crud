import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-produto-list',
  imports: [CurrencyPipe],
  templateUrl: './produto-list.html',
  styleUrl: './produto-list.css',
})
export class ProdutoList {
  produtos = [
    {
      id: 1,
      nome: "Notebook",
      descricao: "Notebook acer nitro 5",
      preco: 3000
    },
    {
      id: 2,
      nome: "Mouse",
      descricao: "Mouse logitech sem fio",
      preco: 450
    }
  ]
}
