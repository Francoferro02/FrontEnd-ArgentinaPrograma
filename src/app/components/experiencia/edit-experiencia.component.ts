import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLabo } from 'src/app/model/experiencia-labo';
import { ServiceExperienciaService } from 'src/app/service/service-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
  expLab:ExperienciaLabo = null;
  constructor(private sExperiencia:ServiceExperienciaService,private activatedRouter:ActivatedRoute,private router:Router){}

  ngOnInit(): void {  
  const id = this.activatedRouter.snapshot.params['id'];
  this.sExperiencia.detail(id).subscribe(
    data =>{
      this.expLab = data;
    }, err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    }
  )
  }
   
  onUpdate(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.sExperiencia.update(id,this.expLab).subscribe(
    data => {
       this.router.navigate(['']);
  }, err => {
    alert("Error al modificar experiencia");
    this.router.navigate(['']);
  })
  }
}
