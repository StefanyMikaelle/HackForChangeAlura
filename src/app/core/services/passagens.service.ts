import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DadosBusca, Destaques, Passagem, Resultado } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {
  apiUrl : string = environment.apiUrl;
  precoMin: number = 0;
  precoMax: number = 0;
  constructor(
    private httpClient: HttpClient
  ) { }
  getPassagens(search: DadosBusca) : Observable<Resultado>{
    const params = this.converterParametroParaString(search);
    const obs =  this.httpClient.get<Resultado>(this.apiUrl + '/passagem/search?' + params);
    obs.pipe(take(1)).subscribe(res =>
      {
        this.precoMin = res.precoMin
        this.precoMax = res.precoMax
      }
    )
    return obs
  }

  converterParametroParaString(busca: DadosBusca){
    const query = Object.entries(busca)
      .map( ([key, value]) => {
        if(!value){
          return ''
        }
        return `${key}=${value}`
      })
      .join('&')
      return query
  }
  obterPassagensDestaques(passagem: Passagem[]): Destaques | undefined {
    if (!passagem.length) {
      return undefined;
    }
    let ordenadoPorTempo = [...passagem].sort(
      (a, b) => a.tempoVoo - b.tempoVoo
    );
    let ordenadoPorPreco = [...passagem].sort((a, b) => a.total - b.total);

    let maisRapida = ordenadoPorTempo[0];
    let maisBarata = ordenadoPorPreco[0];

    let ordenadoPorMedia = [...passagem].sort((a, b) => {
      let pontuacaoA =
        (a.tempoVoo / maisBarata.tempoVoo + a.total / maisBarata.total) / 2;
      let pontuacaoB =
        (b.tempoVoo / maisBarata.total + b.total / maisBarata.total) / 2;
      return pontuacaoA - pontuacaoB;
    });
    let sugerida = ordenadoPorMedia[0];

    return { maisRapida, maisBarata, sugerida };
  }
}
