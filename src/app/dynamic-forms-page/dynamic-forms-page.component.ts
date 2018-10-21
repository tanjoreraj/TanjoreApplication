import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormsModule, FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute, Router, CanDeactivate } from '@angular/router';
import { ConstantsService } from '../shared/constants.service';
import { FormModelGenerator } from '../shared/form.modal.generator.service';
import { DataService, Person } from '../shared/data';
import { map } from 'rxjs/operators';
import { UnsavedChangesGuard } from '../shared/unsaved-changes-guard.service';
import * as $ from 'jquery';
import { TreeDropdownModule } from 'ng-tree-dropdown';

@Component({
    selector: 'app-dynamic-forms-page',
    templateUrl: './dynamic-forms-page.component.html',
    styleUrls: ['./dynamic-forms-page.component.css'],
    providers: [ConstantsService, FormModelGenerator, UnsavedChangesGuard],
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
export class DynamicFormsPageComponent implements OnInit {

    @Input('type') modalType: String;
    private triggerDefinitionForm: FormGroup;
    private add_trigger_form_step: String;
    private userGroupsList;
    private triggerTypes;
    private valueTypes;
    private constants;
    private istriggerDefinitionFormValid: boolean;
    private triggerConfigurationModal;
    private triggerConfigurationFormData;
    private triggerConfigurationForm: FormGroup;
    people: Person[] = [];
    allValues: any;
    nextStateUrl;
    treeData: Array<any>;
    dropdownSelectedData: Array<any> = new Array<any>();

    constructor(private _formBuilder: FormBuilder, private constantsService: ConstantsService, private formModalGenerator: FormModelGenerator,private dataService: DataService) {
        this.constants = constantsService;
    }

    ngOnInit() {
        this.createTriggerDefinitionForm();
        this.dataService.getPeople()
        .pipe(map(x => x.filter(y => !y.disabled)))
        .subscribe((res) => {
            this.userGroupsList = res;
           // this.selectedPeople = [this.people[0].id, this.people[1].id];
        });

        this.add_trigger_form_step = 'trigger_definition';
        //this.userGroupsList = ["Tooling", "Tooling Admin", "DQ Admin", "CIIG Admin", "Super Admin"];
        this.triggerTypes = ["Schedule Trigger", "Manual Trigger", "DB Polling", "File Watcher"];
        this.valueTypes = [{ "key": "key1", "value": "value1" }, { "key": "key2", "value": "value2" }, { "key": "key3", "value": "value3" }];
        this.istriggerDefinitionFormValid = true;

        this.nextStateUrl = '/fileTransfer';

        this.treeData = [
            {
              id: 0, name: 'tree 1', childData: [
                {id: 1, name: 'child 1', childData:[]},
                {id: 2, name: 'child 2', childData:[
                  {id: 3, name: 'subChild 1', childData:[]}
                ]}
              ]
            },
            {
              id: 4, name: 'tree 2', childData: [
                {id: 5, name: 'child 3', childData:[]},
                {id: 6, name: 'child 4', childData:[]}
              ]
            },
            {
              id: 7, name: 'tree 3', childData: []
            }
          ]
    }

    onDataSelection(data: any) {
        console.log("data",data);
        this.dropdownSelectedData = data;
    
      }

    groupByFn(item) {
        console.log("item",item);
    }

    createTriggerDefinitionForm() {
        this.triggerDefinitionForm = this._formBuilder.group({
            name: ['', Validators.required],
            description: [''],
            isActive: [''],
            userGroups: ['', Validators.required],
            triggerType: ['', Validators.required],
            cronExpression: [''],
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

    createTriggerConfigurationForm(triggerType) {

        if (this.triggerDefinitionForm.value.triggerType == 'Schedule Trigger') {
            this.triggerConfigurationModal = this.formModalGenerator.getScheduleTriggerForm();
        } else if (this.triggerDefinitionForm.value.triggerType == 'DB Polling') {
            this.triggerConfigurationModal = this.formModalGenerator.getDbPollingTriggerForm();
        } else if (this.triggerDefinitionForm.value.triggerType == 'Manual Trigger') {
            this.triggerConfigurationModal = this.formModalGenerator.getManualTriggerForm();
        } else if (this.triggerDefinitionForm.value.triggerType == 'File Watcher') {
            this.triggerConfigurationModal = this.formModalGenerator.getFileWatcherTriggerForm();
        }

        this.triggerConfigurationFormData = Object.keys(this.triggerConfigurationModal)
            .map(prop => {
                return Object.assign({}, { key: prop }, this.triggerConfigurationModal[prop]);
            }
            )

        console.log('Custom Form data');
        console.log(this.triggerConfigurationModal);

        const formGroup = {};
        for (let prop of Object.keys(this.triggerConfigurationModal)) {
            formGroup[prop] = new FormControl(this.triggerConfigurationModal[prop].value || '', this.mapValidators(this.triggerConfigurationModal[prop].validation));
        }

        console.log('created form group');
        console.log(formGroup);

        this.triggerConfigurationForm = new FormGroup(formGroup);

    }

    triggerNextStep() {

        if (this.triggerDefinitionForm.status.toUpperCase() == 'VALID') {

            this.istriggerDefinitionFormValid = true;

            if (this.add_trigger_form_step === 'trigger_definition') {

                this.createTriggerConfigurationForm(this.triggerDefinitionForm.value.triggerType);
                this.add_trigger_form_step = 'trigger_configuration';

            } else if (this.add_trigger_form_step === 'trigger_configuration') {

                this.add_trigger_form_step = 'trigger_schedule';

            }
        } else {
            this.istriggerDefinitionFormValid = false;
            console.log(this.triggerDefinitionForm);
        }

    }

    mapValidators(validators) {
        const formValidators = [];

        if (validators) {
            for (const validation of Object.keys(validators)) {
                if (validation == 'required') {
                    formValidators.push(Validators.required);
                } else if (validation == 'min') {
                    formValidators.push(Validators.minLength);
                }
            }
        }

        return formValidators;

    }

    triggerPreviousStep() {

        if (this.add_trigger_form_step === 'trigger_configuration') {
            this.add_trigger_form_step = 'trigger_definition';
        } else if (this.add_trigger_form_step === 'trigger_schedule') {
            this.add_trigger_form_step = 'trigger_configuration';
        }

    }

    resetTrigger() {
        this.add_trigger_form_step = 'trigger_definition';
    }

    saveTrigger() {
        console.log(this.triggerDefinitionForm.value)
        // $('.add-trigger-form-modal').modal('toggle');
    }

    add(value) {
        console.log(value);
        /*this.allValues = {"key": key,"value": value};
        this.valueTypes.push(this.allValues);
        this.triggerDefinitionForm.controls['key'].setValue('');
        this.triggerDefinitionForm.controls['values'].setValue('');*/
      }
    
      delete(key) {
        console.log(key);
        this.valueTypes.filter(value => {
          if(key === value.key) {
            this.valueTypes.splice(this.valueTypes.indexOf(value), 1);
          }
        });
    }

    canDeactivate() {
        console.log("yes");
        if (this.triggerDefinitionForm.dirty) {
          const data = {
            url: this.nextStateUrl
          };
          $("#myModal").click();
          //this._utilService.changePreventUnsaveChange(data);
          return false;
        } else {
          return true;
        }
      }
}