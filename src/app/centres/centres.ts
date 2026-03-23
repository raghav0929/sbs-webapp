import { Component } from '@angular/core';

@Component({
  selector: 'app-centres',
  templateUrl: './centres.html',
  styleUrls: ['./centres.css']
})
export class CentresComponent {
  centres = [
    {
      name: 'SBS SKILL CENTRE, NANGAL',
      desc: 'Main centre with full-fledged infrastructure for apparel, healthcare & retail courses.',
      emoji: '🏫',
      colorClass: 'c1'
    },
    {
      name: 'SBS RURAL SKILL CENTRE, KULGRAN',
      desc: 'Rural skill centre serving Tehsil Nangal region with tailor and health aide programs.',
      emoji: '🌿',
      colorClass: 'c2'
    },
    {
      name: 'SBS SKILL CENTRE, GOHALNI',
      desc: 'Semi-urban centre offering retail & sales associate certifications under SSC.',
      emoji: '🏛️',
      colorClass: 'c3'
    },
    {
      name: 'SBS RURAL SKILL CENTRE, ROPAR',
      desc: 'Extended centre catering to Distt. Ropar youth with PMKVY-aligned programs.',
      emoji: '🌾',
      colorClass: 'c4'
    }
  ];
}
