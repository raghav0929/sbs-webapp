import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {
  stats = [
    { num: '18+',   label: 'Years Active' },
    { num: '4',     label: 'Skill Centres' },
    { num: '2000+', label: 'Students Trained' },
    { num: '85%',   label: 'Placement Rate' }
  ];
}
