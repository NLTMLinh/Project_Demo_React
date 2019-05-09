import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Figure from "../../assets/resources/screen-shot-2019-02-28-at-1-01-43-pm-copy@2x.png";
import TuiXach from "../../assets/resources/tuixach.jpg";
import avatar from "../../assets/resources/avatar.png";
import './BotNews.css';
import '../../assets/style/res.css';

function UserPost(props) {
    return (
        <Container container-fluid="true">
            <Row className='content-bot-news'>
                <Col className="p-0">
                    <img src={props.Image} className="figure" alt={props.Name}/>
                </Col>
                <Col>
                    <Row>
                        <div className="figure-caption">
                            <div className="title">
                                {props.title}
                            </div>
                            <div className=" content">
                                <div className="avatar">
                                    <img src={props.Avatar} alt={props.Ava}/>
                                </div>
                                <div className="post-name">
                                    <span>{props.postname}</span>
                                    <br/>
                                    <span className="tag-name">@{props.tagName}</span>
                                </div>
                            </div>

                        </div>
                    </Row>
                </Col>
                <Col className="category">
                    <div className="align-self-end"><a href="#">{props.category}</a></div>
                </Col>
            </Row>
        </Container>
    )
}

export default class BotNews extends Component {
    render() {
        return (
            <div className="bot-news">
                <Container>
                    <Row>
                        <Col xl={4} lg={4}>
                            <UserPost
                                Image={Figure}
                                Name="Really Good Marketing"
                                title=" Cheap Airline Tickets Great Ways To Save"
                                Avatar={avatar} Ava="Avatar"
                                postname="Bài viết của Ollie Buchanan"
                                tagName="Oliebu"
                                category="Giáo dục - Tin tức"/>
                        </Col>
                        <Col xl={8} lg={8}>
                            <UserPost
                                Image={TuiXach}
                                Name="Túi Xách"
                                title=" Cheap Airline Tickets Great Ways To Save"
                                Avatar={avatar} Ava="Avatar"
                                postname="Bài viết của Ollie Buchanan"
                                tagName="Oliebu"
                                category="Giáo dục - Tin tức"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}