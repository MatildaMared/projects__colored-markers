import { describe, it, expect } from "vitest";
import { Marker } from "../Marker/Marker";
import { MarkerBag } from "../MarkerBag/MarkerBag";
import { Color } from "../types/color.enum";
import { WhiteMarkersAboveNineRule } from "./WhiteMarkersAboveNineRule";

describe("WhiteMarkersAboveNineRule class", () => {
	describe("applyRule method", () => {
		it("should return true if all the value of white markers in the picked markers list is above 9", () => {
			const rule = new WhiteMarkersAboveNineRule();

			const markers = [
				new Marker(Color.White, 3),
				new Marker(Color.White, 5),
				new Marker(Color.White, 2),
			];

			const actual = rule.applyRule(markers);
			const expected = true;

			expect(actual).toBe(expected);
		});

		it("should return false if the value of white markers in the picked markers list is not above 9", () => {
			const rule = new WhiteMarkersAboveNineRule();

			const markers = [
				new Marker(Color.Orange, 3),
				new Marker(Color.White, 5),
				new Marker(Color.White, 1),
			];

			const actual = rule.applyRule(markers);
			const expected = false;

			expect(actual).toBe(expected);
		});
	});

	describe("handleRule method", () => {
		it("should return all green markers from the picked markers list to the markers bag", () => {
			const rule = new WhiteMarkersAboveNineRule();

			const pickedMarkers = [
				new Marker(Color.Green, 3),
				new Marker(Color.Green, 5),
				new Marker(Color.Yellow, 2),
			];

			const markersBag = new MarkerBag();

			rule.handleRule(pickedMarkers, markersBag);

			const markersBagAfterRuleApplied = markersBag.getMarkers();
			const lastMarker =
				markersBagAfterRuleApplied[markersBagAfterRuleApplied.length - 1];
			const secondLastMarker =
				markersBagAfterRuleApplied[markersBagAfterRuleApplied.length - 2];

			expect(lastMarker.color).toBe(Color.Green);
			expect(secondLastMarker.color).toBe(Color.Green);
		});
	});
});
