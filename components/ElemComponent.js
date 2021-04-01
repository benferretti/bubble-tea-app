import React, {useEffect} from 'react';
import { List, Button} from 'react-native-paper';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

function ELemComponent (props) {
    const renderDetails = (detail) => {
        return <List.Accordion 
        title={detail.name}>
            
        </List.Accordion>
    }

    const renderChildren = (child) => {
        for (let detail of child.children) {
            console.log(detail)
        }
        return <Text>{child.name}</Text>
    }

    const renderItem = () => {
        return (
        <List.Accordion
            title={props.item.name}>
                {props.item.children.forEach(child => {
                    console.log("renderchildren")
                    renderChildren(child)
                })}
        </List.Accordion>
        )
    }
    return (
        <SafeAreaView>
            {renderItem()}
        </SafeAreaView>
    );
  };
  
export default ELemComponent;