import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormsModule, FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService } from '../shared/constants.service';
import { FormModelGenerator } from '../shared/form.modal.generator.service';
import * as $ from 'jquery';
declare var $ :any;

@Component({
  selector: 'app-filetransfer',
  templateUrl: './filetransfer.component.html',
  styleUrls: ['./filetransfer.component.css'],
  providers: [ConstantsService, FormModelGenerator]
})
export class FiletransferComponent implements OnInit {
  @Input('type') modalType: String;
    private fileTransferForm: FormGroup;
    private userGroupsList;
    private triggerTypes;
    private valueTypes;
    private constants;
    private isfileTransferFormValid: boolean;
    private triggerConfigurationModal;
    private triggerConfigurationFormData;
    private triggerConfigurationForm: FormGroup;
    noSpecialCharacters: any;
    allValues; 

    constructor(private _formBuilder: FormBuilder, private constantsService: ConstantsService, private formModalGenerator: FormModelGenerator) {
        this.constants = constantsService;

    }

    ngOnInit() {
        this.createtransferForm();
        this.userGroupsList = ["Tooling", "Tooling Admin", "DQ Admin", "CIIG Admin", "Super Admin"];
        this.triggerTypes = ["Schedule Trigger", "Manual Trigger", "DB Polling", "File Watcher"];
        this.valueTypes = [{ "key": "key1", "value": "value1" }, { "key": "key2", "value": "value2" }, { "key": "key3", "value": "value3" }];
        this.isfileTransferFormValid = true;
        this.noSpecialCharacters = "^[A-Za-z0-9*?' ]+$";
        $(document).ready(function() {
            $('[data-toggle="tooltip"]').tooltip({
                animated: 'fade',
                placement: 'bottom',
                html: true
            });
        })
    }

    createtransferForm() {
        this.fileTransferForm = this._formBuilder.group({
            name: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(50),Validators.pattern(this.noSpecialCharacters)]],
            userGroups: ['', Validators.required],
            description: [''],
            sourceFilePath: [''],
            sourceFileName: [''],
            sourceFileType:[''],
            connectionProfile:[''],
            destinationFilePath:[''],
            destinationFileName:[''],
            destinationFileType:[''],
            archivalPath:[''],
            renameConvention:[''],
            finalConnectionProfile:['']
        });
    }    

    triggerNextStep() {
      if (this.fileTransferForm.status.toUpperCase() == 'VALID') {
          this.isfileTransferFormValid = true;
      } else {
          this.isfileTransferFormValid = false;
          console.log(this.fileTransferForm);
      }

  }
    
   
    saveTransfer() {
        console.log(this.fileTransferForm)
        // $('.add-trigger-form-modal').modal('toggle');
    }
    resetTransfer() {
        this.fileTransferForm.reset();
    }

}

