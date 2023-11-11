export function padZeroes(num: number, totalLength: number) {
	return String(num).padStart(totalLength, "0");
}
