import React from 'react'
import './TableLoader.css'
import PropTypes from 'prop-types'

function TableLoader({tdCount=1, trCount=1}) {
  return (
    <tr rowSpan={trCount} className='skleton-loader-table-row'>
        <td colSpan={tdCount}>
        {"Loading..."}
        </td>
    </tr>
  )
}

TableLoader.propTypes = {
    tdCount:PropTypes.number,
    trCount:PropTypes.number,
}

export default TableLoader
