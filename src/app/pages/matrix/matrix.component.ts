import { Component } from '@angular/core';
import { Prices } from '../../core/variables/prices';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrl: './matrix.component.scss',
})
export class MatrixComponent {
  matrixServices = Prices.matrix
}
