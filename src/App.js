import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';


//テキストボックスコンポーネント
class ValueInput extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.valueChange(e.target.value)
    }

    render() {
        const newValue = this.props.value
        return <input type="text" value={newValue} onChange={this.handleChange}/>
    }  
}


//答えのコンポーネント
class ValueAnswer extends React.Component {
    render() {
        return <span>{this.props.value}</span>
    }
}


//計算機コンポーネント
class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.changeValue1 = this.changeValue1.bind(this)
        this.changeValue2 = this.changeValue2.bind(this)
        this.state = {
            value1: 0,
            value2: 0,
            answer: 0
        }
    }

    //左テキストボックス用変更メソッド
    changeValue1(newValue) {
        let ans = parseInt(newValue) + parseInt(this.state.value2)
        this.setState({
            value1: newValue,
            answer: ans
        })
    }


    //右テキストボックス用変更メソッド
    changeValue2(newValue) {
        let ans = parseInt(newValue) + parseInt(this.state.value1)
        this.setState({
            value2: newValue,
            answer: ans
        })
    }

    render() {
        const newValue1 = this.state.value1
        const newValue2 = this.state.value2
        return (
                <div>
                    <ValueInput value={newValue1} valueChange={this.changeValue1} /> +
                    <ValueInput value={newValue2} valueChange={this.changeValue2} /> =
                    <ValueAnswer value={this.state.answer} />
                </div>
        );
    }
}

export default Calculator;