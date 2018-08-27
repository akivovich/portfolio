import React from 'react';
import cx from 'classnames';
import './ColorPicker.less';

const ColorPicker = (props) => {
    const COLORS = ['white', '#80D8FF', '#FFFF8D', '#FFBA80', '#CCFF90', '#CFD8DC', '#FFD180'];
    return ( 
        <div className='color-picker'>
            {
                COLORS.map(color =>
                    <div 
                        key={color}
                        className={cx('color-picker__swatch', {selected: props.value === color})}
                        style={{backgroundColor:color}}
                        onClick={props.onChange.bind(null, color)}
                    />
                )
            }
        </div>
    );
};

export default ColorPicker;
