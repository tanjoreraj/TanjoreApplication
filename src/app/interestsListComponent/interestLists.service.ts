import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import 'rxjs/ass/operator/map';
import { map } from "rxjs/operators";
//import 'rxjs/add/operator/toPromise';

import { InterestLists } from '../shared/interestsList.model';

@Injectable()
export class InterestListsService {
    readonly baseUrl = 'http://localhost:3000/interestLists';

    constructor(private http: HttpClient) {

    }

    postInterestList(interestList: InterestLists){
        console.log(interestList);
        return this.http.post(this.baseUrl, interestList);
    }

    getInterestList() {
        return this.http.get(this.baseUrl);
    }

    deleteInterest(id) {
        console.log("id",id);
        return this.http.delete(this.baseUrl + `/${id}`);
    }

    updateInterest(interestDetails,id) {
        return this.http.delete(this.baseUrl + `/${id}`, interestDetails);
    }
}