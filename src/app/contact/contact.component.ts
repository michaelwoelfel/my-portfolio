
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, VERSION, } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators, } from "@angular/forms";
import { BreakpointObserver,Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ResponsiveService } from "../responsive.service";
import { FormGroupDirective } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { EmailData } from "../email-data.interface";

/**
 * Interface for email data structure.
 */

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent {
  title = "Formspree.io Angular " + VERSION.major + " Example";
  secretKey: string = "xeqbdjnq";
  emailForm: FormGroup;
  @ViewChild(FormGroupDirective) formDirective?: FormGroupDirective;
 /**
   * Initializes the component with required services.
   * 
   * @param fb FormBuilder for handling form controls.
   * @param httpClient HttpClient for making HTTP requests.
   * @param responsive BreakpointObserver for responsive design.
   * @param responsiveService Service for handling responsive functionalities.
   */
  constructor( private fb: FormBuilder, private httpClient: HttpClient,public responsive: BreakpointObserver, public responsiveService: ResponsiveService) {
    this.emailForm = this.newForm;
  }

  

  get newForm() {
    
      return new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        name: new FormControl('', [Validators.required, Validators.minLength(5),]),
        message: new FormControl('', [Validators.required, Validators.minLength(5)]),
        disableSelect : new FormControl(false),
      });
    
  }
  /**
   * Handles the form submission event.
   */

  async onSubmitForm() {
    let emailData: EmailData = this.emailForm.value as EmailData;
   await this.sendEmail(emailData);
    this.emailForm.reset();
    this.formDirective?.resetForm();
  }

 /**
   * Retrieves error message for email form control validation.
   * 
   */
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

get httpOptions() {
  return {
    headers: new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    })
  };
}

  /**
   * Sends an email with the provided form data.
   * 

   */
  async sendEmail(value: EmailData) {
    let url = "https://formspree.io/f/" + this.secretKey;
    let data = `name=${value.name}&email=${value.email}&message=${value.message}`;
    let errorMessage: string = "";
    this.httpClient.post<any>(url, data, await this.httpOptions).subscribe({
      next: data => {
        this.responsiveService.messageSentSuccess.next(true);
        this.emailForm.reset();
      },
      error: error => {
        errorMessage = error.message;
      }
    })
  }

  openImpressum() {
    window.open('/privacy', '_blank');
  
  }

}




