import { start } from '@infrastructure/webserver/server';

try {
    start();
} catch (err) {
    console.log(err);
    process.exit(1);
}
