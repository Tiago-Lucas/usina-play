import {Component, OnInit} from '@angular/core';
import {PersonalService} from "../../service/personal.service";

@Component({
  selector: 'app-slide-personal-training',
  templateUrl: './slide-personal-training.component.html',
  styleUrls: ['./slide-personal-training.component.scss'],
})
export class SlidePersonalTrainingComponent {
  trainingPersonal: number | undefined;

  constructor(private personalService: PersonalService) {
    this.personalService.getPersonal().subscribe(res => {
      this.trainingPersonal = res.length
    })
  }


}
