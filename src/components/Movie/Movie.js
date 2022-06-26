import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        //Como obtener el id, usando destructuring (metodo raro)
        // const { match: {params: {id}}} = this.props;

        // Obtener el id con el metodo convencional..
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId);
    }

    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula
                <br /> 
                <img src={this.props.movie.Poster} alt='movie img'></img>
                <p>{this.props.movie.Title}</p>
                <p>{this.props.movie.Plot}</p>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
      movie: state.movieDetail
    };
};
  
function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);