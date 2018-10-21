import { Component, OnInit, OnDestroy } from '@angular/core';
//import {NgTree} from "ng.tree";
import { columnDef } from '../../assets/tableconfig/columnDef';
declare let $ : any;

export interface JQuery {
  collapse(options?: any): any;
}

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
  showSave: boolean;

public treeConfig : any = {
    dataMap:{
        children:"nodes"
    }
}

  constructor() { }

  ngOnInit() {
    this.sqlQuery = '';
    this.queryArray = [];
    this.mnemonicsFilter = this.mnemonicsData[0]['allData'];
    this.changeData = 'allData';
    this.mainTab = false;
    this.helperTab = false;
    this.mnemonicsTab = false;    
      $('#helperFx').on('show.bs.collapse', function () {
        console.log("collapse1");
        $('#mnemonicCollapse').collapse('hide');
      });

      $('#mnemonicCollapse').on('show.bs.collapse', function () {
        console.log("collapse2");
        $('#helperFx').collapse('hide');
      });
  }

  addQuery(value) {
    //this.sqlQuery = '';
   // if(value !== null && value !== undefined)
    this.sqlQuery += value + '\xa0';
    //this.queryArray.push(value);
    //this.sqlQuery = this.queryArray.join(' ');
  }

  helperQuery() {
    console.log("hi");
      console.log("hi");
        $(document).ready(function(){
          $('#helperFx').on('show.bs.collapse', function () {
            console.log("collapse1");
            $('#mnemonicCollapse').collapse('hide');
          });
        });
  }

  mnemonicsQuery() {
    console.log("hi1");
      console.log("hi1");
      $(document).ready(function(){
      $('#mnemonicCollapse').on('show.bs.collapse', function () {
        console.log("collapse2");
        $('#helperFx').collapse('hide');
      });
    });
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

  searchNodes(nodes) {
    console.log("console",nodes.srcElement.innerText);
    this.addQuery(nodes.srcElement.innerText);
  }

  validateQuery(value) {
    console.log("validate",value);
    this.showSave = true;
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
