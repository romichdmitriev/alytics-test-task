import { time } from 'uniqid';

export const subHeaderRenderData = [
  {
    span: '1',
    parent: 'Источники трафика',
    cells: [
      {
        id: time(),
        title: 'Название',
        accessor: 'title',
      },
    ],
  },
  {
    span: '6',
    parent: 'Трафик',
    cells: [
      {
        id: time(),
        title: 'Показы',
        accessor: 'traffic.views',
      },
      {
        id: time(),
        title: 'Клики',
        accessor: 'traffic.clicks',
      },
      {
        id: time(),
        title: 'Сеансы',
        accessor: 'traffic.sessions',
      },
      {
        id: time(),
        title: 'CTR, %',
        accessor: 'traffic.ctr',
      },
      {
        id: time(),
        title: 'Цена клика',
        accessor: 'traffic.clickCost',
      },
      {
        id: time(),
        title: 'Затраты',
        accessor: 'traffic.expenses',
      },
    ],
  },
  {
    span: '3',
    parent: 'Продажи',
    cells: [
      {
        id: time(),
        title: 'Кол-во',
        accessor: 'sales.counter',
      },
      {
        id: time(),
        title: 'CPA',
        accessor: 'sales.cpa',
      },
      {
        id: time(),
        title: 'Выручка',
        accessor: 'sales.proceeds',
      },
    ],
  },
  {
    span: '3',
    parent: 'Цель с осн. GA',
    cells: [
      {
        id: time(),
        title: 'Кол-во',
        accessor: 'ga.counter',
      },
      {
        id: time(),
        title: 'CPA',
        accessor: 'ga.cpa',
      },
      {
        id: time(),
        title: 'CR, %',
        accessor: 'ga.cr',
      },
    ],
  },
];
