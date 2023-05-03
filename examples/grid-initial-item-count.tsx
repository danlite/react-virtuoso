import * as React from 'react'
import { VirtuosoGrid, GridComponents } from '../src'
import { debounce } from 'lodash'
import { GridStateSnapshot } from '../src/gridSystem'
import { createHashRouter, RouterProvider, useSearchParams } from 'react-router-dom'

function generateItems(length: number) {
  return Array.from({ length }, (_, index) => `My Item ${index}`)
}

const itemContent = (_: number, data: string) => {
  return <div style={{ height: 200, backgroundColor: '#f5f5f5', border: '1px solid black' }}>{data}</div>
}

const LOCAL_STORAGE_KEY = 'gridStateSnapshot'

const persistState = debounce((snapshot: GridStateSnapshot) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(snapshot))
}, 300)

function loadPersistedState() {
  let snapshot: GridStateSnapshot | null = null
  const savedState = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (savedState) {
    snapshot = JSON.parse(savedState) as GridStateSnapshot
  }
  return snapshot
}

const ITEMS_PER_PAGE = 50

function Example() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [data, setData] = React.useState(() => generateItems(ITEMS_PER_PAGE * (Number(searchParams.get('page') ?? 0) + 1)))

  const onEndReached = () => {
    setData((prevData) => {
      const nextPage = Number(searchParams.get('page') ?? 0) + 1
      setSearchParams({ page: nextPage.toString() })
      return generateItems(prevData.length + ITEMS_PER_PAGE)
    })
  }

  return (
    <div>
      <div>some header</div>
      <VirtuosoGrid
        components={{
          List: TheList,
        }}
        initialItemCount={20} // if set to INITIAL_ITEM_COUNT, end reached is never called, wonder if this is correct.
        endReached={onEndReached}
        rangeChanged={(range) => console.log(range)}
        data={data}
        itemContent={itemContent}
        useWindowScroll
        stateChanged={persistState}
        restoreStateFrom={loadPersistedState()}
      />
    </div>
  )
}
const router = createHashRouter([{ path: '/', element: <Example /> }])

const TheList: GridComponents['List'] = React.forwardRef(({ style, ...props }, ref) => {
  return <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', ...style }} {...props} />
})

export function WithRouter() {
  return <RouterProvider router={router} />
}
