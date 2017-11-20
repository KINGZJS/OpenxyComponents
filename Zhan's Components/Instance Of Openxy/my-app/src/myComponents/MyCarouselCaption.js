import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Button} from 'reactstrap'

const ButtonStyle={
    marginTop:90,
    fontSize:20,
    fontWeight:300
}

const H_style={
    fontSize:70
}

const P_Style={
    fontSize:30,
    fontWeight:100
}

function mapToCssModules(className, cssModule) {
    if (!cssModule) return className;
    return className.split(' ').map(c => cssModule[c] || c).join(' ');
}



const CarouselCaption = (props) => {
    const { captionHeader, captionText,captionButton,cssModule, className } = props;
    const classes = mapToCssModules(classNames(
        className,
        'carousel-caption',
        'd-none',
        'd-md-block'
    ), cssModule);

    return (
        <div className={classes}>
            <h1 style={H_style}>{captionHeader}</h1>
            <p style={P_Style}>{captionText}</p>
            <Button color="light" style={ButtonStyle}>{captionButton}</Button>
        </div>
    );
};

CarouselCaption.propTypes = {
    captionHeader: PropTypes.string,
    captionText: PropTypes.string.isRequired,
    captionButton:PropTypes.string,
    cssModule: PropTypes.object,
    className: PropTypes.string,
};

export default CarouselCaption;