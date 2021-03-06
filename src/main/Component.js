import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { chooseLanguage } from '../redux/actions';
import { isEnglish } from '../I18n';

class Main extends Component {
  async componentDidMount() {
    if (this.props.setting.language === '') {
      if (isEnglish()) {
        this.props.chooseLanguage('en');
      } else {
        this.props.chooseLanguage('id');
      }
    } else {
      this.props.chooseLanguage(this.props.setting.language);
    }

    this.props.navigation.navigate('App');
  }

  render() {
    return null;
  }
}

Main.propTypes = {
  setting: PropTypes.object.isRequired,
  chooseLanguage: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setting: state.setting
});

const mapDispatchToProps = {
  chooseLanguage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
