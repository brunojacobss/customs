import request from 'supertest';
import { app } from '../../app';

it('should randomize teams so that they are balanced', async () => {
  const response = await request(app).get('/api/randomize-teams').expect(200);

  expect(response.body.length).toEqual(2);
  expect(response.body[0].totalRank).toEqual(10);
  expect(response.body[1].totalRank).toEqual(10);
});
