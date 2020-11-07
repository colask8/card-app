import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { EditCard } from "./edit-card";
import { addCard, editCard } from "../../data/actions";

const mapStateToProps = (state) => ({
    cards: state['cards'] || null
});

const mapDispatchToProps = dispatch => ({
    addCard: (name, cardNo, expiry) => dispatch(addCard(name, cardNo, expiry)),
    editCard: (id, name, cardNo, expiry) => dispatch(editCard(id, name, cardNo, expiry))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps))(EditCard);