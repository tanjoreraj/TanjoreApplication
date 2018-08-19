import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { UserRegistrationService } from './registerUser.service';
import { columnDef } from '../../assets/tableconfig/columnDef';

@Component({
    selector: 'app-registeruser',
    templateUrl: './registerUser.component.html',
    styleUrls: ['./registerUser.component.css']
})

export class UserRegistrationComponent implements OnInit {
    userForm: FormGroup;
    usersList: any;
    cols: any;
    addNewUserDialog: boolean = false;
    newUser: boolean;
    user: any;
    selectedUser :any[];
    selectedUserId: any;
    selectedUserDetails: any;
    //cars: usersList[];

    constructor(private registerService: UserRegistrationService,
        private _formBuilder: FormBuilder) {}

    ngOnInit(){
        this.getUsers();
        this.createForm();
        this.cols = columnDef.registerColumnDef;
    }

    showDialogToAdd() {
        this.newUser = true;
        this.addNewUserDialog = true;
    }

    /*save() {
        let cars = [...this.cars];
        if (this.newUser)
            cars.push(this.car);
        else
            cars[this.cars.indexOf(this.selectedCar)] = this.car;

        this.cars = cars;
        this.car = null;
        this.addNewUserDialog = false;
    }*/

    //delete() {
        /*let index = this.cars.indexOf(this.selectedCar);
        this.cars = this.cars.filter((val, i) => i != index);
        this.car = null;*/
       // this.createForm();
     //   this.addNewUserDialog = false;
    //}

    onRowSelect(event) {
        console.log(event);
        this.newUser = false;
        this.user = this.cloneUser(event.data);
        this.addNewUserDialog = true;
    }

    cloneUser(c) {
        this.userForm = this._formBuilder.group({
            first_name: [c.first_name],
            last_name: [c.last_name],
            age: [c.age],
            phone_no: [c.phone_no],
            email: [c.email]
        });
    }

    /*onRowSelect(event) {
        this.newUser = false;
        this.car = this.cloneCar(event.data);
        this.addNewUserDialog = true;
    }

    cloneUser(c: Car): Car {
        let car = {};
        for (let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }*/

    getUsers() {
        this.registerService.getusersList().subscribe(value => {
            this.usersList = value;
            console.log("userlist",value);
        })
    }

    createForm(){
        this.userForm = this._formBuilder.group({
            first_name: [''],
            last_name: [''],
            age: [''],
            phone_no: [''],
            email: ['']
        });
    }

    saveSelectedUser(){
        this.registerService.postusersList(this.userForm.value).subscribe(response => {
            console.log("response",response);
            this.getUsers();
        })
        this.addNewUserDialog = false;
    }

    deleteSelectedUser(userName) {
        this.usersList.filter(value => { if(userName === value.first_name) { this.selectedUserId = value._id; } });
        this.registerService.deleteUser(this.selectedUserId).subscribe(response => {
            if(response) {
                this.addNewUserDialog = false;
                this.getUsers();
            }
        });
    }

    updateSelectedUser(userName) {
        this.usersList.filter(value => { if(userName === value.first_name) { this.selectedUserDetails = value; } });
        this.registerService.updateUser(this.selectedUserDetails,this.selectedUserDetails._id).subscribe(response => {
            if(response) {
                this.addNewUserDialog = false;
                this.getUsers();
            }
        });
    }
}