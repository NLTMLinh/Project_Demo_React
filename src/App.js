import React,{Component} from 'react';
import Header from './containers/Header/Header';
import Menu from './components/Menu/Menu';
import TopNews from './components/TopNews/TopNews';
import MidNews from './components/MidNews/MidNews';
import BotNews from './components/BotNews/BotNews';
import Footer from './containers/Footer/Footer';
import Mobile from './components/Mobile/Mobile';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";

 export default class App extends Component{
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
                <Header/>
                <Menu/>
                <TopNews/>
                <MidNews/>
                <BotNews/>
                <Mobile/>
                <Footer/>
            </div>
        )
    }
}