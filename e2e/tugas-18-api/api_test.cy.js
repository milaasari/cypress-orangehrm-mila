describe('Tugas 18: API Automation Testing - Platzi Dummy - Mila', () => {
  const baseUrl = 'https://api.escuelajs.co/api/v1';

  it('TC-001: GET - All Products', () => {
    cy.request('GET', `${baseUrl}/products?limit=10`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body).to.have.length.of.at.least(1);
    });
  });

  it('TC-002: GET - Single Product (ID 1)', () => {
    cy.request('GET', `${baseUrl}/products/5`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 5);
    });
  });

 it('TC-003: POST - Create Category', () => {
    const uniqueCategoryName = "Mila Sari " + Math.floor(Math.random() * 10000);
    cy.request({
      method: 'POST',
      url: 'https://api.escuelajs.co/api/v1/categories', 
      body: {
        "name": uniqueCategoryName,
        "image": "https://i.imgur.com/QkIa5tT.jpeg" 
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', uniqueCategoryName);
    });
  });

  it('TC-004: PUT - Update Category', () => {
    cy.request('PUT', `${baseUrl}/categories/1`, {
      "name": "Mila Updated Version"
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("Mila Updated Version");
    });
  });

  it('TC-005: GET - Filter by Price', () => {
    cy.request('GET', `${baseUrl}/products/?price_min=100&price_max=500`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0].price).to.be.within(100, 500);
    });
  });

  it('TC-006: DELETE - Delete Product', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/products/1`,
      failOnStatusCode: false 
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 400]); 
    });
  });

  it('TC-007: GET - Single User', () => {
    cy.request('GET', `${baseUrl}/users/1`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('role');
    });
  });

  it('TC-008: GET - Products by Category (Filter Kategori)', () => {
    cy.request('GET', `${baseUrl}/products/?categoryId=1`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('TC-009: POST - Create New User (Bikin akun baru)', () => {
    const uniqueEmail = `mila.${Date.now()}@mail.com`; 
    cy.request('POST', `${baseUrl}/users/`, {
      "name": "Mila Sari",
      "email": uniqueEmail,
      "password": "password123",
      "avatar": "https://api.lorem.space/image/face?w=150&h=150",
      "role": "customer"
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.email).to.eq(uniqueEmail);
    });
  });

  it('TC-010: GET - All Categories (Cek daftar kategori)', () => {
    cy.request('GET', `${baseUrl}/categories`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body[0]).to.have.property('name');
    });
  });
});