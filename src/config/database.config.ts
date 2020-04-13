import {registerAs} from '@nestjs/config';

export default registerAs('database', () => ({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '960430',
  database: 'neo-band',
}));
