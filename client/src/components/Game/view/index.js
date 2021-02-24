import React, { Component } from 'react';
import Button from "../../Button";
import "./index.css";

class Game extends Component {
  constructor(props){
    super(props);
  };

  test = () => {
    this.props.dispatch(
      this.props.gModel.status.gUpdate("test")
    );
  }

  generateTask = () => {
    this.props.dispatch(
      this.props.operations.generateTask()
    );
  }

  selectItem = (idItem) => {
    this.props.dispatch(
      this.props.operations.selectItem(idItem)
    );
  }

  componentDidMount = () => {
    this.generateTask();
  }

  render() {
    if(!this.props.gModel || !this.props.gModel.gValue) return false;

    const value = this.props.gModel.gValue;

    if(value.status === "generate"){
      if(value.items){
        return (
          <article className="game">Генерация...</article>
        );
      }
    }
    
    if(value.status === "task"){
      return (
        <article className="game">
          <ul className="items">
            {
              value.task.map((id, i) => {
                const item = value.items.find(e => e.id === id);
                
                return (
                  <li className="items__item" key={i}>
                    <img src={item.src} className="items__item-image" />
                  </li>
                );
              })
            }
          </ul>
          <Button className="game__btn" onClick={this.test}>Готов</Button>
        </article>
      );
    }
    
    if(value.status === "test"){
      return (
        <article className="game">
          <ul className="items">
            {
              value.items.map((item, i) => {
                return (
                  <li className="items__item" key={i} onClick={() => {this.selectItem(item.id)}}>
                    <img src={item.src} className="items__item-image" />
                  </li>
                );
              })
            }
          </ul>
        </article>
      );
    }

    return false;
  }
}

export default Game;