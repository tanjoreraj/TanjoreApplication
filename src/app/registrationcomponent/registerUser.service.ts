import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import 'rxjs/ass/operator/map';
import { map } from "rxjs/operators";
//import 'rxjs/add/operator/toPromise';

import { RegisterUsers } from '../shared/registerUser.model';

@Injectable()
export class UserRegistrationService {
    selectedUser: RegisterUsers;
    users: RegisterUsers[];
    readonly baseUrl = 'http://localhost:3000/registerUsers';

    constructor(private http: HttpClient) {

    }

    postusersList(usersList: RegisterUsers){
        console.log(usersList);
        return this.http.post(this.baseUrl, usersList);
    }

    getusersList() {
        return this.http.get(this.baseUrl);
    }
}