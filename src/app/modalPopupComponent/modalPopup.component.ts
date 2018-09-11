import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UtilService } from '../shared/utilService';

@Component({
    selector: 'app-modalPopup',
    templateUrl: './modalPopup.component.html',
    styleUrls: ['./modalPopup.component.css']
})

export class ModalPopupComponent implements OnInit,OnDestroy {
    visible: boolean = false;
    @Input() myChildData;
    popUp:boolean = false;
    sub: any;
    constructor(private _util: UtilService) {}

    ngOnInit(){
        console.log(this.myChildData);
        this.sub = this._util.openModalPopup.subscribe(value => {
            this.popUp = value;
        });
    }

    closePopUp() {
        this.popUp = false;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    /*visible:boolean =false;
changeContent : any;
modalHeader: any;

//this._util.checkChangeModalPopup({modalHeader: 'Configure', triggeredFrom: 'ScheduledTrigger'});

  constructor(private _util: utilService) { }

  ngOnInit() {
    this._util.modalPopup.subscribe(value =>{
      this.visible = value;
    });
    this._util.changeModalPopup.subscribe(value=>{
    if (value)this.changeContent = value;
    })

  }

  close(){
    this.visible = false;
  }*/
}