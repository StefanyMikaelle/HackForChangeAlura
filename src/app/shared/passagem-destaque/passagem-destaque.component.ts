import { Component, Input } from '@angular/core';
import { Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-passagem-destaque',
  templateUrl: './passagem-destaque.component.html',
  styleUrls: ['./passagem-destaque.component.scss']
})
export class PassagemDestaqueComponent {
  @Input() destacadaPor: string = ''
  @Input() passagem?: Passagem;
  @Input() variant: 'primary' | 'secondary' | 'default'  = 'primary'
}
