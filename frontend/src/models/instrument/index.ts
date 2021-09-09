import api from "../../api";
import InstrumentContract from "./contract";

export default class Instrument {
	id: number;
	name: string;

	constructor ({ id, name }: InstrumentContract) {
		this.id = id;
		this.name = name
	}

	static fromJson(data: Record<string, any>): Instrument {
		return new Instrument(data as InstrumentContract)
	}

	static async load(id: number | string): Promise<Instrument> {
		const res = await api.get<Record<string, any>>(`/api/instrument/${id}/`);
		return Instrument.fromJson(res)
	}
}