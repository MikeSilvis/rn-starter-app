import { Style } from '../constants/styles';

export default class Font {
    private weight: Style.Font.Weight;
    private size: Style.Font.Size;

    constructor(weight: Style.Font.Weight, size: Style.Font.Size) {
        this.weight = weight;
        this.size = size;
    }

    public get toStyle(): any {
        return {
            fontFamily: Style.Font.Family.family,
            fontWeight: this.weight,
            lineHeight: Math.floor(Style.Font.LineHeight.lineHeightFor(this.size)),
            fontSize: this.size,
        };
    }
}
