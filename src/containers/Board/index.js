import { connect } from 'react-redux';
import Board from '../../components/Board';
import BoardItem from '../BoardItem';

export default connect(
    state => ({
        data: Object.keys(state.board),
        itemsInRow: state.itemsInRow,
        Item: BoardItem
    }),
    {}
)(Board);