import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class UtilService {

    constructor() {}

    public openModalPopup = new BehaviorSubject<boolean>(false);
    checkOpenModalPopup(value) {
        this.openModalPopup.next(value);
    }

    public changeModalPopup = new BehaviorSubject<Object>({});
    checkChangeModalPopup(value) {
    this.changeModalPopup.next(value);
  }
}