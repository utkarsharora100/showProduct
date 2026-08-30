
import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const response = http.get('http://showproduct-alb-431710136.us-east-1.elb.amazonaws.com/showProduct');

    check(response, {
        'status is 200': (r) => r.status === 200,
        'response is JSON': (r) => r.headers['Content-Type'].includes('application/json')
    });
}
