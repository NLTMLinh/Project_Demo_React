import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Figure from '../../assets/resources/tuixach.jpg';
import avatar from '../../assets/resources/avatar.png';
import ImgNews from '../../assets/resources/screen-shot-2019-02-28-at-1-01-36-pm-copy.png';
import './TopNews.css';
import '../../assets/style/res.css';

function Post(props) {
    return (
        <div className="post_section">
            <div className="post_figure">
                <img src={ImgNews} alt="Image news"/>
            </div>
            <div className=" post_content">
                <div className="post_date">
                    {props.date}
                </div>
                <div className="post_title">
                    {props.title}
                </div>
                <div className="post_category">
                    <div className="align-self-end"><a href="#"> {props.meta}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function UserPost(props) {
    return (
    <Container container-fluid="true">
        <Row className='content-top-left-news'>
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

export default class TopNews extends Component {
    render() {
        return (
            <Container className="top-news">
                <Row>
                    <Col xl={8} lg={8} className="top-left-news">
                        <UserPost
                            Image = {Figure}
                            Name = "Túi Xách"
                            title = " Cheap Airline Tickets Great Ways To Save"
                            Avatar = {avatar} Ava="Avatar"
                            postname = "Bài viết của Ollie Buchanan"
                            tagName = "Oliebu"
                            category = "Giáo dục - Tin tức"
                        />
                    </Col>
                    <Col xl={4} lg={4} className="top-right-news">
                        <div className="Doc-Nhieu-Nhat">
                            <div className="meta">Đọc nhiều nhất</div>
                            <Post date="25 Apr 2019" title="When The Morning Dawns" meta="Giáo dục - Tin tức"/>
                            <Post date="25 Apr 2019" title="When The Morning Dawns" meta="Giáo dục - Tin tức"/>
                        </div>
                        <div className="Editors-choice">
                            <div className="meta">Editor's choice</div>
                            <Post date="25 Apr 2019" title="When The Morning Dawns" meta="Giáo dục - Tin tức"/>
                            <Post date="25 Apr 2019" title="When The Morning Dawns" meta="Giáo dục - Tin tức"/>
                            <Post date="25 Apr 2019" title="When The Morning Dawns" meta="Giáo dục - Tin tức"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}