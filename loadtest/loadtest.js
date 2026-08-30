
import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const response = http.get(
    );

    check(response, {
        'status is 200': (r) => r.status === 200,
        'response is JSON': (r) => r.headers['Content-Type'].includes('application/json')
    });
}
