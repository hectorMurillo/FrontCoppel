import { Component, Inject, OnInit } from '@angular/core';
// import { MatDialogConfig } from '@angular/material/dialog';
import { LoginService } from '../../../services/login.service';
import { MatTableDataSource } from '@angular/material/table';
// import Swal from 'sweetalert2';
import { PolizaService } from 'src/app/services/poliza.service';
import { Observable } from 'rxjs';
// import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


export interface dataElements {
 idPoliza: string;
  position: number;
  weight: number;
  symbol: string;
}

let ELEMENT_DATA: dataElements[]=[]; 


@Component({
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css']
})
export class PolizasComponent implements OnInit {
  isLogged = false;
  dataSource:any;

  ngOnInit(): void {
    this.isLogged = this.login.isLoggedIn();    
    ELEMENT_DATA = [];
    this.polizaService.getAll().subscribe((data:any)=>{
        ELEMENT_DATA = data;        
    });        
  }


  displayedColumns: string[] = ['idPoliza', 'empleadoGenero', 'fecha', 'cantidad','sku','acciones'];
//   displayedColumns: string[] = ['idPoliza',"empleadoGenero"];
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public login:LoginService, private polizaService: PolizaService) { 
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);        
    }, 1000);
  }  
}