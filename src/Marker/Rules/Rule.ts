import { MarkerBag } from "../../MarkerBag/MarkerBag";
import { Marker } from "../Marker";

export interface Rule {
	applyRule(pickedMarkers: Marker[]): boolean;

	handleRule(
		pickedMarkers: Marker[],
		markerBag: MarkerBag
	): void;
}
