import {connect} from 'react-redux'
import * as darkskyActions from '../store/darksky/actions'
import Homescreen from "../components/Homescreen";

const mapStateToProps = state => {
    return {
        darkskyData: state.darksky.data,
        netatmoData: state.netatmo.station_data,
        loading: state.darksky.loading,
        first_fetch: state.darksky.first_fetch,
        info: state.application.info,
        locale: state.application.user.lang
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDarksky: () => {
            dispatch(darkskyActions.fetchDarksky())
        }
    }
};

const HomescreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Homescreen);

export default HomescreenContainer
