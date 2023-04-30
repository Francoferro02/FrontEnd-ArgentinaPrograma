import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Proyect } from 'src/app/model/proyect';
import { ImageService } from 'src/app/service/image.service';
import { ProyectService } from 'src/app/service/proyect.service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent implements OnInit{
  nombre: string;
  descripcion: string;
  img:string;

  constructor(private proyectS:ProyectService,private router:Router,private activatedRouter:ActivatedRoute,public imageService:ImageService){}
  
  ngOnInit(): void {
    
  }
  onCreate(): void {
    const proyect = new Proyect(this.nombre,this.descripcion,this.img);
    this.proyectS.save(proyect).subscribe(
      data=>{
        alert("Proyecto añadido correctamente")
        this.router.navigate(['']);
      },err =>{
        alert("Fallo al agregar el proyecto");
        this.router.navigate(['']);
      }
    ) 
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imageService.uploadImage($event,name)
  }
}
