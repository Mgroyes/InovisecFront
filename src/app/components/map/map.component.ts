import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CaseMarker{

  id:number;

  title:string;

  description:string;

  date:string;

  top:number;

  left:number;

}

@Component({
  selector:'app-map',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./map.component.html',
  styleUrl:'./map.component.scss'
})
export class MapComponent{

  selectedCase?:CaseMarker;

  markers: CaseMarker[] = [

  {
    id:1,
    title:'Caso #001',
    description:'Accidente vehicular',
    date:'09 Jul 2026',
    top:32,
    left:44
  },

  {
    id:2,
    title:'Caso #002',
    description:'Incendio estructural',
    date:'10 Jul 2026',
    top:56,
    left:61
  },

  {
    id:3,
    title:'Caso #003',
    description:'Alerta ciudadana',
    date:'10 Jul 2026',
    top:40,
    left:73
  }

];

show(marker:CaseMarker){

   this.selectedCase=marker;

}

hide(){

   this.selectedCase=undefined;

}
}