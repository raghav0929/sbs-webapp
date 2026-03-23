import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  submitted = false;

  form = {
    name: '',
    phone: '',
    course: 'Self Employed Tailor',
    message: ''
  };

  contactItems = [
    {
      icon: '📍',
      label: 'Registered Office',
      text: 'Vill. Kulgran, P.O. Gohalni, Tehsil Nangal,<br/>Distt. Ropar, Punjab – 140126'
    },
    {
      icon: '📞',
      label: 'Phone',
      text: '+91 94637 87220<br/>+91 98760 00000'
    },
    {
      icon: '✉️',
      label: 'Email',
      text: 'sbseducational.nangal@gmail.com<br/>info@sbseducationalsociety.org'
    },
    {
      icon: '🕐',
      label: 'Office Hours',
      text: 'Monday – Saturday: 9:00 AM – 5:00 PM<br/>Sunday: Closed'
    }
  ];

  courseOptions = [
    'Self Employed Tailor',
    'Medical Records Technician',
    'Sales Associate – Retail',
    'General Duty Assistant'
  ];

  onSubmit(): void {
    if (!this.form.name || !this.form.phone) return;
    this.submitted = true;
    // Reset after 4 seconds
    setTimeout(() => {
      this.submitted = false;
      this.form = { name: '', phone: '', course: 'Self Employed Tailor', message: '' };
    }, 4000);
  }
}
