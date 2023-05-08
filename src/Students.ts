export class Student {
    private _code : string;
    private _name : string;
    private _className : string;
    private _hometown : string;
    private _pointStudent : number;
    private _interestStudent : string;

    constructor(code: string, name: string, className: string, hometown: string, pointStudent: number, interestStudent: string) {
        this._code = code;
        this._name = name;
        this._className = className;
        this._hometown = hometown;
        this._pointStudent = pointStudent;
        this._interestStudent = interestStudent;
    }

    getCode(): string {
        return this._code;
    }

    setCode(value: string) {
        this._code = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getClassName(): string {
        return this._className;
    }

    setClassName(value: string) {
        this._className = value;
    }

    getHometown(): string {
        return this._hometown;
    }

    setHometown(value: string) {
        this._hometown = value;
    }

    getPointStudent(): number {
        return this._pointStudent;
    }

    setPointStudent(value: number) {
        this._pointStudent = value;
    }

    getInterestStudent(): string {
        return this._interestStudent;
    }

    setInterestStudent(value: string) {
        this._interestStudent = value;
    }
}