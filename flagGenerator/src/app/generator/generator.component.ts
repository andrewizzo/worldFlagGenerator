import { Component, OnInit } from '@angular/core';
import { AllFlagService } from '../services/all-flag.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit{

  listFlag = [
    {name:'Albania',image:'assets/flags/Flag_of_Albania.svg.png'},
    {name:'Afghanistan',image:'assets/flags/Flag_of_Afghanistan_(2013–2021).svg.png'},
    {name:'Algeria',image:'assets/flags/Flag_of_Algeria.svg.png'},
    {name:'Andorra',image:'assets/flags/Flag_of_Andorra.svg.png'},
    {name:'Argentina',image:'assets/flags/Flag_of_Argentina.svg.png'},
    {name:'Armenia',image:'assets/flags/Flag_of_Armenia.svg.png'},
    {name:'Austria',image:'assets/flags/Flag_of_Austria.svg.png'},
    {name:'Azerbaijan',image:'assets/flags/Flag_of_Azerbaijan.svg.png'},
    {name:'Australia',image:'assets/flags/Flag_of_Australia.svg.png'},
    {name:'Bangladesh',image:'assets/flags/Flag_of_Bangladesh.svg.png'},
    {name:'Bielorussia',image:'assets/flags/Flag_of_Belarus.svg.png'},
    {name:'Belgio',image:'assets/flags/Flag_of_Belgium_(civil).svg.png'},
    {name:'Bhutan',image:'assets/flags/Flag_of_Bhutan.svg.png'},
    {name:'Bolivia',image:'assets/flags/Flag_of_Bolivia.svg.png'},
    {name:'Bosnia ed Erzegovina',image:'assets/flags/Flag_of_Bosnia_and_Herzegovina.svg.png'},
    {name:'Botswana',image:'assets/flags/Flag_of_Botswana.svg.png'},
    {name:'Brasile',image:'assets/flags/Flag_of_Brazil.svg.png'},
    {name:'Burkina Faso',image:'assets/flags/Flag_of_Burkina_Faso.svg.png'},
    {name:'Burundi',image:'assets/flags/Flag_of_Burundi.svg.png'},
    {name:'Myanmar',image:'assets/flags/Flag_of_Myanmar.svg.png'},
    {name:'Bahamas',image:'assets/flags/Flag_of_the_Bahamas.svg.png'},
    {name:'Bulgaria',image:'assets/flags/Flag_of_Bulgaria.svg.png'},
  ]

  fakeArray = []
  flagSelezionata :any;
  currentIndex : number = 0
  constructor(private allFlagService : AllFlagService){}

  ngOnInit(): void {
    this.generatorFlag();
    this.getAllFlags();
  }

  generatorFlag(){
    const randomFlag = Math.floor(Math.random() * this.listFlag.length);
    this.flagSelezionata = this.listFlag[randomFlag];
    this.currentIndex = randomFlag;
  }

  nextFlag(){
    this.currentIndex = (this.currentIndex + 1) % this.listFlag.length
    this.flagSelezionata = this.listFlag[this.currentIndex]
  }

  beforeFlag(){
    this.currentIndex = (this.currentIndex - 1 + this.listFlag.length) % this.listFlag.length
    this.flagSelezionata = this.listFlag[this.currentIndex]
  }

  getAllFlags():void{
    this.allFlagService.getAllFlags().subscribe((e) => {
      this.fakeArray = e
      console.log(this.fakeArray);
    })
  }
}
