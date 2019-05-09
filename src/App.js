import React,{Component} from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import TopNews from './components/TopNews/TopNews';
import MidNews from './components/MidNews/MidNews';
import BotNews from './components/BotNews/BotNews';
import Footer from './components/Footer/Footer';
import Mobile from './components/Mobile/Mobile';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";


export default class App extends Component{
    constructor(props) {
        super(props);
        this.state ={
            isLoggedIn: localStorage.getItem("isLoggedIn")
        };
        this.authStateChangedHandler = this.authStateChangedHandler.bind(this)
    }

    authStateChangedHandler(value){
        console.log("Auth changed in App")
        this.setState({ isLoggedIn: value })
    }
    componentDidMount() {
        window.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleClickOutside, true);
    }
    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);
        if (!domNode || !domNode.contains(event.target)) {
            this.setState({isOpen: false})
        }
    }
    render() {
        return(
            <div>
                <Header isLoggedIn={this.state.isLoggedIn} authStateChangedHandler = {this.authStateChangedHandler} />
                <Menu/>
                <TopNews/>
                <MidNews/>
                <BotNews/>
                <Mobile/>
                <Footer isLoggedIn={this.state.isLoggedIn} authStateChangedHandler = {this.authStateChangedHandler}/>
            </div>
        )
    }
}
