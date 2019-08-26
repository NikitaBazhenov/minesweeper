import { connect } from 'react-redux';
import AIConfig from '../../components/Toggle';
import { setAiMode } from '../../actions/game';

export default connect(
    state => ({
        checked: state.aiMode,
        label: 'Solve with AI'
    }),
    {
        onChange: setAiMode
    }
)(AIConfig);