import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { GeneratorComponent } from "../generator/generator.component";

@NgModule({
    declarations:[HomeComponent,GeneratorComponent],
    imports:[CommonModule,HomeRoutingModule],
    exports:[]
})
export class HomeModule{}