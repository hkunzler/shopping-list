import React, {Component} from 'react';
import AddItem from './AddItem'


const items = [
  {
    itemName : `Chocolate`,
    itemPrice   : `5`,
    itemDescription : `Mmmm Chocolate `,
    itemQuantity : `100`,
    itemImage : 'https://images.unsplash.com/photo-1542843137-144e10cc010b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
    inCart : true
  },
  {
    itemName : `Bagels`,
    itemPrice   : `2`,
    itemDescription : `Need for breafast`,
    itemQuantity : `10`,
    itemImage : 'https://images.unsplash.com/photo-1493595268056-f23fe7e088bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
    inCart : false
  },
  {
    itemName : `Avacado`,
    itemPrice   : `15`,
    itemDescription : `To go with bagels`,
    itemQuantity : `150`,
    itemImage : 'https://images.unsplash.com/photo-1551460188-2f48af84543c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
    inCart : false
  },
  {
    itemName : `Nutella`,
    itemPrice   : `50`,
    itemDescription : `Mmmm more chocolate `,
    itemQuantity : `1000`,
    itemImage : 'https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
    inCart : true
  },
  {
    itemName : `Milk`,
    itemPrice   : `500`,
    itemDescription : `Wash down the chocolate`,
    itemQuantity : `20`,
    itemImage : 'https://images.unsplash.com/photo-1517448931760-9bf4414148c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
    inCart : true
  }
];

class ShoppingList extends Component {
  constructor() {
    super();
    this.state = {items, sortList: true}
  }
  handleRemoveItem (index) {
    let items = this.state.items.filter( (e, i) => index !== i)
    this.setState({items});
  }
  handleInCartItem = index => {
    let items = this.state.items.map( (element,i) => {
      if (i === index) {
        element.inCart = !element.inCart
      }
      return element
    });
    this.setState({items});
  }

  handleAddItem = item => {
   this.setState({items: [...this.state.items, item]})
  }
  handleSortList = () => {
    if(this.state.sortList === false){
   this.setState({sortList: true})
 } else {
   this.setState({sortList: false})
 }
  }
  render() {
console.log(this.state.sortList)
    let sortedList = this.state.items.sort( (a,b) => a.inCart - b.inCart),
    eachItem = sortedList.map( (item,index) => {
      return (
      <div
        key={index}
        style={item.inCart === true ? {'color':'grey', 'margin':'25px'} : {'color':'black', 'margin':'25px'} }>
        <h4 style={item.inCart === true ? {'text-decoration':'line-through'} : null}>
          {item.itemName}  x {item.itemQuantity}
        </h4>
        <p> $ {item.itemPrice} </p>
        <p>{item.itemDescription}</p>
          <img src={item.itemImage} style={item.inCart === true ? {'width': '150px'} : {'width': '200px'}}/>
        <br/>

        <button className='small-button' onClick={() => this.handleRemoveItem(index)}><i class="fas fa-trash-alt"></i></button>
        <button
          className='small-button'
          onClick={() => this.handleInCartItem(index)}>
          {item.inCart === true ? <i class="fas fa-undo"></i>  :  <i class="fas fa-check"></i>}
        </button>
      </div>
    )
    })
    return (
      <div >
        <AddItem onAddItem={this.handleAddItem}/>
        <br />
        <div className='flex-container'>
          <h4 >
            List Total: { this.state.items.length }
          </h4>
          <button className='sort-button' onClick={() => this.handleSortList()}>{this.state.sortList ? 'Show items checked off first' : 'Show needed items first'}</button>
        </div>
          <div style={{padding:'0 15%'}} className={this.state.sortList ? 'needed-first' : 'done-first'}>

            { eachItem }
          </div>
      </div>
    );
  }
}
export default ShoppingList
