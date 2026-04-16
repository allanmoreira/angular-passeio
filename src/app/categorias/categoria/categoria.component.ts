import { Component } from '@angular/core';
import { FormControl, FormGroup, isFormGroup, Validators } from '@angular/forms';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss',
})
export class CategoriaComponent {
  camposForm: FormGroup;

  constructor(private categoriaService: CategoriaService) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
    })
  }

  salvar(){
    this.camposForm.markAllAsTouched();
    if(this.camposForm.valid){
      this.categoriaService.salvar(this.camposForm.value).subscribe({
        next: (categoria) => {
          console.log(categoria);
          // this.camposForm.reset();
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
  }

  isCampoInvalido(nomeCampo:string): boolean {
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];

  }

}
