import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const MyButton = (props) => {
    return (
        <TouchableOpacity>
            <Text style={{
                fontSize: 24,
                backgroundColor: '#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPress={() => props.onPress()}
            >{props.title}</Text>
        </TouchableOpacity>
    );
};

MyButton.propTypes = {
  title: PropTypes.string.isRequired,
};

MyButton.defaultProps = {
    title: 'wedul',
}

export default MyButton;
