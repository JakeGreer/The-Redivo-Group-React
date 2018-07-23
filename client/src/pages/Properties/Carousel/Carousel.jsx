import React, { PropTypes, Component } from "react";
import CarouselContainer from "./CarouselContainer";
import Arrow from "../../../components/Arrow";
import Wrapper from "./Wrapper";
import CarouselSlot from "./CarouselSlot";
class Carousel extends Component {
  state = {
    position: 0
  };

  getOrder = itemIndex => {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }
    return itemIndex - position;
  };

  nextSlide = () => {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;
    this.setState({
      position: position === numItems - 1 ? 0 : position + 1
    });
  };

  render() {
    const { title, children } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <Wrapper>
          <Arrow size="large" direction="left" />
          <CarouselContainer>
            {children.map((child, index) => (
              <CarouselSlot key={index} order={this.getOrder(index)}>
                {child}
              </CarouselSlot>
            ))}
          </CarouselContainer>
          <Arrow size="large" direction="right" />
        </Wrapper>
      </div>
    );
  }
}
Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};
export default Carousel;
