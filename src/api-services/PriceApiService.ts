import { PRICE_API_ENDPOINT } from '@/constants/env'

import CoreApiService from './CoreApiService'

const apiService = new CoreApiService(PRICE_API_ENDPOINT)

class PriceApiService {
  getWucPrice = (symbol: CurrencySymbolType) => apiService.get<WucPriceResponseType>(`/fake/crypto/${symbol}`)
}

const priceApiService = new PriceApiService()

export default priceApiService
