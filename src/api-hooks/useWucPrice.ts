import { useQuery } from '@tanstack/react-query'

import priceApi from '@/api-services/PriceApiService'

export const useWucPrice = (currencySymbol: CurrencySymbolType) => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['WUC_PRICE', currencySymbol],
    queryFn: () => priceApi.getWucPrice(currencySymbol),
    refetchInterval: 10000, // Refetch every 10 seconds,
  })

  return { data, fetching: isLoading, error: error, refetch }
}
