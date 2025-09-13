import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventsService, FormAction } from '../services/events.service';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StringInputComponent } from "@common/form-inputs/components/string-input";
import { NumberInputComponent } from "@common/form-inputs/components/number-input";
import { TextAreaInputComponent } from "@common/form-inputs/components/textarea";
import { CheckboxComponent } from "@common/form-inputs/components/checkbox";

@Component({
  selector: 'app-form',
  imports: [
    StringInputComponent,
    NumberInputComponent,
    TextAreaInputComponent,
    CheckboxComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
   private modalService = inject(NgbModal);
   private events = inject(EventsService);
   private formBuilder = inject(FormBuilder);

   mainFormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    category: ['', Validators.required],
    brand: ['', Validators.required, Validators.maxLength(100)],
    in_stock: [''],
    discount: [''],
    quantity_in_stock: ['', Validators.required, Validators.min(0), Validators.max(1000)],
    charged_person_email: ['', Validators.required, Validators.email],
    charged_person_phone: ['', Validators.required],
   })


   @ViewChild('form_modal') modalTemplate: ElementRef | undefined;

   constructor(){
    this.events.formModalStatus$.subscribe(data => this.eventHandler(data))
   }

   eventHandler(event: FormAction){
      switch(event) {
        case FormAction.add:
          this.open();
          break;
        case FormAction.edit:
          this.open();
          break;
        case FormAction.close:
          this.close();
          break;
      }
   }

   open(){
    this.modalService.open(this.modalTemplate, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then(
      result => console.log(result)
    )
   }
   close(){
    this.modalService.dismissAll();
   }


}
