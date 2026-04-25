import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  regdBoxes = [
  {
    title: 'Registered Office',
    text: 'Vill. Kulgran, P.O. Gohalni,<br/>Tehsil Nangal, Distt. Rupnagar,<br/>Punjab – 140126'
  },
  {
    title: 'Registration Details',
    text: 'Registered under Societies Registration Act (XXI of 1860)<br/>and as amended by Punjab Amendment Act, 1957<br/>Registration No: 065 of 2022-2023<br/>Date: 20 May, 2022'
  },
  {
    title: 'Memorandum & Bye Laws',
    text: 'SBS Educational Society operates under a formal Memorandum of Association governing all activities and governance.'
  }
];

  paragraphs = [
    'SBS Educational Society was founded with a vision to bring quality education and skill development to underserved communities in Punjab. Since our inception, we have been committed to the holistic growth of youth through vocational training, academic support, and placement assistance.',
    'We are an affiliated Training Partner of the PSDM (Punjab Skill Development Mission) and operate multiple skill centres across the state. Our courses are certified by SSC (Sector Skill Councils) — the Government body for Vocational Training and Certification.',
    'The society actively participates in flagship schemes such as DDUGKY and PMKVY, enabling rural youth to build sustainable livelihoods.'
  ];
}
