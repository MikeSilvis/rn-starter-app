import { Platform } from 'react-native';

export default class OS {
  public static switch(ios: any, android: any) {
    return Platform.OS === 'ios' ? ios : android;
  }

  public static get iOS(): boolean {
    return OS.switch(true, false);
  }

  public static get android(): boolean {
    return OS.switch(false, true);
  }
}
