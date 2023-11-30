'use client'

import cn from 'classnames'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi'

import { formatCurrency } from '@/lib/utils'

import Dropdown from '@/components/atoms/Dropdown'
import PageLayout from '@/components/layouts/PageLayout'

import usePriceStore from '@/store/usePriceStore'

import { useWucPrice } from '@/api-hooks/useWucPrice'

const CURRENCY_LIST: Array<CurrencySymbolType> = ['usd', 'eur', 'gbp', 'cny', 'jpy']

export default function HomePage() {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencySymbolType>('usd')
  const [amount, setAmount] = useState(0)
  const [priceDiff, setPriceDiff] = useState(0)
  const { lastPrices, updateLastPrice } = usePriceStore()

  const { data, fetching, error } = useWucPrice(selectedCurrency)

  const calcPrice = useMemo(() => {
    if (!data?.value) return 0
    return amount * data?.value
  }, [amount, data?.value])

  useEffect(() => {
    if (!data?.value) return

    const lastPrice = lastPrices[selectedCurrency]

    if (lastPrice) {
      setPriceDiff(data.value - lastPrice)
    } else {
      setPriceDiff(0)
    }

    updateLastPrice(selectedCurrency, data.value)
  }, [data?.value])

  const handleDropdownChange = (curOpt: string) => {
    setSelectedCurrency(curOpt as CurrencySymbolType)
  }

  const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value))
  }

  return (
    <PageLayout pageTitle='WUC Convertor'>
      <div className='flex flex-col gap-3'>
        <div className='flex gap-3'>
          <input
            className='block w-[200px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            type='number'
            name='amount'
            onChange={onChangeAmount}
          ></input>
          <Dropdown name='currency-dropdown' options={CURRENCY_LIST} onChange={handleDropdownChange} />
        </div>

        <div className='flex items-center gap-3'>
          <span className='text-2xl'>{formatCurrency(calcPrice)}</span>
          <span className='text-2xl'> WUC </span>

          <div className='flex items-center'>
            {priceDiff > 0 ? (
              <HiArrowNarrowUp className='text-green-700' />
            ) : priceDiff < 0 ? (
              <HiArrowNarrowDown className='text-red-700' />
            ) : null}
            <span className={cn('text-2xl', priceDiff > 0 ? 'text-green-700' : 'text-red-700')}>
              {formatCurrency(priceDiff)}
            </span>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
