export const userSwaggerDocs = {
  '/api/users': {
    post: {
      tags: ['Users'],
      summary: 'Criar novo usuário',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['email', 'password', 'name'],
              properties: {
                email: {
                  type: 'string',
                  format: 'email',
                  description: 'Email do usuário'
                },
                password: {
                  type: 'string',
                  format: 'password',
                  description: 'Senha do usuário'
                },
                name: {
                  type: 'string',
                  description: 'Nome do usuário'
                }
              }
            }
          }
        }
      },
      responses: {
        201: {
          description: 'Usuário criado com sucesso',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  id: { type: 'number' },
                  email: { type: 'string' },
                  name: { type: 'string' },
                  createdAt: { type: 'string' }
                }
              }
            }
          }
        }
      }
    }
  },
  '/api/login': {
    post: {
      tags: ['Auth'],
      summary: 'Autenticar usuário',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['email', 'password'],
              properties: {
                email: {
                  type: 'string',
                  format: 'email'
                },
                password: {
                  type: 'string',
                  format: 'password'
                }
              }
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Login realizado com sucesso',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  user: {
                    type: 'object',
                    properties: {
                      id: { type: 'number' },
                      email: { type: 'string' },
                      name: { type: 'string' }
                    }
                  },
                  token: { type: 'string' }
                }
              }
            }
          }
        }
      }
    }
  },
  '/api/me': {
    get: {
      tags: ['Users'],
      summary: 'Obter dados do usuário autenticado',
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: 'Dados do usuário',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  id: { type: 'number' },
                  email: { type: 'string' },
                  name: { type: 'string' }
                }
              }
            }
          }
        }
      }
    }
  }
}; 