import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 15,
    duration: '1000s',
};

export default function () {
    http.get('http://watanabe-app-autoscaling-alb-710913120.ap-northeast-1.elb.amazonaws.com:8080/api/encryptor');
    sleep(1);
}
