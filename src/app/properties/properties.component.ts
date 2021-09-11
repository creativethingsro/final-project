import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PropertiesService, Property } from '../properties.service';
import { PropertyDetailsComponent } from '../property-details/property-details.component';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  public properties: Property[] = [];
  public locationForm: FormGroup;
  constructor(private propertiesService:PropertiesService) {
    this.locationForm=new FormGroup({
      name:new FormControl(""),
      description: new FormControl(""),
      address: new FormControl(""),
      photos: new FormControl(""),
      facilities: new FormControl(""),
      maximGuest: new FormControl(4),
      price: new FormControl(125),
      extraGuest: new FormControl(25)
    })
  }

  ngOnInit(): void {
    this.propertiesService.getProperties().subscribe((allProperties:Property[]) => {
      this.properties = allProperties
    });
  }
  public search(event: Event): void {
    this.propertiesService.searchProperties((event.target as HTMLInputElement).value).subscribe((searchedProperties:Property[]) => {
      this.properties = searchedProperties
    });
    
  }

  public submit(): void {
    if (!this.locationForm.valid){
      return
    }
    this.propertiesService.createProperty({
      ...this.locationForm.value, 
      photos: this.locationForm.value.photos.split(","),
      facilities: this.locationForm.value.facilities.split(",")
    }).subscribe((newProperty: Property)=>{
      this.properties.push(newProperty)
      this.locationForm.reset()
    })
  }

}
