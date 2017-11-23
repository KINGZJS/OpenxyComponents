import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import styled from 'styled-components';
import pic from './img/pic.png';

const OpCarousel = styled.div`{
    margin-left:-15px;
    margin-right:-15px;
}`;

const OpCarouselCaption = styled.div`{
    CarouselCaption{
        text-algin:center;
    }
}`;

const items = [
    {
        src:pic,
        altText: 'Slide 1',
        caption: '敬请期待！',
    },
    {
        src:pic,
        altText: 'Slide 2',
        caption: '敬请期待！',
    },
    {
        src:pic,
        altText: 'Slide 3',
        caption: '敬请期待！',
    }
];

class OpenxyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item, index) => {
            // 请保证key不能相同! 否则只有第一个会被React渲染
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src+'_carouselItem_'+index}
                    src={item.src}
                    altText={item.altText}
                >
                    <CarouselCaption captionText={item.caption} captionHeader='新一代在线学习平台'/>
                </CarouselItem>
            );
        });

        return (
            <OpCarousel>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </OpCarousel>
        );
    }
}


export default OpenxyCarousel;