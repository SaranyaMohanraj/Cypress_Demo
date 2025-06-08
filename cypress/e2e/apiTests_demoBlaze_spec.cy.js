describe('PetStore API Tests', () => {
  const baseUrl = 'https://petstore.swagger.io/v2';
  const apiKey = 'special-key'; // from Swagger documentation
  let petId;

  it('should add a new pet to the store', () => {
    const newPet = {
      id: Date.now(), // unique ID based on timestamp
      category: {
        id: 1,
        name: 'Dog'
      },
      name: 'Buddy',
      photoUrls: ['http://example.com/dog.jpg'],
      tags: [
        {
          id: 1,
          name: 'friendly'
        }
      ],
      status: 'available'
    };

    // Store the ID for later
    petId = newPet.id;

    cy.request({
      method: 'POST',
      url: `${baseUrl}/pet`,
      headers: {
        'api_key': apiKey,
        'Content-Type': 'application/json'
      },
      body: newPet
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(newPet.id);
      expect(response.body.name).to.eq('Buddy');
      expect(response.body.status).to.eq('available');
    });
  });

  it('should find the pet by ID', () => {
     cy.wait(1000)
    cy.request({
      method: 'GET',
      url: `${baseUrl}/pet/${petId}`,
      headers: {
        'api_key': apiKey
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(petId);
      expect(response.body.name).to.eq('Buddy');
    });
  });
});