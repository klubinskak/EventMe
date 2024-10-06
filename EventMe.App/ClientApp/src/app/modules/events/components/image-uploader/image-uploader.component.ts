import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { FileSelectEvent, FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [ToastModule, FileUploadModule, HttpClientModule, CommonModule],
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {
  files: File[] = [];  
  totalSize: number = 0;
  totalSizePercent: number = 0;

  constructor(private config: PrimeNGConfig, private messageService: MessageService) {}

  choose(event: FileSelectEvent, callback: () => void): void {  
    callback();
  }

  onRemoveTemplatingFile(event: Event, file: File, removeFileCallback: (event: Event, index: number) => void, index: number): void {
    removeFileCallback(event, index);
    this.totalSize -= file.size;  
    this.totalSizePercent = this.totalSize / 10;  
  }

  onClearTemplatingUpload(clear: () => void): void {  
    clear();
    this.totalSize = 0;
    this.totalSizePercent = 0;
  }

  onTemplatedUpload(): void {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
  }

  onSelectedFiles(event: FileSelectEvent): void {
    this.files = event.currentFiles;  
    this.files.forEach((file: File) => {
      this.totalSize += file.size;  
    });
    this.totalSizePercent = this.totalSize / 10;  
  }

  uploadEvent(callback: () => void): void {
    callback();
  }

  formatSize(bytes: number): string {  
    const k = 1024;
    const dm = 3;
    const sizes: string[] = this.config.translation.fileSizeTypes ?? [];

    if (bytes === 0) {
      return `0 ${sizes[0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
  }
}
