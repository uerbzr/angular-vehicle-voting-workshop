import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VEHICLES } from './vehicles'; //VEHICLES array
import { VehicleComponent } from './vehicle/vehicle.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VehicleComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-vehicles';

  newVehicle: string | null = null;
  vehicles: string[] = VEHICLES;
  votesArray: string[] = [];

  voteCount(n: string) {
    return this.votesArray.filter((x) => x === n).length;
  }
  voteVehicle(n: string) {
    this.votesArray.push(n);
    console.log(this.votesArray);
  }
  addVehicle() {
    if (!this.newVehicle) {
      return;
    }
    this.vehicles.push(this.newVehicle);
    this.newVehicle = null;
  }
}
