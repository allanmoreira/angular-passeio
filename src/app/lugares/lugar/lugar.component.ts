import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria/categoria.service';
import { LugarService } from './lugar.service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss',
})
export class LugarComponent implements OnInit {
  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private lugarService: LugarService
  ) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.categoriaService.list().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  salvar(){
    this.lugarService.salvar(this.camposForm.value).subscribe({
      next: response => {
        console.log("Cadastrado com sucesso!", response);
        this.camposForm.reset();
      },
      error: erro => {
        console.error('Erro ao salvar', erro);
      }
    });
  }

}
