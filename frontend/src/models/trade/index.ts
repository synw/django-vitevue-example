import api from "../../api";
import MarketContract from "../market/contract";
import InstrumentContract from "../instrument/contract";
import TradeContract from "./contract";

export default class Trade {
	id: number;
	date: string;
	price: number;
	quantity: number;
	market: MarketContract;
	instrument: InstrumentContract;
	side: string;

	constructor ({ id, date, price, quantity, market, instrument, side }: TradeContract) {
		this.id = id;
		this.date = date;
		this.price = price;
		this.quantity = quantity;
		this.market = market;
		this.instrument = instrument;
		this.side = side
	}

	static fromJson(data: Record<string, any>): Trade {
		return new Trade(data as TradeContract)
	}

	static async load(id: number | string): Promise<Trade> {
		const res = await api.get<Record<string, any>>(`/api/trade/${id}/`);
		return Trade.fromJson(res)
	}
}