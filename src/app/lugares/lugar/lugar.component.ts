import { Component, OnInit, signal } from '@angular/core';
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
  categorias = signal<Categoria[]>([]);

  constructor(
    private categoriaService: CategoriaService,
    private lugarService: LugarService,
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
      this.categorias.set(categorias);
    });
  }

  salvar() {
    this.camposForm.markAllAsTouched();
    console.log(this.camposForm.valid);
    console.log(this.camposForm);
    if (this.camposForm.valid){
      this.lugarService.salvar(this.camposForm.value).subscribe({
        next: (response) => {
          console.log('Cadastrado com sucesso!', response);
          this.camposForm.reset();
        },
        error: (erro) => {
          console.error('Erro ao salvar', erro);
        },
      });
    }
  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];
  }
}
