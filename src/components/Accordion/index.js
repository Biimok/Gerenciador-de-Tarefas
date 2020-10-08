import React, {useEffect, useState} from 'react';
import { View, LayoutAnimation, Platform, UIManager} from "react-native";

import {
    Seta,
    Title,
    Parent,
    Desc,
    Icone
} from './styles';
const Accordion = ( props ) => {
    // const [data, setData] = useState(props.data);
    const [expanded, setExpanded] = useState(false);
    

    useEffect( () => {
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    },[]) 
        
    const toggleExpand = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setExpanded(!expanded);
    }

    return (
       <View>
            <Seta onPress={()=>toggleExpand()}>
                <Title>{props.title}</Title>
                <Icone name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} />
            </Seta>
            <Parent/>
            {
                expanded &&
                <Desc>
                    {props.children}
                </Desc>
            }
            
       </View>
    )
  }

export default Accordion;