import { connect } from 'react-redux';
import OutFitCard from '../../components/Deo/OutfitProductCard.jsx';
import outfitActions from '../actions/ProductActions/addOutfitActions.js';

const mapStateToProps = (state) => ({
  userOutFits: state.userOutFits,
  currentProduct: state.currentProduct,
  relatedProducts: state.relatedProducts,
});

const mapDispatchToProps = (dispatch) => ({
  handleOutFitAddition: (product) => {
    dispatch(outfitActions.addOutfitAction(product));
  },
});

const AddOutFitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OutFitCard);

export default AddOutFitContainer;
