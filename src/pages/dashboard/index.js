import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addCard, editCard } from "../../data/actions";
import Dashboard from "./Dashboard";

const mapStateToProps = (state) => ({
    cards: state['cards'] || null
});

const mapDispatchToProps = dispatch => ({
    addCard: (name, cardNo, expiry) => dispatch(addCard(name, cardNo, expiry)),
    editCard: (id, name, cardNo, expiry) => dispatch(editCard(id, name, cardNo, expiry))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps))(Dashboard);