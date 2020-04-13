import http from 'k6/http';
import { Counter } from "k6/metrics";
import { check } from 'k6';

let ErrorCount = new Counter('errors');
export let options = {
  vus: 1,
  // rps: 500,
  // iterations: 100,
  duration: '10s',
//   stages: [
//     { duration: '1m', target: 10 },
//     { duration: '1m', target: 20 },
//     { duration: '1m', target: 0 },
//   ],
//   thresholds: { http_req_duration: ['avg<100', 'p(95)<200'] },
};

export default function() {
  let res = http.get('http://localhost:3001/search/women');
  let success = check(res, {
    'status is 200': r => r.status === 200
  });
  if(!success){
    ErrorCount.add(1) ;
  }
}