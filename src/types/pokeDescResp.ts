export interface PokeDescResp {
	base_happiness: number;
	capture_rate: number;
	color: Color;
	egg_groups: EggGroup[];
	evolution_chain: EvolutionChain;
	evolves_from_species: any;
	flavor_text_entries: any[];
	form_descriptions: any[];
	forms_switchable: boolean;
	gender_rate: number;
	genera: any[];
	generation: Generation;
	growth_rate: GrowthRate;
	habitat: Habitat;
	has_gender_differences: boolean;
	hatch_counter: number;
	id: number;
	is_baby: boolean;
	is_legendary: boolean;
	is_mythical: boolean;
	name: string;
	names: any[];
	order: number;
	pal_park_encounters: any[];
	pokedex_numbers: any[];
	shape: Shape;
	varieties: Variety[];
}

export interface Color {
	name: string;
	url: string;
}

export interface EggGroup {
	name: string;
	url: string;
}

export interface EvolutionChain {
	url: string;
}

export interface Generation {
	name: string;
	url: string;
}

export interface GrowthRate {
	name: string;
	url: string;
}

export interface Habitat {
	name: string;
	url: string;
}

export interface Shape {
	name: string;
	url: string;
}

export interface Variety {
	is_default: boolean;
	pokemon: Pokemon;
}

export interface Pokemon {
	name: string;
	url: string;
}
