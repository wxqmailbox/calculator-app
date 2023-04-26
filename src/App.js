import logo from './logo.svg';
import './App.css';

function App() {

    //入力テキストボックスのコンポーネント
    function ValueInput(props) {
        return <input type="text" value={ props.value } />
    }

    //答えテキストボックスのコンポーネント
    function ValueAnswer(props) {
        return <span>{props.value}</span>
    }

    return (
        <div>
            <ValueInput value="5" /> + <ValueInput value="8" /> = <ValueAnswer value="13" />
        </div>
    );
}

export default App;

//  コンポーネントをクラスで表現する」まで組み込みました。2023/04/26
