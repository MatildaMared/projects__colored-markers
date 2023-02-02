import { describe, expect, it } from "vitest";
import { Marker } from "../Marker/Marker";
import { Color } from "../Marker/types/color.enum";
import { MarkerBag } from "./MarkerBag";

describe("MarkerBag class", () => {
	describe("initially", () => {
		it("should have 12 markers to begin with", () => {
			const markerBag = new MarkerBag();

			const expected = 12;
			const actual = markerBag.getMarkers().length;

			expect(actual).toBe(expected);
		});

		it("should have 4 white markers with value 1 to begin with", () => {
			const markerBag = new MarkerBag();

			const expected = 4;
			const actual = markerBag
				.getMarkers()
				.filter(
					(marker) => marker.color === Color.White && marker.value === 1
				).length;

			expect(actual).toBe(expected);
		});

		it("should have 2 white markers with value 2 to begin with", () => {
			const markerBag = new MarkerBag();

			const expected = 2;
			const actual = markerBag
				.getMarkers()
				.filter(
					(marker) => marker.color === Color.White && marker.value === 2
				).length;

			expect(actual).toBe(expected);
		});

		it("should have 1 white marker with value 3 to begin with", () => {
			const markerBag = new MarkerBag();

			const expected = 1;
			const actual = markerBag
				.getMarkers()
				.filter(
					(marker) => marker.color === Color.White && marker.value === 3
				).length;

			expect(actual).toBe(expected);
		});

		it("should have 1 green marker with value 1 to begin with", () => {
			const markerBag = new MarkerBag();

			const expected = 1;
			const actual = markerBag
				.getMarkers()
				.filter(
					(marker) => marker.color === Color.Green && marker.value === 1
				).length;

			expect(actual).toBe(expected);
		});

		it("should have 1 green marker with value 2 to begin with", () => {
			const markerBag = new MarkerBag();

			const expected = 1;
			const actual = markerBag
				.getMarkers()
				.filter(
					(marker) => marker.color === Color.Green && marker.value === 2
				).length;

			expect(actual).toBe(expected);
		});

		it("should have 1 orange marker with value 1 to begin with", () => {
			const markerBag = new MarkerBag();

			const expected = 1;
			const actual = markerBag
				.getMarkers()
				.filter(
					(marker) => marker.color === Color.Orange && marker.value === 1
				).length;

			expect(actual).toBe(expected);
		});

		it("should have 1 orange marker with value 3 to begin with", () => {
			const markerBag = new MarkerBag();

			const expected = 1;
			const actual = markerBag
				.getMarkers()
				.filter(
					(marker) => marker.color === Color.Orange && marker.value === 3
				).length;

			expect(actual).toBe(expected);
		});

		it("should have 1 yellow marker with value 3 to begin with", () => {
			const markerBag = new MarkerBag();

			const expected = 1;
			const actual = markerBag
				.getMarkers()
				.filter(
					(marker) => marker.color === Color.Yellow && marker.value === 3
				).length;

			expect(actual).toBe(expected);
		});
	});

	describe("pickRandomMarker", () => {
		it("should return a marker", () => {
			const markerBag = new MarkerBag();

			const expected = true;
			const actual = markerBag.pickRandomMarker() instanceof Marker;

			expect(actual).toBe(expected);
		});

		it("should remove the marker from the bag", () => {
			const markerBag = new MarkerBag();

			const expected = 11;

			markerBag.pickRandomMarker();

			const actual = markerBag.getMarkers().length;

			expect(actual).toBe(expected);
		});

		it("should return undefined if there are no markers left in the bag", () => {
			const markerBag = new MarkerBag();

			for (let i = 0; i < 12; i++) {
				markerBag.pickRandomMarker();
			}

			const expected = undefined;

			const actual = markerBag.pickRandomMarker();

			expect(actual).toBe(expected);
		});
	});

	describe("getMarkers", () => {
		it("should return an array of markers", () => {
			const markerBag = new MarkerBag();

			const expected = true;
			const actual = markerBag
				.getMarkers()
				.every((marker) => marker instanceof Marker);

			expect(actual).toBe(expected);
		});
	});

	describe("addMarker", () => {
		it("should add a marker to the bag", () => {
			const markerBag = new MarkerBag();

			const expected = 13;

			markerBag.addMarker(new Marker(Color.White, 1));

			const actual = markerBag.getMarkers().length;

			expect(actual).toBe(expected);
		});
	});
});
