import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromocaoService } from 'src/app/core/services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private servicoPromocao: PromocaoService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.servicoPromocao.listar()
      .subscribe(
        resposta => {
          console.log(resposta)
        }
      )
  }
  navegarParaBusca(ev: any) {
    this.router.navigate(['busca']);
  }
}
