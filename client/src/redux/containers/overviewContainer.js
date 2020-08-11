import { connect } from "react-redux";
import Overview from "../../components/Liam/Overview.jsx";
//import changeVideo from "./../actions/currentVideo.js";

const mapStateToProps = (state) => ({
  //videos: state.videoList,
});

const mapDispatchToProps = (dispatch) => ({
  //handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)),
});

var OverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);
//)(VideoList);

export default OverviewContainer;
