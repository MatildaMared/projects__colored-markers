import { Marker } from "../Marker/Marker";
import { MarkerBag } from "../MarkerBag/MarkerBag";

export class MarkersGame {
	private markerBag: MarkerBag = new MarkerBag();
	private pickedMarkers: Marker[] = [];

	constructor() {}

	startGame(): void {
		console.log("Welcome to the colored markers game! Let's start! 😄");
		console.log("Generating markers...");

		this.markerBag = new MarkerBag();
		this.pickedMarkers = [];
		console.log("Markers generated! 🎉");
		console.log(this.markerBag);
		console.log(this.pickedMarkers);
	}
}
