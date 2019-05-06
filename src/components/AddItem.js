import React, {Component} from 'react'

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      itemName: '',
      itemPrice : '',
      itemDescription : '',
      itemQuantity : '1',
      itemImage : '',
      inCart : false
    }
  }
  handleItemSubmit = e => {
    e.preventDefault()
    this.props.onAddItem(this.state)
    this.setState({
      itemName: '',
      itemPrice : '',
      itemDescription : '',
      itemQuantity : '1',
      itemImage: '',
      inCart: false
    });
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div className='background-image'>
      <div className='white-background'>
        <div className='header-background'>
        <h3>Shopping List</h3>
      </div>
        <form className='flex-container' onSubmit={this.handleItemSubmit}>
            Item Name
              <input
                required
                name='itemName'
                value={ this.state.itemName}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Item Name"
                />
                Price
              <input
                style={{width: '70px'}}
                name='itemPrice'
                value={ this.state.itemPrice}
                onChange={this.handleInputChange}
                type="number"
                step="0.01"
                placeholder="Price"
                />
              Description
              <input
                name='itemDescription'
                value={ this.state.itemDescription}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Description"
              />
              Quantity
              <input
                style={{width: '70px'}}
                name='itemQuantity'
                value={ this.state.itemQuantity}
                onChange={this.handleInputChange}
                type="number"
                placeholder="Quantity" />
                Image Url
              <input
                name='itemImage'
                value={ this.state.itemImage}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Image Url" />
              <button className='add-button' type="text"><span>Add Item</span></button>
        </form>
      </div>
      </div>
    );
  }
}

export default AddItem
