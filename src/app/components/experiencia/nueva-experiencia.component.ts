import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLabo } from 'src/app/model/experiencia-labo';
import { ServiceExperienciaService } from 'src/app/service/service-experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  nombreE:string='';
  descripcionE:string='';
  constructor(private sExperiencia:ServiceExperienciaService,private router:Router) {}

  ngOnInit(): void {  
  }
  onCreate(): void {
    const expel = new ExperienciaLabo(this.nombreE,this.descripcionE);
    this.sExperiencia.save(expel).subscribe(
      data=>{
        alert("Experiencia añadida correctamente")
        this.router.navigate(['']);
      },err =>{
        alert("Fail");
        this.router.navigate(['']);
      }
         
    ) 
  }
}
