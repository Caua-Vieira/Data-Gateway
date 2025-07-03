export abstract class AbstractQueueProducer {
    abstract publish(data: any): Promise<void>;
}