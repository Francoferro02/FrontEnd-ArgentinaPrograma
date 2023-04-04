import { Component, OnInit } from '@angular/core';
import { ExperienciaLabo } from 'src/app/model/experiencia-labo';
import { ServiceExperienciaService } from 'src/app/service/service-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  expeL: ExperienciaLabo[] = [];

  constructor(
    private sExperiencia: ServiceExperienciaService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe((data) => {
      this.expeL = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert('No fue posible borrar la experiencia');
        }
      );
    }
  }
}
