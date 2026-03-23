import { Component } from '@angular/core';

@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.html',
  styleUrls: ['./schemes.css']
})
export class SchemesComponent {
  schemes = [
    {
      label: 'DDUGKY',
      title: 'Deen Dayal Upadhyaya Grameen Kaushalya Yojana',
      desc: 'A placement-linked skill development scheme for rural youth aged 15–35. SBS society trains, certifies and places beneficiaries through this MoRD programme across Punjab villages.'
    },
    {
      label: 'PMKVY',
      title: 'Pradhan Mantri Kaushal Vikas Yojana',
      desc: 'India\'s flagship skill certification scheme run by NSDC. SBS Educational Society offers free short-term skill certification courses in approved trades under PMKVY 3.0 & 4.0.'
    }
  ];
}
