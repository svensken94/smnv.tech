import { ApplicationManifest } from 'ui/system'
import { CalendarComponent } from './calendar.component'

export const calendar: ApplicationManifest = {
	bundle_id: 'tech.smnv.calendar',
	icon: 'assets/apps/calendar.png',
	name: 'Calendar',
	default: true,
	context: CalendarComponent,
}
