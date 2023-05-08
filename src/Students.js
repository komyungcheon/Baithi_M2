"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(code, name, className, hometown, pointStudent, interestStudent) {
        this._code = code;
        this._name = name;
        this._className = className;
        this._hometown = hometown;
        this._pointStudent = pointStudent;
        this._interestStudent = interestStudent;
    }
    Student.prototype.getCode = function () {
        return this._code;
    };
    Student.prototype.setCode = function (value) {
        this._code = value;
    };
    Student.prototype.getName = function () {
        return this._name;
    };
    Student.prototype.setName = function (value) {
        this._name = value;
    };
    Student.prototype.getClassName = function () {
        return this._className;
    };
    Student.prototype.setClassName = function (value) {
        this._className = value;
    };
    Student.prototype.getHometown = function () {
        return this._hometown;
    };
    Student.prototype.setHometown = function (value) {
        this._hometown = value;
    };
    Student.prototype.getPointStudent = function () {
        return this._pointStudent;
    };
    Student.prototype.setPointStudent = function (value) {
        this._pointStudent = value;
    };
    Student.prototype.getInterestStudent = function () {
        return this._interestStudent;
    };
    Student.prototype.setInterestStudent = function (value) {
        this._interestStudent = value;
    };
    return Student;
}());
exports.Student = Student;
