import { Component } from '@angular/core';
import { User } from './user'
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  topics = ["Angular" , "React", "Vue"];
  userModel = new User('Mayuri', 'abc@gmail.com', 123456, '', 'morning', true)
  topicHasError = true;
  submitted = false;
  errorMsg = '';


constructor(private _enrollService: EnrollmentService){ }

validateTopic(value) {
  if (value === 'default') {
    this.topicHasError = true;
  } else {
    this.topicHasError = false;
  }
}

onSubmit(){
  this.submitted = true;
  this._enrollService.enroll(this.userModel)
  .subscribe(
    response => console.log('Success!', response),
    error => this.errorMsg = error.statusText
  )
}
}
