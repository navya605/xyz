import { Component, Input } from '@angular/core';
import { User } from '../information/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() userDetails : User;

}
