/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ToastAndroid,
} from 'react-native';
import CreateHeroView from './CreateHeroView';
import ListHeroesView from './ListHeroesView';
import { EventEmitter } from 'events';

export default class HomeView extends Component<Props> {

    constructor(props: Props) {
        super(props);

        this.state = {
            heroes: [],
        };

        this.event = new EventEmitter();
    }

    componentWillMount() {
        this.initListHeroes();
        this.event.addListener('onCreateHero', () => this.initListHeroes());
        this.event.addListener('onUpdateHero', () => this.initListHeroes());
        this.event.addListener('onDeleteHero', () => this.initListHeroes());
    }

    componentWillUnmount() {
        this.event.removeAllListeners();
    }

    initListHeroes = () => {
        ToastAndroid.show('Init list heroes', ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={styles.container}>
                <CreateHeroView event={this.event}/>
                <ListHeroesView heroes={this.state.heroes} event={this.event}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});