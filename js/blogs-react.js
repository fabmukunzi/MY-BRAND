class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
  class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick={function() { console.log('click'); }}>
          {this.props.value}
        </button>
      );
    }
  }