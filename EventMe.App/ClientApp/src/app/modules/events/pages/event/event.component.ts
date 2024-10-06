import { CommonModule, KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageUploaderComponent } from '../../components/image-uploader/image-uploader.component';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    CommonModule,
    DropdownModule,
    CalendarModule,
    ReactiveFormsModule,
    TooltipModule,
    CheckboxModule,
    FileUploadModule,
    ToastModule,
    InputSwitchModule,
    InputTextareaModule,
    ImageUploaderComponent,
    CommonModule
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
})
export class EventComponent {
  fgComponent!: FormGroup;

  //dropdowns
  eventTypeOpts: KeyValue<number, string>[] = [];
  citiesOpts: KeyValue<number, string>[] = [];
  eventCategoryOpts: KeyValue<number, string>[] =[];
  timeZoneOpts: KeyValue<number, string>[]= [];


  constructor(private fb: FormBuilder) {
    this.fgComponent = this.fb.group({
      eventName: [null, Validators.required],
      eventTypeId: [null, Validators.required],
      eventDate: [new Date()],
      eventNotifications: [null],
      eventDescription: [null],
      eventTimeZone: [null],
      eventDuration: [null],
      maxAttendees: [null],
      eventCategory: [null],
      eventTags: [[]],
      eventLink: [null]
    });
  }
}
