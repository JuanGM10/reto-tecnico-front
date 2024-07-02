import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RetoTecnicoServiceService } from '../app/services/reto-tecnico-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'reto-tecnico';
  form: FormGroup = new FormGroup({
    usuario: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private serviceReto: RetoTecnicoServiceService) {
  }

  submit() {
    debugger;
    if (this.form.valid) {
      this.serviceReto.login( { usuario: this.form.get("usuario")!.value  ,  password: this.form.get("password")!.value })
        .subscribe( (response) => {
          if (response.success) {
            alert("Acceso Correcto");
          }
        });
    }
  }
}
