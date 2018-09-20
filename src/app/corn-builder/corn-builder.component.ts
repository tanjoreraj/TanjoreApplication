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
  cornBuilderForm: FormGroup;
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
  showWeeklyError: any;
	
  cronTabType: String = 'minutes';
  cronResults: boolean = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createCornBuilderForm();
    
  }

  createCornBuilderForm() {
    this.cornBuilderForm = this._formBuilder.group({
        dirtyCronMinute: ['0',[Validators.required]],
        dirtyCronHour: ['0'],
        dirtyCronHourMin: ['0'],
        dirtyCronDailyDay: ['0'],
        dirtyCronDailyTime1: ['0'],
        dirtyCronDailyTime2: ['0'],
        dirtyCronWeeklyBox: [''],
        dirtyCronWeeklyTime1: ['0'],
        dirtyCronWeeklyTime2: ['0'],
        dirtyCronMonthlyMonth: ['0'],
        dirtyCronMonthlyRadio: [''],
        dirtyCronMonthlyDay: ['0'],
        dirtyCronMonthlyOn: [''],
        dirtyCronMonthlyDropRank: [''],
        dirtyCronMonthlyDropDay: [''],
        dirtyCronMonthlyTime1: ['0'],
        dirtyCronMonthlyTime2: ['0'],
        dirtyCronYearlyDropMonth: [''],
        dirtyCronYearlyRadio: [''],
        dirtyCronYearlyDay: ['0'],
        dirtyCronYearlyOn: [''],
        dirtyCronYearlyDropRank: [''],
        dirtyCronYearlyDropDay: [''],
        dirtyCronYearlyTime1: ['0'],
        dirtyCronYearlyTime2: ['0']
    });
}

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

  onSubmit() {
    // stop here if form is invalid
    if (this.cornBuilderForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)')
}

  generateCron() {
    console.log(this.cornBuilderForm,this.cronTabType);
    switch (this.cronTabType) {
      case "minutes":
         console.log("minutes");
         break;
      case "hourly":
        console.log("hourly");
      break;
      case "daily":
        console.log("daily");
      break;
      case "weekly":
        console.log("weekly",this.cornBuilderForm.controls.dirtyCronWeeklyBox.status);
        if(this.cornBuilderForm.controls.dirtyCronWeeklyBox.value === false || this.cornBuilderForm.controls.dirtyCronWeeklyTime1.value === 0 || this.cornBuilderForm.controls.dirtyCronWeeklyTime2.value === 0) {
          this.showWeeklyError = true;
        } else {
          this.showWeeklyError = false;
        }
        break;
      case "monthly":
        console.log("monthly");
      break;
      case "yearly":
         console.log("yearly");
         break;
      default:
          return true;
    }
  }

  enableCron() {
    switch (this.cronTabType) {
      case "minutes":
      console.log("weekly",this.cornBuilderForm.controls.dirtyCronWeeklyBox.status);
        if(this.cornBuilderForm.controls.dirtyCronMinute.value === 0) {
          console.log("sdfgd");
          return false;
        } else {
          console.log("hourly");
          return true;
        }
      case "hourly":
         console.log("hourly");
         break;
      case "daily":
        console.log("daily");
      break;
      case "weekly":
        console.log("weekly");
      break;
      case "monthly":
        console.log("monthly");
      break;
      case "yearly":
        console.log("yearly");
      break;
      default:
          return true;
    }
  }

}
