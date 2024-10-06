import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),    // Ensure HttpClient is provided
    ...appConfig.providers, // Spread existing providers from appConfig
  ],
})
  .catch((err) => console.error(err));