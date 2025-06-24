import { knex, Knex } from 'knex';
import { env } from '../config/env';
import { Singleton } from 'typescript-ioc';

@Singleton
export class KnexDatabase {
    private readonly connection: Knex;

    constructor() {
        this.connection = knex({
            client: 'pg',
            connection: {
                host: env.dbHost,
                user: env.dbUser,
                password: env.dbPass,
                database: env.dbName,
                port: env.dbPort,
            },
            pool: { min: 2, max: 10 },
        });
    }

    async insert(table: string, data: any): Promise<void> {
        await this.connection(table).insert(data);
    }
}