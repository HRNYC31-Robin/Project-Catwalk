import { connect } from 'react-redux';
import Overview from '../../components/Liam/Overview.jsx';

var mapStateToProps = (state) => ({
  //productList: state.productList,
});

var mapDispatchToProps = (dispatch) => ({
  //productList: state.productList,
});

var OverviewContainer = connect(mapStateToProps, mapDispatchToProps)(Overview);

export default OverviewContainer;
