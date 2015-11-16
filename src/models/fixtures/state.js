import fixture from 'can-fixture';

const store = fixture.store([
    { short: 'CA', name: 'Calisota'},
    { short: 'NT', name: 'New Troy'}
],{});

fixture({
  'GET /api/states': store.findAll,
  'GET /api/states/{short}': store.findOne,
  'POST /api/states': store.create,
  'PUT /api/states/{short}': store.update,
  'DELETE /api/states/{short}': store.destroy
});

export default store;
