import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideClientHydration } from '@angular/platform-browser'
import { NgxWebstorageModule } from '@svensken/ngx-webstorage'

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideClientHydration(),
		importProvidersFrom(
			NgxWebstorageModule.forRoot({
				caseSensitive: false,
				prefix: 'os',
				separator: '.',
			})
		),
	],
}
