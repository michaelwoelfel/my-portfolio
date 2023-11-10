import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ResponsiveService } from './app/responsive.service';
import { AppModule } from './app/app.module';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




