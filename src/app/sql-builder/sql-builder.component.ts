import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgTree} from "ng.tree";
import { columnDef } from '../../assets/tableconfig/columnDef';

@Component({
  selector: 'app-sql-builder',
  templateUrl: './sql-builder.component.html',
  styleUrls: ['./sql-builder.component.css']
})
export class SqlBuilderComponent implements OnInit, OnDestroy {
  sqlQuery: any;
  queryArray: any[];
  helperTab = false;
  mnemonicsTab = false;
  QueryTabSelection: boolean;
  helperData = columnDef.helperData;
  mnemonicsData = columnDef.mnemonicsData;
  searchHelper: any;
  searchMnemonics: any;
  public treeData: any[] = columnDef.treeStructure;
  helperDescription: any;
  mnemonicsFilter: any;
  mnemonicsSelectedData: any;
  changeData :any;
  sqlBtns = columnDef.sqlButtons;
  mainTab: boolean;



public treeConfig : any = {
    dataMap:{
        children:"nodes"
    }
}

  constructor() { }

  ngOnInit() {
    this.sqlQuery = null;
    this.queryArray = [];
    this.mnemonicsFilter = this.mnemonicsData[0]['allData'];
    this.changeData = 'allData';
    this.mainTab = false;
    this.helperTab = false;
    this.mnemonicsTab = false;
  }

  addQuery(value) {
    this.sqlQuery = null;
    this.queryArray.push(value);
    this.sqlQuery = this.queryArray.join(' ');
  }

  helperQuery() {
    this.mainTab = true;
    this.helperTab = !this.helperTab;
    this.mnemonicsTab = false;
  }

  mnemonicsQuery() {
    this.mainTab = true;
    this.mnemonicsTab = !this.mnemonicsTab;
    this.helperTab = false;
  }

  helperSelection(value) {
    console.log("value",value);
    this.helperData.filter(item => value === item.name ? this.helperDescription = item.description: '');
    console.log("this.helperDescription",this.helperDescription);
  }

  mnemonicsTabSelection(value) {
    this.mnemonicsFilter = this.mnemonicsData[0][value];
    this.changeData = value;
  }

  mnemonicsSelection(value) {
    this.mnemonicsFilter.filter(item => value === item.name ? this.mnemonicsSelectedData = item: '');
  }

  validateQuery(value) {
    console.log("validate",value);
  }

  clearQuery() {
    console.log("clear");
    this.sqlQuery = null;
    this.queryArray.length = 0;
  }

  ngOnDestroy() {
    console.log('destroy');
  }

}
