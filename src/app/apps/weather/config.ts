import { ApplicationManifest } from 'ui/system'
import { WeatherComponent } from './weather.component'

export const weather: ApplicationManifest = {
	bundle_id: 'tech.smnv.weather',
	icon: 'assets/apps/weather.png',
	name: 'Weather',
	default: true,
	context: WeatherComponent,
}
