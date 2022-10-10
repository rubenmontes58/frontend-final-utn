




import { Component, OnInit } from '@angular/core';
import { Figuritas } from 'src/app/model/Figuritas';
import { DataService } from 'src/app/shared/data.service';
import { ToastrService } from 'ngx-toastr';
import { pairs } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  figu: Figuritas = {
    _id: '',
    pais: '',
    numerofigu: '',
    cantidad: '',
    descripcion: '',
    contacto: '',
    

  };
  _id : string = '';
  pais: string = '';
  numerofigu: string = '';
  cantidad: string ='' ;
  descripcion: string = '';
  contacto: string = '';

  allFiguritas: Figuritas[] = [];

  constructor(private   dataService: DataService, private toastr: ToastrService,public auth: AuthService) {}

  miFormulario= new FormGroup({
    pais: new FormControl('',Validators.required),
    numerofigu: new FormControl('',Validators.required),
    cantidad: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    contacto: new FormControl('',Validators.required),
    
  })

    
    public enviarFormulario: boolean = true;

  ngOnInit(): void {

  







     

    this._id = '';
    this.pais = '';
    this.numerofigu = '';
    this.cantidad = '';
    this.descripcion = '';
    this.contacto = '';
    
    this.allFiguritas = [];
    this.getAllFiguritas();
  }


  logout(){
    this.auth.logout(); 
  }



  getAllFiguritas() {
    this.dataService.getAllFiguritas().subscribe(
      (res) => {
        this.allFiguritas = res;
      },
      (err) => {
        console.log(err);
      }
    );


    
  }




  getFigusById(id : string) {
    this.dataService.getFigusById(id).subscribe(
      (res) => {
        this.figu = res;
        this._id = res._id;
        this.pais = res.pais;
        this.numerofigu = res.numerofigu;
        this.cantidad = res.cantidad;
        this.descripcion = res.descripcion;
        this.contacto = res.contacto;
       
      },

      (err) => {
        console.log(err);
      }
    );
  }


  deleteFiguritaById(id : string) {
    this.dataService.deleteFiguritaById(id).subscribe(
      (res) => {
        this.toastr.success('Figurita eliminada con exito', 'Figurita eliminada');
        this.getAllFiguritas();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateFiguritas() {
    this.figu._id = this._id;
    this.figu.pais = this.pais;
    this.figu.numerofigu = this.numerofigu;
    this.figu.cantidad = this.cantidad;
    this.figu.descripcion = this.descripcion;
    this.figu.contacto = this.contacto;
  
    this.dataService.updateFiguritas(this._id, this.figu).subscribe(
      (res) => {
        this.toastr.success('Figurita actualizada con exito', 'Figurita actualizada');
        this.getAllFiguritas();
      }

    );
  }
  


  createFiguritas() {


    this.figu.pais = this.pais;
    this.figu.numerofigu = this.numerofigu;
    this.figu.cantidad = this.cantidad;
    this.figu.descripcion = this.descripcion;
    this.figu.contacto = this.contacto;
    
    this.dataService.createFiguritas(this.figu).subscribe(
      (res) => {
        this.toastr.success('Figurita creada con exito', 'Figurita creada');
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );




   
  }
}









