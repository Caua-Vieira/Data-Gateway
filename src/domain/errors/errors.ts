export class ValidationException extends Error {
    public readonly name = 'Validation Error';

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, ValidationException.prototype);
    }
}