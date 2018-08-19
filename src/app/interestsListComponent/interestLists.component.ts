import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { InterestListsService } from './interestLists.service';
import { columnDef } from '../../assets/tableconfig/columnDef';

@Component({
    selector: 'app-interestLists',
    templateUrl: './interestLists.component.html',
    styleUrls: ['./interestLists.component.css']
})

export class InterestListsComponent implements OnInit {
    interestForm: FormGroup;
    interestMainList: any;
    cols: any;
    addNewInterestDialog: boolean = false;
    newInterest: boolean;
    interest: any;
    interestColumn :any[];
    selectedUserId: any;
    selectedUserDetails: any;

    constructor(private interestService: InterestListsService,
        private _formBuilder: FormBuilder) {}

    ngOnInit(){
        this.getInterestList();
        this.createInterestForm();
        this.cols = columnDef.interestListsColumnDef;
    }

    showDialogToAdd() {
        this.newInterest = true;
        this.addNewInterestDialog = true;
    }

    /*save() {
        let cars = [...this.cars];
        if (this.newInterest)
            cars.push(this.car);
        else
            cars[this.cars.indexOf(this.selectedCar)] = this.car;

        this.cars = cars;
        this.car = null;
        this.addNewInterestDialog = false;
    }*/

    //delete() {
        /*let index = this.cars.indexOf(this.selectedCar);
        this.cars = this.cars.filter((val, i) => i != index);
        this.car = null;*/
       // this.createForm();
     //   this.addNewInterestDialog = false;
    //}

    onRowSelect(event) {
        console.log(event);
        this.newInterest = false;
        this.interest = this.cloneInterestColumn(event.data);
        this.addNewInterestDialog = true;
    }

    cloneInterestColumn(c) {
        this.interestForm = this._formBuilder.group({
            sno: [c.sno],
            name: [c.name],
            amount: [c.amount],
            date: [c.date],
            interest: [c.interest],
            interestPerMonth: [c.interestPerMonth]
        });
    }

    /*onRowSelect(event) {
        this.newInterest = false;
        this.car = this.cloneCar(event.data);
        this.addNewInterestDialog = true;
    }

    cloneUser(c: Car): Car {
        let car = {};
        for (let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }*/

    getInterestList() {
        this.interestService.getInterestList().subscribe(value => {
            this.interestMainList = value;
            console.log("userlist",value);
        })
    }

    createInterestForm(){
        this.interestForm = this._formBuilder.group({
            sno: [''],
            name: [''],
            amount: [''],
            date: [''],
            interest: [''],
            interestPerMonth: ['']
        });
    }

    saveSelectedInterest(){
        this.interestService.postInterestList(this.interestForm.value).subscribe(response => {
            console.log("response",response);
            this.getInterestList();
        })
        this.addNewInterestDialog = false;
    }

    deleteSelectedInterest(userName) {
        this.interestMainList.filter(value => { if(userName === value.first_name) { this.selectedUserId = value._id; } });
        this.interestService.deleteInterest(this.selectedUserId).subscribe(response => {
            if(response) {
                this.addNewInterestDialog = false;
                this.getInterestList();
            }
        });
    }

    updateSelectedInterest(userName) {
        this.interestMainList.filter(value => { if(userName === value.first_name) { this.selectedUserDetails = value; } });
        this.interestService.updateInterest(this.selectedUserDetails,this.selectedUserDetails._id).subscribe(response => {
            if(response) {
                this.addNewInterestDialog = false;
                this.getInterestList();
            }
        });
    }
}