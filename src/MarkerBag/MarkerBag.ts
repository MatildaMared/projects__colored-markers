import { Marker } from "../Marker/Marker";
import { Color } from "../types/color.enum";

export class MarkerBag {
	private markers: Marker[] = [];

	constructor() {
		this.generateMarkers();
	}

	getMarkers(): Marker[] {
		return this.markers;
	}

	addMarker(marker: Marker): void {
		this.markers.push(marker);
	}

	pickRandomMarker(): Marker | undefined {
		if (this.markers.length === 0) {
			return undefined;
		}

		const randomIndex = Math.floor(Math.random() * this.markers.length);
		const randomMarker = this.markers[randomIndex];
		this.markers.splice(randomIndex, 1);

		return randomMarker;
	}

	generateMarkers(): void {
		// add 4 white markers with value 1
		for (let i = 0; i < 4; i++) {
			this.markers.push(new Marker(Color.White, 1));
		}

		// add 2 white markers with value 2
		for (let i = 0; i < 2; i++) {
			this.markers.push(new Marker(Color.White, 2));
		}

		// add 1 white marker with value 3
		this.markers.push(new Marker(Color.White, 3));

		// add 1 green marker with value 1
		this.markers.push(new Marker(Color.Green, 1));

		// add 1 green marker with value 2
		this.markers.push(new Marker(Color.Green, 2));

		// add 1 orange marker with value 1
		this.markers.push(new Marker(Color.Orange, 1));

		// add 1 orange marker with value 3
		this.markers.push(new Marker(Color.Orange, 3));

		// add 1 yellow marker with value 3
		this.markers.push(new Marker(Color.Yellow, 3));
	}
}
