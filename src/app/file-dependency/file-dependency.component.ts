import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormsModule, FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-file-dependency',
  templateUrl: './file-dependency.component.html',
  styleUrls: ['./file-dependency.component.css']
})
export class FileDependencyComponent implements OnInit {


  @Input('type') modalType: String;
  private fileTransferForm: FormGroup;
  private userGroupsList;
  private triggerTypes;
  private SourceFileTypeList;
  private destinationFileType;
  private triggerValueTypes;
  private transferValueTypes;
  private workloadValueTypes;
  private constants;
  private transfer ;
  private trigger;
  private workload;
  private valueIndex;
  private isfileTransferFormValid: boolean;
  private triggerConfigurationModal;
  private triggerConfigurationFormData;
  private triggerConfigurationForm: FormGroup;

  noSpecialCharacters: any;
  allValues;
  triggerValues;


  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

    ngOnInit() {
        this.createtransferDependencyForm();
            
        this.destinationFileType = ["Tooling", "Tooling Admin", "DQ Admin", "CIIG Admin", "Super Admin"];
        this.transfer = ["Tooling", "Tooling Admin", "DQ Admin", "CIIG Admin", "Super Admin"];
        this.trigger = ["Schedule Trigger", "Manual Trigger", "DB Polling", "File Watcher"];
        this.workload = ["worload1","worload2","worload3"];
        this.triggerValueTypes = ["Schedule Trigger"];
        this.transferValueTypes = ["Tooling"];
        this.workloadValueTypes = ["workload1"];
        this.isfileTransferFormValid = true;
        this.noSpecialCharacters = "^[A-Za-z0-9_' ]+$";
        
    }

    add(value,name) {
        console.log(value,name);
        if(name !== null && name !== undefined){
            if(name === 'transferName') {
                this.transferValueTypes.push(value);
            } else if(name === 'triggerName') {
                this.triggerValueTypes.push(value);
            } else if(name === 'workloadName') {
                this.workloadValueTypes.push(value);
            }
        }
    }

    delete(value,name) {
        console.log(value,name);
        if(name !== null && name !== undefined){
            if(name === 'transferName') {
                this.valueIndex = this.transferValueTypes.indexOf(value);
                this.transferValueTypes.splice(this.valueIndex, 1);
            } else if(name === 'triggerName') {
                this.valueIndex = this.transferValueTypes.indexOf(value);
                this.triggerValueTypes.splice(this.valueIndex, 1);
            } else if(name === 'workloadName') {
                this.valueIndex = this.transferValueTypes.indexOf(value);
                this.workloadValueTypes.splice(this.valueIndex, 1);
            }
        }    
    }

    createtransferDependencyForm() {
        this.fileTransferForm = this._formBuilder.group({
            transfer: [''],
            trigger: [''],
            workload: [''],
        });

        if (this.route.snapshot.paramMap.get('id') != null) {
            // this.triggerDefinitionForm.controls['name'].setValue(editTriggerData.triggerName + this.route.snapshot.paramMap.get('id'));
            // this.triggerDefinitionForm.controls['triggerType'].setValue(editTriggerData.triggerType);
            // this.triggerDefinitionForm.controls['userGroups'].setValue(editTriggerData.userGroups);
            // this.triggerDefinitionForm.controls['isActive'].setValue(editTriggerData.isActive);
            // this.triggerDefinitionForm.controls['description'].setValue(editTriggerData.description + this.route.snapshot.paramMap.get('id'));
        }
    }
    
    saveTransferDependency() {
        if (this.fileTransferForm.status.toUpperCase() == 'VALID') {
            this.isfileTransferFormValid = true;
        } else {
            this.isfileTransferFormValid = false;
        }
        console.log(this.fileTransferForm.value);

    }
    resetTransferDependency () {
        this.fileTransferForm.reset();
    }

}

