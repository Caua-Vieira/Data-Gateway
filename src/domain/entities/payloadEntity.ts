export class Payload {
    constructor(
        public readonly id: string,
        public readonly cpf: string,
        public readonly nome: string,
        public readonly createdAt: Date
    ) {
        if (createdAt.getTime() > Date.now()) {
            throw new Error('Data de criação não pode estar no futuro.');
        }
    }

    get maskedCpf(): string {
        return this.cpf.replace(/(\d{3})\d{3}(\d{3})(\d{2})/, '$1.***.***-$4');
    }
}