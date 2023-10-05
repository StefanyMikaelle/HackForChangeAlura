import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { DadosBusca, UnidadeFederativa } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;

  constructor(private dialog: MatDialog) { 
    const somenteIda = new FormControl(false, [Validators.required])
    const dataVolta = new FormControl(null, [Validators.required])

    this.formBusca = new FormGroup({
      somenteIda,
      origem: new FormControl(null, [Validators.required]),
      destino: new FormControl(null, [Validators.required]),
      tipo: new FormControl("Econômica"),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
      dataIda: new FormControl(null, [Validators.required]),
      dataVolta,
      conexoes: new FormControl(null),
      companhias: new FormControl(null),
      precoMin: new FormControl(null),
      precoMax: new FormControl(null),
    })
    somenteIda.valueChanges.subscribe(somenteIda => {
      if(somenteIda){
        dataVolta.disable();
        dataVolta.setValidators(null)
      }else{
        dataVolta.enable();
        dataVolta.setValidators([Validators.required])
      }
      dataVolta.updateValueAndValidity
    })
  }

  getDescricaoPassageiros (): string {
    let descricao = ''

    const adultos = this.formBusca.get('adultos')?.value;
    if (adultos && adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? 's' : ''}`;
    }
  
    const criancas = this.formBusca.get('criancas')?.value;
    if (criancas && criancas > 0) {
      descricao += `${descricao ? ', ' : ''}${criancas} criança${criancas > 1 ? 's' : ''}`;
    }
  
    const bebes = this.formBusca.get('bebes')?.value;
    if (bebes && bebes > 0) {
      descricao += `${descricao ? ', ' : ''}${bebes} bebê${bebes > 1 ? 's' : ''}`;
    }
  
    return descricao
  }

  trocarOrigemDestino(): void {
    const origem = this.formBusca.get('origem')?.value;
    const destino = this.formBusca.get('destino')?.value;
  
    this.formBusca.patchValue({
      origem: destino,
      destino: origem
    });
  }

  obterControle<T>(nome:string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl<T>;
  }

  obterDadosBusca(): DadosBusca {
    const dataIdaControl = this.obterControle<Date>('dataIda');
    const dadosBusca: DadosBusca = {
      pagina: 1,
      porPagina: 50,
      dataIda: dataIdaControl.value.toISOString(),
      passageirosAdultos: this.obterControle<number>('adultos').value,
      passageirosCriancas: this.obterControle<number>('criancas').value,
      passageirosBebes: this.obterControle<number>('bebes').value,
      somenteIda: this.obterControle<boolean>('somenteIda').value,
      origemId: this.obterControle<UnidadeFederativa>('origem').value.id,
      destinoId: this.obterControle<UnidadeFederativa>('destino').value.id,
      tipo: this.obterControle<string>('tipo').value,
    }
    const dataVoltaControl = this.obterControle<Date>('dataVolta');
    if (dataVoltaControl.value) {
      dadosBusca.dataVolta = dataVoltaControl.value.toISOString();
    }
    const conexoesControl = this.obterControle<number>('conexoes');
    if(conexoesControl.value){
      dadosBusca.conexoes = conexoesControl.value;
    }
    const companhiasControl = this.obterControle<number[]>('companhias');
    if(companhiasControl.value){
      dadosBusca.companhiasId = companhiasControl.value
    }
    const precoMinControl = this.obterControle<number>('precoMin')
    if(precoMinControl.value){
      dadosBusca.precoMin = precoMinControl.value
    }
    const precoMaxControl = this.obterControle<number>('precoMin')
    if(precoMaxControl.value){
      dadosBusca.precoMax = precoMaxControl.value
    }
    return dadosBusca
  }

  alterarTipo (evento: MatChipSelectionChange, tipo: string) {
    if (evento.selected) {
      this.formBusca.patchValue({
        tipo,
      })
      console.log('Tipo de passagem alterado para: ', tipo)
    }
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }

  get formEstaValido(){
    return this.formBusca.valid
  }
}
