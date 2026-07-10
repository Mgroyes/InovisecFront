import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CaseMarker {

  id: number;

  title: string;

  description: string;

  date: string;

  top: number;

  left: number;

  status: string;

  neighborhood: string;

  guard: string;

  priority: string;

}

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

  @Output()
  caseSelected = new EventEmitter<CaseMarker>();

  selectedCase?: CaseMarker;

  markers: CaseMarker[] = [

    {
      id: 1,
      title: 'Caso #001',
      description: 'Accidente vehicular con daños materiales.',
      date: '09 Jul 2026',
      top: 32,
      left: 44,
      status: 'En proceso',
      neighborhood: 'Laureles',
      guard: 'Miguel Rodríguez',
      priority: 'Alta'
    },

    {
      id: 2,
      title: 'Caso #002',
      description: 'Incendio estructural controlado.',
      date: '10 Jul 2026',
      top: 56,
      left: 61,
      status: 'Atendido',
      neighborhood: 'Belén',
      guard: 'Carlos Ramírez',
      priority: 'Media'
    },

    {
      id: 3,
      title: 'Caso #003',
      description: 'Alerta ciudadana por comportamiento sospechoso.',
      date: '10 Jul 2026',
      top: 40,
      left: 73,
      status: 'Abierto',
      neighborhood: 'El Poblado',
      guard: 'Laura Gómez',
      priority: 'Alta'
    }

  ];

  show(marker: CaseMarker) {

    this.selectedCase = marker;

  }

  hide() {

    this.selectedCase = undefined;

  }

  selectCase(marker: CaseMarker) {

    this.caseSelected.emit(marker);

  }

}