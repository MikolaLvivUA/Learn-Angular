/*main ts запускається першим*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment'; /*Оточення*/

if (environment.production) { /*Якщо оточення production*/
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) /*bootstrapModule каже що запустити першим*/
  .catch(err => console.error(err));
