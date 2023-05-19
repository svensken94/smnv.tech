import { Injectable, ViewContainerRef } from '@angular/core'
import { ApplicationManifest } from 'ui/system'

@Injectable({
	providedIn: 'root',
})
export class WindowService {
	constructor() {}

	spawn(viewContainerRef: ViewContainerRef, manifest: ApplicationManifest) {
		const componentRef = viewContainerRef.createComponent(manifest.context)
		return componentRef.instance
	}
}
