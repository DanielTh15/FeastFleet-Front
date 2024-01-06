/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

<<<<<<< HEAD
import 'hammerjs';

=======
>>>>>>> 4336b708d84b81430a5c224cbfb6a430860c3512

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
