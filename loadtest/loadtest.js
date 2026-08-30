import http from 'k6/http';
import { check } from 'k6';

const URL = 'http://showproduct-alb-431710136.us-east-1.elb.amazonaws.com/showProduct';

export default function () {
    const response = http.get(URL);

    check(response, {
        'status is 200': (r) => r.status === 200,
        'response is JSON': (r) =>
            r.headers['Content-Type'] &&
            r.headers['Content-Type'].includes('application/json')
    });
}