import { Component, ElementRef, inject, input, output, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from '../services/events.service';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StringInputComponent } from "@common/form-inputs/components/string-input";
import { NumberInputComponent } from "@common/form-inputs/components/number-input";
import { TextAreaInputComponent } from "@common/form-inputs/components/textarea";
import { CheckboxComponent } from "@common/form-inputs/components/checkbox";
import { GoodsItem } from '../interfaces/goods';
import { EditorEvent, FormAction } from '../interfaces/editor-event';

@Component({
  selector: 'app-form',
  imports: [
    StringInputComponent,
    NumberInputComponent,
    TextAreaInputComponent,
    CheckboxComponent,
    FormsModule,
    ReactiveFormsModule,
],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
   private modalService = inject(NgbModal);
   private events = inject(EventsService);
   private formBuilder = inject(FormBuilder);
   enterGoodsItem = input<GoodsItem>();
   addItem = output<any>();
   editItem = output<GoodsItem>();

   mainFormGroup = this.formBuilder.group({
    id: [-1],
    name: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000) ]],
    price: [0, Validators.required],
    category: ['', Validators.required],
    brand: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100) ]],
    in_stock: [true],
    discount: [0, [Validators.min(0), Validators.max(50)]],
    quantity_in_stock: [0, [Validators.required, Validators.min(0), Validators.max(999999999)]],
    charged_person_email: ['', [ Validators.required, Validators.email ]],
    charged_person_phone: ['', [Validators.required, Validators.pattern(/^((\+7|8)\s?)?(9\d{2})[-.\s]?(\d{3})[-.\s]?(\d{2})[-.\s]?(\d{2})$/)]],
   })


   @ViewChild('form_modal') modalTemplate: ElementRef | undefined;

   constructor(){
    this.events.formModalStatus$.subscribe(data => this.eventHandler(data))
   }

   eventHandler(event: EditorEvent){
      switch(event.action) {
        case FormAction.add:
          this.open();
          break;
        case FormAction.edit:
          event.data && this.patchForm(event.data);
          this.open();
          break;
        case FormAction.close:
          this.close();
          break;
      }
   }

   open(){
    this.modalService
      .open(this.modalTemplate, { ariaLabelledBy: 'modal-basic-title', size: 'xl' })
      .result.then(
        result => console.log(result)
      )
   }
   patchForm(data: GoodsItem){
    this.mainFormGroup.patchValue(data);
   }
   close(){
    this.modalService.dismissAll();
   }
   log(){
    console.log(this.mainFormGroup);
   }
   save(){
    this.mainFormGroup.updateValueAndValidity();;
    if(this.mainFormGroup.valid){
      const data = this.mainFormGroup.getRawValue();
      //console.log(data);
      this.addItem.emit(data)
    }
   }
}
