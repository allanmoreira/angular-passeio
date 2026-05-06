import { Component, OnInit } from '@angular/core';
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
  categorias: Categoria[] = [];
  lugares: Lugar[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private lugarService: LugarService
  ) {}

  ngOnInit(): void {
    this.categoriaService.list().subscribe((categorias) => {
      this.categorias = categorias;
    });

    this.lugarService.list().subscribe((lugares) => {
      this.lugares = lugares;
    });
  }
}
