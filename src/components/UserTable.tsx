import { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import { dataBase } from '../assets/data';
// import axios from 'axios';

interface DataType {
  id: number;
  first_name: string;
  lst_name: string;
  department: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = dataBase;

// const fetchData = async (): DataType[] => {
//   const response = await axios.get<DataType[]>('https://run.mocky.io/v3/8b3a9c3c-449c-4bab-8559-7d0cdb0c7091');
//   return response.data
// };

// const data: DataType[] = fetchData();

const dataSource = data.map((elem) => ({ ...elem, key: elem.id }));

const UserTable = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });

  const columns: ColumnsType<DataType> = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
      width: '30%',
      ...getColumnSearchProps('first_name'),
      sorter: (a, b) => a.first_name.localeCompare(b.first_name),
    },
    {
      title: 'Last Name',
      dataIndex: 'lst_name',
      key: 'lst_name',
      width: '30%',
      ...getColumnSearchProps('lst_name'),
      sorter: (a, b) => a.lst_name.localeCompare(b.lst_name),
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      filters: [
        {
          text: 'Management',
          value: 'Management',
        },
        {
          text: 'Development',
          value: 'Development',
        },
        {
          text: 'QA',
          value: 'QA',
        },
        {
          text: 'Design',
          value: 'Design',
        },
        {
          text: 'HR',
          value: 'HR',
        },
      ],
      onFilter: (value: string | number | boolean, record: DataType): boolean =>
        record.department.includes(value as string),
    },
  ];

  return (
    <Table<DataType>
      showSorterTooltip={{ title: 'Сортировать по алфавиту' }}
      columns={columns}
      dataSource={dataSource}
      pagination={{
        showSizeChanger: true,
        pageSizeOptions: [10, 50, 100, 500, 1000],
      }}
      bordered={true}
    />
  );
};

export default UserTable;
