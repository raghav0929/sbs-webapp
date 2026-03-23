import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class CoursesComponent {
  courses = [
    {
      title: 'Self Employed Tailor',
      desc: 'Comprehensive tailoring course covering garment construction, fabric selection, measurements and finishing techniques.',
      badge: 'Apparel SSC'
    },
    {
      title: 'Medical Records Technician',
      desc: 'Learn patient data management, health record systems and medical coding aligned with healthcare industry standards.',
      badge: 'Healthcare SSC'
    },
    {
      title: 'Sales Associate – Retail',
      desc: 'Develop customer-handling, inventory management and POS system skills for modern retail environments.',
      badge: 'Retail SSC'
    },
    {
      title: 'General Duty Assistant',
      desc: 'Basic healthcare support training equipping students to assist medical professionals in clinical settings.',
      badge: 'Healthcare SSC'
    }
  ];
}
