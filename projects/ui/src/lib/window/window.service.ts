import { Component, Injectable, ViewContainerRef } from '@angular/core'
import { ApplicationManifest } from 'ui/system'
import { WindowComponent } from './window.component'

@Injectable({
	providedIn: 'root',
})
export class WindowService {
	constructor() {}

	spawn<T extends ApplicationManifest['context']>(
		viewContainerRef: ViewContainerRef,
		manifest: ApplicationManifest
	): WindowComponent<T> {
		const componentRef = viewContainerRef.createComponent<WindowComponent<T>>(WindowComponent)
		const window = componentRef.instance

		window.manifest = manifest

		return window
	}
}
