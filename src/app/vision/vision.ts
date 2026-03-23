import { Component } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.html',
  styleUrls: ['./vision.css']
})
export class VisionComponent {
  cards = [
    {
      icon: '🎓',
      title: 'Quality Education',
      text: 'Delivering government-affiliated training programs that meet national standards and equip learners with industry-ready skills.'
    },
    {
      icon: '🤝',
      title: 'Community Outreach',
      text: 'Reaching the most underserved rural pockets of Punjab to ensure no deserving student is left behind due to geography or economics.'
    },
    {
      icon: '💼',
      title: 'Placement Support',
      text: 'Bridging the gap between training and employment through active employer partnerships and dedicated placement assistance.'
    }
  ];
}
