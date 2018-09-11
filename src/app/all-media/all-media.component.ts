import { Component, OnInit, forwardRef } from '@angular/core';
import { NgForm, FormsModule, FormControl, FormGroup, FormBuilder, Validators, FormArray, ControlValueAccessor } from '@angular/forms';
import { allData } from './allData';
import { UtilService } from '../shared/utilService';
import { columnDef } from '../../assets/tableconfig/columnDef';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-all-media',
  templateUrl: './all-media.component.html',
  styleUrls: ['./all-media.component.css']
})
export class AllMediaComponent implements OnInit {
  triggerForm: FormGroup;
  data: any;
  activeData: any;
  userdata: any;
  showPopUp = false;
  triggerTypes: any;
  triggerValue: any;
  valueTypes: any;
  manualKey: any;
  manualValue: any;
  allValues;
  constructor(private _formBuilder: FormBuilder,
  private _util: UtilService) { }

  ngOnInit() {
    this.data = allData;
    this.createTriggerForm();
    this.activeData = columnDef.activeData;
    this.userdata = columnDef.userGroup;
    this.triggerTypes = columnDef.triggerTypes;
    this.valueTypes = [{"key":"key1","value":"value1"},{"key":"key2","value":"value2"},{"key":"key3","value":"value3"}]
    this.triggerValue = this.triggerForm.controls.triggerTypes.valueChanges.subscribe(value => {
      if(value !== undefined) {
        this.triggerValue = value;
      }
    });
  }

  add(key,value) {
    this.allValues = {"key": key,"value": value};
    this.valueTypes.push(this.allValues);
    this.triggerForm.controls['key'].setValue('');
    this.triggerForm.controls['values'].setValue('');
  }

  delete(key) {
    console.log(key);
    this.valueTypes.filter(value => {
      if(key === value.key) {
        this.valueTypes.splice(this.valueTypes.indexOf(value), 1);
      }
    });
}

  createTriggerForm(){
    this.triggerForm = this._formBuilder.group({
        triggerName: [''],
        description: [''],
        active: [''],
        userGroup: [''],
        triggerTypes: [''],
        scheduler: [''],
        endTime: [''],
        key: [''],
        values: [''],
        status: [''],
        end: [''],
        fileName: [''],
        filePath: [''],
        fileSearch: [''],
        minAge: [''],
        maxAge: ['']
    });
}

  /*openModalPopup() {
    console.log("1");
    this._util.checkOpenModalPopup(true);
  }*/

  saveTrigger() {      
    console.log("hi",this.triggerForm.value);
  }

  resetTrigger() {
    this.triggerForm.reset();
  }

  openModalPopup() {
    this.showPopUp = true;
    this._util.checkOpenModalPopup(true);
  }

}
