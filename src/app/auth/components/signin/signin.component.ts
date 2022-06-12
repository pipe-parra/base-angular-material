import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service'; //se supone que con el cmabio quye hice en tsconfig.app.json al agregar los apths deberia solo poner '@core' en vez de 'src/app/core'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup | undefined;
  

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }

}
