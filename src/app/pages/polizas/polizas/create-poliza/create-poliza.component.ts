import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Poliza } from './../model/poliza.model'
import { PolizaService } from './../../../../services/poliza.service'

interface Product{
    value:number,
    viewValue:string
}

@Component({
    selector: 'app-create-poliza',
    templateUrl: './create-poliza.component.html',
    styleUrls: ['./create-poliza.component.css']
})
export class CreatePolizaComponent{
    id:number = 0;
    data: Poliza;
    // selectedValue:number;

    constructor(private router:Router, private route:ActivatedRoute, private polizaService: PolizaService ) { 
        this.data={
            idPoliza:0,
            cantidad:0,
            cliente:"",
            empleadoGenero:{"nombre":"","username":"","apellido":""},
            fecha:new Date(),
            detalleArticulo:{"nombre":"","sku":0,"cantidad":0}            
        }
    }
    ngOnInit(){
        const id = this.route.snapshot.paramMap.get("idPoliza");        
        if(id){
            this.id = +id;            
            this.polizaService.get(this.id).subscribe(res=>{                
                console.log("aquiiii ",res)
                    this.data={
                        idPoliza : res.idPoliza,
                        cantidad : res.cantidad,
                        cliente  : res.cliente,
                        empleadoGenero : res.empleadoGenero,
                        fecha : res.fecha,
                        detalleArticulo : res.detalleArticulo
                    }                                        
                },
                error=>{
                    console.log(error);
            })
        }else{
            this.id = 0;
        }
    }

    guardar(data:any){
        // console.log("asdsa "+ JSON.stringify(data));
        // {"product":200200,"cantidad":"1","cliente":"José"}
        this.data = data;
        this.data.idPoliza = this.id;
        this.data.fecha = new Date();
        this.data.empleadoGenero = {"username":"hmma","nombre":"Hector","apellido":"Murillo"}
        if(this.id == 0){
            this.polizaService.create(this.data)
            .subscribe(response=>{
                console.log(response);
                this.router.navigate(['/'])
            },
            error=>{
                console.log(error);
            });
        }
    }

    products:Product[]=[
        {value:200200,viewValue:'ventilador'},
        {value:200201,viewValue:'ventilador de techo'}
    ];
}
