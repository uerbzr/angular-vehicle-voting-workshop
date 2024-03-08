import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css',
})
export class VehicleComponent {
  @Input() numberofvotes: number = 0;
  @Input() vehicle: string | null;
  @Output() voteVehicle: EventEmitter<string> = new EventEmitter<string>();

  vehicleVote(n: string) {
    this.voteVehicle.emit(n);
  }
}
