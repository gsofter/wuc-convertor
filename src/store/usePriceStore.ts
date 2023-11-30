import { create } from 'zustand'

interface PriceStoreType {
  lastPrices: {
    usd?: number
    eur?: number
    gbp?: number
    cny?: number
    jpy?: number
  }
  updateLastPrice: (currencySymbol: CurrencySymbolType, priceVal: number) => void
}

const usePriceStore = create<PriceStoreType>((set) => ({
  lastPrices: {},
  updateLastPrice: (currencySymbol, priceVal) =>
    set(({ lastPrices }) => ({ lastPrices: { ...lastPrices, [currencySymbol]: priceVal } })),
}))

export default usePriceStore
