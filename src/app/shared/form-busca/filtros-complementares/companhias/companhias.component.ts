import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CompanhiaService } from 'src/app/core/services/companhia.service';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { Companhia } from 'src/app/core/types/type';

@Component({
  selector: 'app-companhias',
  templateUrl: './companhias.component.html',
  styleUrls: ['./companhias.component.scss']
})
export class CompanhiasComponent implements OnInit {
  companhias: Companhia[] = [];
  selecionadas: Companhia[] = [];

  companhiasControl: FormControl<number[] | null>

  constructor(
    private companhiaService: CompanhiaService,
    private formBuscaService: FormBuscaService
  ) {

    this.companhiasControl = this.formBuscaService.obterControle<number[] | null>('companhias')

  }
  ngOnInit(): void {
    this.companhiaService.listar().subscribe(
      res => {
        this.companhias = res;
      }
    )
    this.companhiasControl.valueChanges.subscribe(value => {
      if (!value) {
        this.selecionadas = []
      }
    })
  }

  alternarCompanhia(companhia: Companhia, checked: boolean): void {
    if (!checked) {
      this.selecionadas = this.selecionadas.filter(comp => comp != companhia)
    } else {
      this.selecionadas.push(companhia)
    }
    this.formBuscaService.formBusca.patchValue({
      companhias: this.selecionadas.map(comp => Number(comp.id))
    })
  }
  companhiaSelecionada(companhia: Companhia): boolean {

    return this.selecionadas.includes(companhia)
  }
}
