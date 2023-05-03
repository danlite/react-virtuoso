import * as React from 'react'
import { VirtuosoGrid, GridComponents } from '../src'

function generateItems(length: number) {
  return Array.from({ length }, (_, index) => `My Item ${index}`)
}

const itemContent = (_: number, data: string) => {
  return <div style={{ height: 400, backgroundColor: 'red' }}>{data}</div>
}

export function Example() {
  const [data, setData] = React.useState(() => generateItems(200))

  const onEndReached = () => {
    setData((prevData) => {
      return generateItems(prevData.length + 200)
    })
  }

  return (
    <VirtuosoGrid
      components={{
        List: TheList,
      }}
      initialItemCount={30}
      endReached={onEndReached}
      data={data}
      itemContent={itemContent}
      useWindowScroll
    />
  )
}

const TheList: GridComponents['List'] = React.forwardRef(({ style, ...props }, ref) => {
  return <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', ...style }} {...props} />
})
