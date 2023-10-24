import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  servicesData: any[] = [
    {
      serviceName: 'Accounting and Tax Services',
      pageLink: '/accounting',
      imageUrl: 'assets/images/services/accounting.jpg',
      serviceList: [
        'Bookkeeping',
        'Financial Statement Preparation',
        'Income Tax Filing',
        'Payroll Management',
        'Small Business Accounting',
        'Tax Planning and Consultation',
        'Estate and Inheritance Planning',
        'Audit and Assurance',
      ],
    },
    {
      serviceName: 'Beauty and Personal Care',
      pageLink: '/beauty',
      imageUrl: 'assets/images/services/beautycare.jpg',
      serviceList: [
        'Barber Services',
        'Facials and Skincare Treatments',
        'Hair Braiding and Styling',
        'Hair Removal (Waxing, Threading)',
        'Makeup Artistry for Special Occasions',
        'Manicure and Pedicure Services',
        'Spa Services',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
