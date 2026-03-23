import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar";
import { HeroComponent } from "./hero/hero";
import { AboutComponent } from "./about/about";
import { VisionComponent } from "./vision/vision";
import { CentresComponent } from "./centres/centres";
import { CoursesComponent } from "./courses/courses";
import { SchemesComponent } from "./schemes/schemes";
import { ContactComponent } from "./contact/contact";
import { FooterComponent } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent, AboutComponent, VisionComponent, CentresComponent, CoursesComponent, SchemesComponent, ContactComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ayush-website');
}
