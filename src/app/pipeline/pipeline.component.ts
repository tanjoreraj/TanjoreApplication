import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormsModule, FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService } from '../shared/constants.service';
import { FormModelGenerator } from '../shared/form.modal.generator.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css'],
  providers: [ConstantsService, FormModelGenerator]
})
export class PipelineComponent implements OnInit {

    @Input('type') modalType: String;
    private pipelineForm: FormGroup;
    private userGroupsList;
    private pipelineTypeList;
    private pipelineTargetList;
    private destinationFileType;
    private valueTypes;
    private constants;
    private ispipelineFormValid: boolean;
    private triggerValueTypes;
    private transferValueTypes;
    private workloadValueTypes;
    private transfer ;
    private trigger;
    private workload;
    private valueIndex;
    private triggerTab;
    private transferTab;
    private createNewObj;


    noSpecialCharacters: any;
    allValues;

    constructor(private _formBuilder: FormBuilder, private constantsService: ConstantsService, private formModalGenerator: FormModelGenerator, private route: ActivatedRoute) {
        this.constants = constantsService;

    }

    ngOnInit() {
        this.createtransferForm();
        

        this.destinationFileType = ["Tooling", "Tooling Admin", "DQ Admin", "CIIG Admin", "Super Admin"];
        this.pipelineTargetList = ["Tooling", "Tooling Admin", "DQ Admin", "CIIG Admin", "Super Admin"];
        this.pipelineTypeList = ["File Transfer", "Workflow"];
        this.transfer = ["Tooling", "Tooling Admin", "DQ Admin", "CIIG Admin", "Super Admin"];
        this.trigger = ["Schedule Trigger", "Manual Trigger", "DB Polling", "File Watcher"];
        this.workload = ["worload1","worload2","worload3"];
        this.triggerValueTypes = [{name:"Schedule Trigger",triggerOrder: "22",triggerNames: "Schedule Trigger"}];
        this.transferValueTypes = [{name:"Tooling",transferOrder: "2",transferNames: "Tooling"}];
        this.workloadValueTypes = ["workload1"];
        this.ispipelineFormValid = true;
        this.noSpecialCharacters = "^[A-Za-z0-9_' ]+$";

        /*var hintsParam = this.commonServices.getUrlParam('hints');
         if (hintsParam != null && hintsParam == 'true') {
            this.setupAndStartHints();
         }*/
    }

    pipeLineTypeCheck(value) {
        console.log("hi");
        if(value === 'File Transfer') {
            this.triggerTab = true;
        } else {
            this.transferTab = true;
            this.triggerTab = true;
        }
    }

    add(name) {
        if(name !== null && name !== undefined){
            if(name === 'transfer') {
                this.createNewObj = {name:this.pipelineForm.controls.transfer.value,transferOrder: this.pipelineForm.controls.transferOrder.value,transferNames: this.pipelineForm.controls.transferNames.value};
                this.transferValueTypes.push(this.createNewObj);
                console.log(this.transferValueTypes);
            } else {
                this.createNewObj = {name:this.pipelineForm.controls.trigger.value,triggerOrder: this.pipelineForm.controls.triggerOrder.value,triggerNames: this.pipelineForm.controls.triggerNames.value};
                this.triggerValueTypes.push(this.createNewObj);
            }
        }
    }

    delete(value,name) {
        if(name !== null && name !== undefined){
            if(name === 'transfer') {
              console.log("trasnfer");
                this.valueIndex = this.transferValueTypes.indexOf(value);
                this.transferValueTypes.splice(this.valueIndex, 1);
            } else {
              console.log("trasnfersdfds");
                this.valueIndex = this.transferValueTypes.indexOf(value);
                this.triggerValueTypes.splice(this.valueIndex, 1);
            }
        }    
    }

    createtransferForm() {
        this.pipelineForm = this._formBuilder.group({
            name: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(50),Validators.pattern(this.noSpecialCharacters)]],
            description: [''],
            pipelineType: [''],
            PipelineTarget: [''],
            trigger: [''],
            triggerOrder: [''],
            triggerNames: [''],
            transfer: [''],
            transferOrder: [''],
            transferNames: ['']
        });

        if (this.route.snapshot.paramMap.get('id') != null) {
            // var editTransferData = this.backendServices.getTransferData();
            // this.triggerDefinitionForm.controls['name'].setValue(editTriggerData.triggerName + this.route.snapshot.paramMap.get('id'));
            // this.triggerDefinitionForm.controls['triggerType'].setValue(editTriggerData.triggerType);
            // this.triggerDefinitionForm.controls['userGroups'].setValue(editTriggerData.userGroups);
            // this.triggerDefinitionForm.controls['isActive'].setValue(editTriggerData.isActive);
            // this.triggerDefinitionForm.controls['description'].setValue(editTriggerData.description + this.route.snapshot.paramMap.get('id'));
        }
    }    
   

    
    savePipeline() {
        if (this.pipelineForm.status.toUpperCase() == 'VALID') {
            this.ispipelineFormValid = true;
        } else {
            this.ispipelineFormValid = false;
        }
        console.log(this.pipelineForm.value);

    }
    resetPipeline() {
        this.pipelineForm.reset();
    }
    /*setupAndStartHints() {
        var enjoyHintSteps = [
            {
                selector: '#pipelineNameInp',
                event_type: 'next',
                // event: 'click',
                description: 'Click here to enter file pipeline name',
            },
             {
                selector: '#pipelineTypeSel',
                event_type: 'next',
                description: 'Click here to select pipeline type',
            },
            {
                selector: '#pipelineTargetSel',
                event_type: 'next',
                description: 'Click here to enter pipeline target',
            },
            {
                selector: '#pipelineTriggerSel',
                event_type: 'next',
                description: 'Click here to enter pipeline trigger',
            },
            {
                selector: '#pipelineWorkloadSel',
                event_type: 'next',
                description: 'Click here to enter pipeline workload',
            },          
            {
                selector: '#savePipelineBtn',
                // event_type: 'next',
                event: 'click',
                description: 'Click here to save pipeline',
            },         
        ];
        //@ts-ignore
        var enjoyHintInstance = new EnjoyHint({});
        enjoyHintInstance.set(enjoyHintSteps);
        enjoyHintInstance.run();
       }*/
}


