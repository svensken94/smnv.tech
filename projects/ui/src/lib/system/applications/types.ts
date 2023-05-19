import { Component, Injectable, Type } from '@angular/core'

export interface ApplicationManifest {
	bundle_id: string
	icon: string
	name: string
	default: boolean
	context: Type<Component>
}
