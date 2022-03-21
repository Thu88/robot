export default class Square {
    private _x: number;
    private _y: number;
    private _active: boolean;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
        this._active = false;
    }

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    public get active(): boolean {
        return this._active;
    }
}

