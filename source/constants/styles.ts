import {
    Platform,
} from 'react-native';

import OSHelper from '../utilities/osHelper';

const ANDROID_CORNER_RAIDUS: number = Platform.Version < 24 ? 0 : 2;

export namespace Style {
  export enum Margins {
      small = 4,
      medium = 8,
      mediumLarge = 12,
      large = 16,
      giant = 24,
  }
  export enum CornerRadii {
      none = 0,
      small = OSHelper.switch(2, ANDROID_CORNER_RAIDUS),
      medium = OSHelper.switch(8, ANDROID_CORNER_RAIDUS),
      large = OSHelper.switch(8, ANDROID_CORNER_RAIDUS),
  }
  export namespace Colors {
    export enum Alpha {
      opaque = 1.0,
      semiOpaque = 0.7,
      semiTranslucent = 0.4,
      translucent = 0.15,
      clear = 0,
    }
  }
  export namespace Font {
    export enum Size {
      tiny = 10,
      small = 12,
      medium = 15,
      large = 17,
      giant = 21,
      title = 32,
      enourmous = 50,
    }
    export enum LineHeight {
      small = Style.Font.Size.small * 1.5,
      medium =  Style.Font.Size.medium * 1.5,
      large =  Style.Font.Size.large * 1.5,
      giant =  Style.Font.Size.giant * 1.5,
      title =  Style.Font.Size.title * 1.5,
      enourmous = Style.Font.Size.enourmous * 1.1,
    }
    export enum Weight {
      normal = '500',
      semiBold = '600',
      bold = '800',
    }
    export class Family {
      public static family = 'System';
    }
  }
}

export namespace Style.Font.LineHeight {
  export function lineHeightFor(fontSize: Style.Font.Size): Style.Font.LineHeight {
    switch (fontSize) {
      case Size.small:
        return LineHeight.small;
      case Size.medium:
        return LineHeight.medium;
      case Size.large:
        return LineHeight.large;
      case Size.giant:
        return LineHeight.giant;
      case Size.enourmous:
        return LineHeight.enourmous;
      default:
        return LineHeight.giant;
    }
  }
}
