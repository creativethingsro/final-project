import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  constructor(private contactService: ContactsService) { 
    this.contactForm=new FormGroup({
      name:new FormControl(""),
      reservationId:new FormControl(),
      telephone:new FormControl(""),
      email:new FormControl(""),
      message:new FormControl("")
    })
  }

  ngOnInit(): void {
  }
  public submit(){
    this.contactService.createContact(this.contactForm.value).subscribe(()=>{
      this.contactForm.reset()
    })
  }
}
