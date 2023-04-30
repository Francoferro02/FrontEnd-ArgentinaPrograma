import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyect } from 'src/app/model/proyect';
import { ImageService } from 'src/app/service/image.service';
import { ProyectService } from 'src/app/service/proyect.service';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent implements OnInit{
  proyect:Proyect = null;
  constructor(private activatedRouter:ActivatedRoute,private proyectoS:ProyectService,private router:Router,public imageService:ImageService){

  }
  
  ngOnInit(): void {
   const id = this.activatedRouter.snapshot.params['id'];
   this.proyectoS.detail(id).subscribe(
    data => {
      this.proyect = data;
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    }
   )
  }
  
  onUpdate(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.proyect.img = this.imageService.url
  this.proyectoS.update(id,this.proyect).subscribe(
    data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar el proyecto");
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
