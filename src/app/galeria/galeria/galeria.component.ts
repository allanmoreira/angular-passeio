import { Component, OnInit, signal } from '@angular/core';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria/categoria.service';
import { Lugar } from '../../lugares/lugar.class';
import { LugarService } from '../../lugares/lugar/lugar.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent implements OnInit {
  categorias = signal<Categoria[]>([]);
  lugares = signal<Lugar[]>([]);
  nomeFiltro: string = '';
  categoriaFiltro: string = '0';

  constructor(
    private categoriaService: CategoriaService,
    private lugarService: LugarService,
  ) {}

  ngOnInit(): void {
    this.categoriaService.list().subscribe((categorias) => {
      this.categorias.set(categorias);
    });

    this.lugarService.list().subscribe((lugares) => {
      this.lugares.set(lugares);
    });
  }

  getTotalEstrelas(lugar: Lugar): string {
    let avaliacao = lugar.avaliacao?.valueOf() || 0;
    return '&#9733'.repeat(avaliacao || 0) + '&#9734'.repeat(5 - avaliacao || 0);
  }

  filtrar() {
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro).subscribe((lugares) => {
      this.lugares.set(lugares);
    });
  }
}
