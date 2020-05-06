import React, { Component } from 'react'

class FilterScreen extends Component {
  render () {
    return (
        <div className={'row'}>
             <div className={'col-md-4 form-input'}>
                  <p className="text-left"> Group By</p>
                  <select className={'form-control'} id={'PriSelector'} onChange={() => this.props.onPriorityFilterChange(document.getElementById('PriSelector').value)}>
                    <option value={'All'} defaultValue={(this.props.selectedPriority === '')}>All</option>
                    <option value={'High'} defaultValue={(this.props.selectedPriority === 'High')}>High</option>
                    <option value={'Medium'} defaultValue={(this.props.selectedPriority === 'Medium')}>Medium</option>
                    <option value={'Low'} defaultValue={(this.props.selectedPriority === 'Low')}>Low</option>
                  </select>
              </div>
              <div className={'col-md-8 form-input'}>
                  <p className="text-left">Search</p>
                  <input type='text' id={'txtSearch'}
                  className='form-control'
                  placeholder='Search'
                  value={this.props.searchText}
                  onChange={() => {
                    this.props.onSearchTextChange(document.getElementById('txtSearch').value)
                  }} />
              </div>
      </div>
    )
  }
}

export default FilterScreen
