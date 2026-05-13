import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Produto } from '../../models/produto';
import { ProdutoServiceTs } from '../../services/produto.service';

@Component({
  selector: 'app-produto-list',
  imports: [CurrencyPipe],
  templateUrl: './produto-list.html',
  styleUrl: './produto-list.css',
})
export class ProdutoList {
  private readonly produtosService = inject(ProdutoServiceTs);
  produtos : Produto[] = [];

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() : void{
    this.produtosService.listar().subscribe({
      next: (dados) => this.produtos = dados,
      error: (erro) => console.error('Erro ao carregar produtos:', erro)
    })
  }
}