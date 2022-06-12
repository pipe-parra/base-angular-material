import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service'; //se supone que con el cmabio quye hice en tsconfig.app.json al agregar los apths deberia solo poner '@core' en vez de 'src/app/core'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;
  

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService
  ) { }

  buildForm(): void {
    this.signinForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
    })
  }
  async signinUser(event: Event):Promise<void>{
    event.preventDefault();
    const {email, password} = this.signinForm.value;
    try {
      const userCredencials = await this.authService.loginUser(email, password);
    } catch (error) {
      console.log(error);
    }

  }

  ngOnInit(): void {
  }

}
