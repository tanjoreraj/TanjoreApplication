import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { columnDef } from '../../assets/tableconfig/columnDef';

@Component({
  selector: 'app-manual-trigger',
  templateUrl: './manual-trigger.component.html',
  styleUrls: ['./manual-trigger.component.css']
})
export class ManualTriggerComponent implements OnInit {
  manualTriggerForm: FormGroup;
  sourceType: any;
  userGroup: any;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createManualTriggerForm();
    this.sourceType = columnDef.userType;
    this.userGroup = columnDef.userGroup;
  }

  createManualTriggerForm() {
    this.manualTriggerForm = this._formBuilder.group({
        sourceType: [''],
        source: [''],
        description: [''],
        userGroup: [''],
        wildCard: ['']
    });
  }

  saveManualTrigger() {
    console.log(this.manualTriggerForm.value);
  }

}
