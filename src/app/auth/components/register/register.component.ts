import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service'; //se supone que con el cmabio quye hice en tsconfig.app.json al agregar los apths deberia solo poner '@core' en vez de 'src/app/core'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService
  ) { 
    this.buildForm(); //aca si no se inicializa en el constructor arroja error en consola
  }

  buildForm(): void {
    this.registerForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
      confirmpassword:['',[Validators.required, Validators.minLength(6)]]
    })
  }
  async registerUser(event: Event):Promise<void>{
    event.preventDefault();
    const {email, password,confirmpassword } = this.registerForm.value;
    try {
      if(password === confirmpassword){
      const userCredencials = await this.authService.registerUser(email, password)
      }else{
        alert('Las Contraseñas no son Iguales');
      }
    } catch (error) {
      console.log(error);
    }

  }

  ngOnInit(): void {
  }

}
