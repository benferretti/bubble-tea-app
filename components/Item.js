import React, { Component } from 'react';
import {  Animated, Text, TouchableOpacity, StyleSheet,Image, Dimensions, Platform,  UIManager } from 'react-native';


    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);
        if (Platform.OS === 'android') {
          UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }