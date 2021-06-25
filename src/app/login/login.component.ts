import { AppServiceService } from '../app-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm: any;
	constructor(private route: Router, private appservice: AppServiceService, private fb: FormBuilder) { }

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			Luname: ['', Validators.required],
			Lpword: ['', Validators.required]
		})
	}

	logIn(loginForm: any) {
		const Luname = loginForm.value.Luname;
		const Lpword = loginForm.value.Lpword;
		this.appservice.getUser(Luname).subscribe((validUser) => {
			if (validUser) {
				if (Lpword !== validUser.pword) {
					alert("Wrong Password")
				} else {
					localStorage.setItem("uname",Luname)
					this.route.navigate(['/posts'])
				}
			} else {
				alert("Wrong UserName")
			}
		})
	}
}
