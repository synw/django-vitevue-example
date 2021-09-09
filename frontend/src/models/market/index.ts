import api from "../../api";
import MarketContract from "./contract";

export default class Market {
	id: number;
	name: string;

	constructor ({ id, name }: MarketContract) {
		this.id = id;
		this.name = name
	}

	static fromJson(data: Record<string, any>): Market {
		return new Market(data as MarketContract)
	}

	static async load(id: number | string): Promise<Market> {
		const res = await api.get<Record<string, any>>(`/api/market/${id}/`);
		return Market.fromJson(res)
	}
}