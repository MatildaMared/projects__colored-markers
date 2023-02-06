import { describe, it, expect, vi } from "vitest";
import { Marker } from "../Marker/Marker";
import { Color } from "../types/color.enum";
import { WhiteMarkerAfterYellowRule } from "./WhiteMarkerAfterYellowRule";

describe("WhiteMarkerAfterYellowRule class", () => {
	describe("applyRule method", () => {
		it("should return true if the last picked marker is yellow and the second last picked marker is white", () => {
			const rule = new WhiteMarkerAfterYellowRule();

			const markers = [
				new Marker(Color.Green, 2),
				new Marker(Color.White, 3),
				new Marker(Color.Yellow, 1),
			];

			const actual = rule.applyRule(markers);
			const expected = true;

			expect(actual).toBe(expected);
		});

		it("should return false if the last picked marker is not yellow", () => {
			const rule = new WhiteMarkerAfterYellowRule();

			const markers = [
				new Marker(Color.Green, 2),
				new Marker(Color.White, 3),
				new Marker(Color.Orange, 1),
			];

			const actual = rule.applyRule(markers);
			const expected = false;

			expect(actual).toBe(expected);
		});
	});

	describe("handleRule method", () => {
		it("should move the white marker that was picked second to last to the markers bag", () => {
			const rule = new WhiteMarkerAfterYellowRule();

			const pickedMarkers = [
				new Marker(Color.Green, 2),
				new Marker(Color.White, 3),
				new Marker(Color.Yellow, 1),
			];

			const markerBag = {
				addMarker: vi.fn(),
			};

			rule.handleRule(pickedMarkers, markerBag as any);

			expect(markerBag.addMarker).toHaveBeenCalledWith(
				new Marker(Color.White, 3)
			);
		});
	});
});
