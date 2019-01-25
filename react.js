const Square= (props) => {
    return (
       <button 
        style={
            {
              width:'34px', 
              border: '1px solid #999',
              height: '34px' , 
              backgroundColor: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              lineHeight: '34px',
              outline: 'none'
            }
          }   
          onClick={props.clicked}>
            {props.value}
      </button>
    );
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: false
    }
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O'; 
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
    console.log(this.state.squares);
  }
  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]}
      clicked={() => this.handleClick(i)}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div 
        style={
          { 
            display: 'flex',
            flexDirection: 'row'
           }}>
        <div>
          <Board />
        </div>
        <div>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('app')
);