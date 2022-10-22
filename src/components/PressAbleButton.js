import React from 'react';
import {Pressable, Text} from 'react-native';

const PressAbleButton = (props) => {
    const _onPressIn = () => console.log('Press In');
    const _onPressOut = () => console.log('Press Out');
    const _onPress = () => console.log('Press');
    const _onLongPress = () => console.log('Long Press');

    return (
            // Hirect 구간까지 생각해서 버튼보다 조금 더 넓은 범위에서 커버리지 가능
            <Pressable
            style={{padding: 10, backgroundColor: '#1abc9c'}}
            onPressIn={_onPressIn}
            onLongPress={_onLongPress}
            onPressOut={_onPressOut}
            onPress={_onPress}
            delayLongPress={3000}
            pressRetentionOffset={{bottom: 50, left: 50, right: 50, top: 50}}
            hitSlop={50}>
            <Text style={{padding: 10, fontSize: 30}}>{props.title}</Text>
        </Pressable>
    );
};

export default PressAbleButton;
