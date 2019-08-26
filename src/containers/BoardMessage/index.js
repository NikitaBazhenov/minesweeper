import { connect } from 'react-redux';
import Message from '../../components/Message';

export default connect(
    state => ({
        message: state.message.text,
        type: state.message.type
    }),
    {
    }
)(Message);