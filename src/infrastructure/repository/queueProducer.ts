import { AbstractQueueProducer } from "../../domain/contracts/abstractQueueProducer";
import amqp from 'amqplib';

export class QueueProducer implements AbstractQueueProducer {
    private channel: amqp.Channel | null = null;

    async connect(): Promise<void> {
        const connection = await amqp.connect('amqp://localhost');
        this.channel = await connection.createChannel();
        await this.channel.assertQueue('payloads');
    }

    async publish(data: any): Promise<void> {
        if (!this.channel) {
            await this.connect();
        }

        this.channel!.sendToQueue('payloads', Buffer.from(JSON.stringify(data)));
    }
}