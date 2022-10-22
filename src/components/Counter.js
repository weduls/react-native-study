import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MyButton from './MyButton';
import EventButton from './EventButton';

const Counter = () => {
    // inittialState는 0
    const [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 30, margin: 10}}>count : {count}</Text>
            <Text style={{fontSize: 30, margin: 10}}>double : {double}</Text>
            <MyButton title="+" onPress={() => {
                setCount(count + 1);
                setDouble(double + 2);
            }}/>
            <MyButton title="-" onPress={() => {
                setCount(count - 1);
                setDouble(double - 2);
            }}/>
            <EventButton/>
        </View>
    );
};

export default Counter;
