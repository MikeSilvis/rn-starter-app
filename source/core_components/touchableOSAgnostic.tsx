import * as React from 'react';

import {Animated, Platform, TouchableNativeFeedback, TouchableOpacity} from 'react-native';

import { Style } from '../constants/styles';

interface Props {
  children?: React.ReactNode;
  style?: any;
  hitSlop?: any;
  scaleTouchdownEffect?: boolean;
  onPress: () => void;
}

interface State {
  scale: Animated.Value;
}

const SCALE_FACTOR = 0.975;

export default class TouchableOSAgnostic extends React.PureComponent <Props, State> {

  public static defaultProps: Partial<Props> = {
    scaleTouchdownEffect: false,
  };

  public state = {
    scale: new Animated.Value(1),
  };

  public render() {
    if (Platform.OS === 'ios') {
      return (
        <TouchableOpacity
          activeOpacity={this.props.scaleTouchdownEffect ? 1.0 : Style.Colors.Alpha.semiTranslucent }
          style={[this.dynamicTouchableStyle, this.props.style]}
          onPress={() => this.props.onPress() }
          delayPressIn={0}
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
          hitSlop={this.props.hitSlop}
          >
          {this.props.children}
        </TouchableOpacity>
      );
    }
    return (
      <TouchableNativeFeedback onPress={() => this.props.onPress()} style={this.props.style} hitSlop={this.props.hitSlop}>
        {this.props.children}
      </TouchableNativeFeedback>
    );
  }

  private onPressIn = () => {
    this.setState({
      scale: new Animated.Value(SCALE_FACTOR),
    });
  }

  private onPressOut = () => {
    Animated.timing(this.state.scale, {
      toValue: 1.0,
      duration: 75,
      useNativeDriver: true,
    }).start();
  }

  private get dynamicTouchableStyle(): any {
    const useScaleEffect = this.props.scaleTouchdownEffect;

    return {
      transform: [
        { scaleX: useScaleEffect ? this.state.scale : 1.0 },
        { scaleY: useScaleEffect ? this.state.scale : 1.0 },
      ],
    };
  }
}
