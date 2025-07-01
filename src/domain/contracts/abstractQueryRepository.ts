export abstract class AbstractQueueRepository {
    abstract publish(data: any): Promise<void>;
}