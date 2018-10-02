import React, { Component } from 'react';
import { RowsView } from '../components/RowsView';
import { GlobalPlayPause } from '../components/GlobalPlayPause';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/sounds';
import soundIds from '../constants/soundIds';

class Home extends Component {

    //sounds = Object.values(soundIds).map(x => { return { id: x, isPlay: false, volume: 0.1 } });

    state = {
        isGlobalPlay: false
    };

    playPause(isGlobalPlay) {
        this.setState({ isGlobalPlay });
    };

    aggregateSounds = () => {

        let aggregate = Object.values(soundIds).map(x => {
            let setting = this.props.sounds.find(s => s.id === x);
            let hasSetting = setting !== undefined;

            return {
                id: x,
                isPlay: hasSetting ? setting.isPlay : false,
                volume: hasSetting ? setting.volume : 0.1
            };
        });

        return aggregate;
    }

    render() {
        //console.log("Home this.props ", this.props);
        return (
            <div>
                <GlobalPlayPause isGlobPlay={this.state.isGlobalPlay} playPause={(m) => this.playPause(m)} />
                <RowsView sounds={this.aggregateSounds()} playPauseVolume={this.props.playPauseVolume} isGlobalPlay={this.state.isGlobalPlay} />
            </div>
            /* TODO Here should be a logic responsible for different views of sounds page  */
        );
    }
};

export default connect(
    state => state.main,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);