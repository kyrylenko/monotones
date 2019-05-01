import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { StringUtils } from '../utils/StringUtils'
//import loading from '../assets/icons/loading.gif'

const utils = new StringUtils();

const SoundSlider = React.memo((props) => {
    
    const onSliderChange = (volume) => {
        props.playPauseVolume({
            id: props.id,
            isPlay: props.isPlay,
            volume,
            isLoaded: props.isLoaded,
        })
    }

    const clickHandler = () => {
        props.playPauseVolume({
            id: props.id,
            isPlay: !props.isPlay,
            volume: props.volume,
        })
    }

    return (
        <>
            <img alt={props.title} className='sound-icon'
                src={!props.isLoaded && props.isPlay && props.isGlobalPlay
                    ? require('../assets/icons/loading.gif') : require(`../assets/icons/white/${props.id}.png`)}
                title={utils.idToTitle(props.title)}
                style={{ opacity: props.isPlay ? 1 : null }}
                onClick={clickHandler}>
            </img>
            <Slider
                max={1}
                step={0.01}
                onChange={onSliderChange}
                value={props.volume}
                //trackStyle={{ backgroundColor: '#fff' }}
                handleStyle={{
                    height: 24,
                    width: 24,
                    marginTop: -11,
                }}
                style={{ visibility: props.isPlay ? 'visible' : 'hidden' }} />
        </>
    );
});

export default SoundSlider;