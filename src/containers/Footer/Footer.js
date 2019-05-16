import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import './Footer.css';
import '../../assets/style/res.css';
import ImgCHPlay from '../../assets/resources/screen-shot-2019-01-24-at-11-13-29-am.png';
import ImgGooglePlay from '../../assets/resources/screen-shot-2019-01-24-at-11-13-29-am.png';
import LogoutButton from '../Header/LogoutButton'
import {connect} from "react-redux";

class Footer extends Component {
    constructor(props) {
        super(props);
        // this.authStateChangedHandler = this.authStateChangedHandler.bind(this);
        this.state = {
            isLoggedIn: this.props.isLoggedIn
        };
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('footer', nextProps.isLoggedIn, this.state.isLoggedIn);
        if (nextProps.isLoggedIn !== this.state.isLoggedIn) {
            console.log('set props');
            this.setState({isLoggedIn: nextProps.isLoggedIn})
        }
        if (nextProps.isLoggedIn === false) {
            console.log("display btnLogout");
            document.getElementsByClassName('btnLogout')[0].style.display = 'none';

        }
    }

    componentDidMount() {
        console.log("isLoggedIn footer", this.state.isLoggedIn);
        if (this.state.isLoggedIn === true) {
            document.getElementsByClassName('btnLogout')[0].style.display = "block";

        } else {
            document.getElementsByClassName('btnLogout')[0].style.display = 'none';

        }
    }

    render() {
        return (
            <div className="footer mr-auto">
                <Container container-fluid="true">
                    <Row className="content-footer">
                        <Col xl={5} lg={5} className="section-footer">
                            <div className="Dieu-khoan-chinh-sach">
                                <div className="footer-title">
                                    <span>ĐIỀU KHOẢN CHÍNH SÁCH</span>
                                </div>
                                <div className="footer-item">
                                    <a href="#">ĐIỀU KHOẢN SỬ DỤNG</a>
                                    <br/>
                                    <a href="#">CHÍNH SÁCH QUYỀN RIÊNG TƯ</a>
                                    <br/>
                                    <a href="#">CHÍNH SÁCH ĐĂNG TIN</a>
                                    <br/>
                                    <a href="#">CHÍNH SÁCH COOKIE</a>
                                </div>
                            </div>
                            <div className="doi-tac">
                                <div className="footer-title">
                                    <span>ĐỐI TÁC</span>
                                </div>
                                <div className="footer-item">
                                    <a href="#">MỜI HỢP TÁC</a>
                                    <br/>
                                    <a href="#">NGÂN HÀNG</a>
                                    <br/>
                                    <a href="#">NHÂN VIÊN NGÂN HÀNG</a>
                                    <br/>
                                    <a href="#">NHÀ QUẢNG CÁO</a>
                                </div>
                            </div>
                        </Col>
                        <Col xl="auto" lg="auto" className="section-footer-social">
                            <div className="footer-title">
                                <span>KẾT NỐI VỚI RAPBANK</span>
                            </div>
                            <div className="footer-item">
                                <div className="footer-social">
                                    <i className="fab fa-facebook fa-2x"/>
                                    <i className="fab fa-youtube-square fa-2x"/>
                                    <i className="fab fa-twitter-square fa-2x"/>
                                    <i className="fab fa-instagram fa-2x"/>
                                </div>
                                <hr/>
                                <a href="#" className="Ho-Tro">HỖ TRỢ</a>
                                <br/>
                                <a href="#">GIỚI THIỆU | TRỢ GIÚP | LIÊN HỆ</a>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} className="section-footer-social">
                            <div className="footer-title">
                                <span>RAPBANK</span>
                            </div>
                            <div className="logo-CHPlay">
                                <img src={ImgCHPlay} alt="Lo go CH play"/>
                                <img src={ImgGooglePlay} alt="Lo go Google Play"/>

                            </div>

                            <div className="footer-rapbank-VN font-weight-normal">
                                <span>©  2019 Rapbank Viet Nam, All right reserved</span>
                            </div>
                        </Col>
                    </Row>
                    <div className="btnLogout">
                        <LogoutButton/>
                    </div>
                </Container>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return{
        isLoggedIn: state.login_logout.isLoggedIn
    }
};

export default connect(mapStateToProps)(Footer)