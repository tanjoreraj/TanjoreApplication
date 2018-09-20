import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormsModule, FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { trigger, state, style, transition, animate } from '@angular/animations';
//import { utilService } from '../../modal-popup/modal-popup.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-triggeradd',
  templateUrl: './triggeradd.component.html',
  styleUrls: ['./triggeradd.component.css'],
  animations: [
    trigger('addTriggerFormStepAnimate', [
        state('in', style({ opacity: 1 })),
        transition('void => *', [
            style({ opacity: 0 }),
            animate(800)
        ]),
    ])
]
})
export class TriggeraddComponent implements OnInit {
  @Input('dummy-form-data') dummyFormData: any;
    @Input('type') modalType: String;
    triggerForm: FormGroup;
    add_trigger_form_step: String;
    active;
    status;
    userData;
    triggerTypes;
    valueTypes;
    showPopup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createTriggerForm();
    this.triggerForm.value.triggerName = 'test';// = this.dummyFormData;
    this.add_trigger_form_step = 'trigger_definition';
    this.active = ["Active", "Decactive"];
    this.status = ["Scheduled", "Decactived"];
    this.userData = ["Tooling", "Tooling Admin", "DQ Admin", "CIIG Admin", "Super Admin"];
    this.triggerTypes = ["Schedule Trigger", "Manual Trigger", "DB Polling", "File Watcher"];
    this.valueTypes = [{ "key": "key1", "value": "value1" }, { "key": "key2", "value": "value2" }, { "key": "key3", "value": "value3" }]
  }
  

    createTriggerForm() {
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
            sqlScripts: [''],
            mnemonics: [''],
            fileName: [''],
            fileType: [''],
            filePath: [''],
            fileSearchInterval: [''],
            timeLimit: [''],
            minimumSize: ['']
        });

    }

    triggerNextStep() {

        if (this.add_trigger_form_step === 'trigger_definition') {
            this.add_trigger_form_step = 'trigger_configuration';
        } else if (this.add_trigger_form_step === 'trigger_configuration') {
            this.add_trigger_form_step = 'trigger_schedule';
        }

        // console.log(this.triggerForm.value.triggerTypes);
    }

    triggerPreviousStep() {

        if (this.add_trigger_form_step === 'trigger_configuration') {
            this.add_trigger_form_step = 'trigger_definition';
        } else if (this.add_trigger_form_step === 'trigger_schedule') {
            this.add_trigger_form_step = 'trigger_configuration';
        }

    }

    openSqlPopup() {
        this.showPopup = true;
        //this._util.checkModalPopup(true);
        //this._util.checkChangeModalPopup({modalHeader: 'SQL Query Builder', modalBody: '', triggeredFrom: 'SqlBuilder', modalFooterSave: '',modalFooterCancel:''});  
      }
    
    resetTrigger() {
        this.add_trigger_form_step = 'trigger_definition';
    }

    saveTrigger() {
        console.log(this.triggerForm.value)
        // $('.add-trigger-form-modal').modal('toggle');
    }
}