import { connect } from 'react-redux';
import BoardItem from '../../components/BoardItem';
import { onOpen } from '../../actions/game';

export default connect(
    (state, {id}) => ({
        value: state.board[id] || '',
        readOnly: state.aiMode
    }),
    {
        onClick: onOpen
    }
)(BoardItem);