import { Injectable, inject } from '@angular/core'
import { LocalStorage, LocalStorageService } from '@svensken/ngx-webstorage'
import { ApplicationManifest } from './types'

@Injectable({
	providedIn: 'root',
})
export class ApplicationsService {
	apps: ApplicationManifest[] = []
	@LocalStorage('installed', []) installed!: string[]

	storage = inject(LocalStorageService)

	constructor() {}

	async init() {
		// check installed apps in storage
		if (!this.installed.length) await this.installDefaultApps()
		if (this.installed.length > 0) {
			await this.initInstalledApps()
		}
	}

	async initInstalledApps() {
		const apps = await this.getApps()
		this.apps = apps.filter(app => this.installed.includes(app.bundle_id))
	}

	async installDefaultApps() {
		const apps = await this.getApps()
		this.apps.push(...apps)

		this.installed = this.apps.map(value => value.bundle_id)
	}

	private async getApps() {
		const apps = await import('@apps/applist')
		return Object.values(apps)
	}
}
