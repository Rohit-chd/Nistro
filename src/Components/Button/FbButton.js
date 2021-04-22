import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { FBContainer, Text } from './styles';

export default function Button({ children, backgroundColor,loading, ...rest }) {
  return (
    <FBContainer {...rest} >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </FBContainer>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  loading: false,
};
