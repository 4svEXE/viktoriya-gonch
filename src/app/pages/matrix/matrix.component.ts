import { Component } from '@angular/core';
import { Prices } from '../../core/variables/prices';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
})
export class MatrixComponent {
  matrixServices = Prices.matrix;
}
