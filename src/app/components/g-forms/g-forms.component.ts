import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-g-forms',
  templateUrl: './g-forms.component.html',
  styleUrls: ['./g-forms.component.css']
})
export class GFormsComponent implements OnInit {

  constructor(
    private router: Router,
    private serviceAppState: AppStateService,
    private modalService:BsModalService
  ) { 
    
  }
  formGroup: FormGroup[]

  jsonObject = null
  proccesedArrayForms = []

  modalRef: BsModalRef;


  mlabel = ''

  mLabels = []
  mData = []

  ngOnInit() {
    this.jsonObject = this.serviceAppState.getValidJsonObject();
    console.log(this.jsonObject)
    this.jsonObject.forEach(item=>{
      console.log(item)
      this.proccesedArrayForms.push(this.generateForm(item))
    })

    console.log(this.proccesedArrayForms);
  }
  
  // Based on raw input, fetch a processed array of FormGroups
  generateForm(form){
    let formId = form['form']
    let formLabel = form['label']
    let formControls = form['controls']
    let formControlsObject = {}
    
    formControls.forEach(item=>{
      let fc = new FormControl('')
      let vals = []
      if(item['required']){
        vals.push(Validators.required)
      }
      if(item['regex']){
        vals.push(Validators.pattern((item['regex'])))
      }
      fc.setValidators(vals)
      formControlsObject[item['name']] = fc
    })

    let processedFormGroup = {
      'formGroup': new FormGroup(formControlsObject),
      'formGroupName': formId,
      'formLabel':formLabel,
      'controls':formControls

    }

    return processedFormGroup;


  }


  openModal(template:TemplateRef<any>, data:any, label){
    this.modalRef = this.modalService.show(template);
    console.log(data)
    this.mlabel = label
    this.mLabels = []
    this.mData = []
    for(let k in data){
      this.mLabels.push(k)
      this.mData.push(data[k])
    }
    this.mlabel = label
    this.modalRef.setClass('modal-lg')
    
  }

  // Form Submit 
  onSubmit(formGroup:FormGroup, template:TemplateRef<any>, label:string){
    console.log(formGroup.value)
    console.log(formGroup.valid)
    if(formGroup.valid){
      this.openModal(template,formGroup.value, label)
    }
   

  }

  closeModal(){
    console.log("Closing Modal")
    
    this.modalRef.hide();
  }

}
