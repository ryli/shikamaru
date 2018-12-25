
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Table, Pagination, Popconfirm, Button } from 'antd'
import { routerRedux } from 'dva/router'
import { PAGE_SIZE } from '../constants'
import UserModal from './UserModal'

const styles = require('./Users.css')

interface Props {
  [key: string]: any
}

interface State {
  [key: string]: any
}

function Users({ dispatch, list: dataSource, loading, total, page: current }: Props) {
  function deleteHandler(id: number) {
    dispatch({
      type: 'users/remove',
      payload: id,
    })
  }

  function pageChangeHandler(page: number) {
    dispatch(routerRedux.push({
      pathname: '/users',
      // query: { page },
      search: `page=${page}`,
    }))
  }

  function editHandler(id: number, values: any) {
    dispatch({
      type: 'users/patch',
      payload: { id, values },
    })
  }

  function createHandler(values: any) {
    dispatch({
      type: 'users/create',
      payload: values,
    })
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text: void, record: any) => (
        <span className={styles.operation}>
          <UserModal record={record} onOk={editHandler.bind(null, record.id)}>
            <a>Edit</a>
          </UserModal>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ]

  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <UserModal record={{}} onOk={createHandler}>
            <Button type="primary">Create User</Button>
          </UserModal>
        </div>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  )
}

Users.propTypes = {
  list: PropTypes.array,
  loading: PropTypes.bool,
  total: PropTypes.number,
  page: PropTypes.number,
}

function mapStateToProps(state: State) {
  const { list, total, page } = state.users
  return {
    list,
    total,
    page,
    loading: state.loading.models.users,
  }
}

export default connect(mapStateToProps)(Users)
