import MarketContract from "../market/contract";
import InstrumentContract from "../instrument/contract";

export default interface TradeContract {
	id: number,
	date: string,
	price: number,
	quantity: number,
	market: MarketContract,
	instrument: InstrumentContract,
	side: string,
}