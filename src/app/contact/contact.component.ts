
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, VERSION, } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators, } from "@angular/forms";
import { BreakpointObserver,Breakpoints, BreakpointState } from '@angular/cdk/layout';

interface EmailData {
  name: string | null;
  email: string | null;
  message: string | null;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent {

  title = "Formspree.io Angular " + VERSION.major + " Example";
  secretKey: string = "xeqbdjnq";
  emailForm: FormGroup;
 
 

  constructor(private fb: FormBuilder, private httpClient: HttpClient,public responsive: BreakpointObserver) {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(5),]),
      message: new FormControl('', [Validators.required, Validators.minLength(5)]),
      disableSelect : new FormControl(false),
    });
  }


  
  

  onSubmitForm() {
    let emailData: EmailData = this.emailForm.value as EmailData;
    this.sendEmail(emailData);
  }

  getErrorMessage() {
    if (this.emailForm.get('email')?.hasError('required')) {
      return 'Please fill in a valid e-mail';
    }
    return this.emailForm.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

  get email() {
    return this.emailForm.get('email') as FormControl;
  }

  get disableSelect() {
    return this.emailForm.get('disableSelect') as FormControl;
  }


  get name() {
    return this.emailForm.get('name') as FormControl;
  }

  get message() {
    return this.emailForm.get('message') as FormControl;
  }


  sendEmail(value: EmailData) {
    let url = "https://formspree.io/f/" + this.secretKey;
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };
    let data = `name=${value.name}&email=${value.email}&message=${value.message}`;
    let errorMessage: string = "";
    this.httpClient.post<any>(url, data, httpOptions).subscribe({
      next: data => {
        console.log("email sent" + JSON.stringify(data));
      },
      error: error => {
        errorMessage = error.message;
        console.log('error!', errorMessage);
      }
    })
    console.log("url is ", url);
    console.log("data", value);
  }



}




