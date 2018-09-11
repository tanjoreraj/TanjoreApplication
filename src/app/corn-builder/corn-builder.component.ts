import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-corn-builder',
  templateUrl: './corn-builder.component.html',
  styleUrls: ['./corn-builder.component.css']
})
export class CornBuilderComponent implements OnInit {
  constants;
  fact;
  //cornForm: FormGroup;
	INTERVAL_MIN_MINUTES = 1;
	INTERVAL_MAX_MINUTES = 59;
	INTERVAL_MIN_HOURLY = 1;
	INTERVAL_MAX_HOURLY = 23;
	INTERVAL_MIN_DAILY = 1;
	INTERVAL_MAX_DAILY = 30;
	INTERVAL_MIN_MONTHLY = 1;
	INTERVAL_MAX_MONTHLY = 12;
	TIME_MIN_MINUTE = 0;
	TIME_MAX_MINUTE = 59;
	TIME_MIN_HOUR = 0;
	TIME_MAX_HOUR = 23;
	TIME_MIN_DAY = 1;
  TIME_MAX_DAY = 31;
  DAYS: any;
  RANKS: any;
  MONTHS: any;
	
  cronTabType: String = 'minutes';
  cronResults: boolean = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    //this.createForm();
    
  }

 /* createForm(){
    this.cornForm = this._formBuilder.group({
      everyMinute: [''],
      everyHour:[''],
      atMinute:[''],
      everyDay: [''],
      atTime: [''],
      atTimeMinute: ['']
    });
  }*/

  onFormSubmit(value) {
    console.log("value",value);
    console.log("value",value.type);
  }

  cronTabClick(tabValue) {
    console.log("tabvalue",tabValue);
    this.cronTabType = tabValue;
    this.DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    this.RANKS = ['First','Second','Third','Fourth'];
	  this.MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  }

}
