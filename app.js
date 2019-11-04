// TODO

// var Milk = () => (
//     <div>
//         Milk
//     </div>
// );

// var Egg = () => (
//     <div>
//         Egg
//     </div>
// );


// var GroceryList = () => (
//     <div>
//         <h2>Grocery List</h2>
//         <Milk/>
//         <Egg/>

//     </div>

// );

//  GroceryListItem = (props) => {
   
//     var onListItemClick = (event) => {
//         console.log('I got clicked');
//       };

//    return (
//    <div>
//     {/* <h2>Grocery List</h2> */}
//     <ul>
//       <li onClick = {onListItemClick}>{props.item[0]}</li>
//       <li>{props.item[1]}</li>
//       <li>{props.item[2]}</li>
//     </ul>
//     </div>
//    )
// };
  


class GroceryListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            done: false
        };
    }

    onListItemClick() {
        this.setState({
            done: !this.state.done
        })
    }


    render() {
        var style = {
            'font-weight': this.state.done ? 'bold' : 'normal'
          };

        return (
           <li style={style} onMouseOver ={this.onListItemClick.bind(this)} onMouseOut={this.onListItemClick.bind(this)}>{this.props.item}</li>
        );
        
    }
} 

var GroceryList = (props) => (
    <ul>
        {props.todo.map(item => 
            <GroceryListItem item = {item}/>
        )}
    </ul>
);




  var App = () => (
    <div>
      <h2>My Grocery List</h2>
      <GroceryList todo={['Milk', 'Eggs', 'Bread']}/> 
    </div>
  );


ReactDOM.render(<App />, document.getElementById("app"));