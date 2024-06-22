### Regras da aplicação

- Deve ser possível criar um usuário
- Deve ser possível identificar o usuário entre as requisições
- Deve ser possível registrar uma refeição feita, com as seguintes informações:
    
    *As refeições devem ser relacionadas a um usuário.*
    
    - Nome (*title*)
    - Descrição (*description*)
    - Data e Hora (*mealTime*)
    - Está dentro ou não da dieta (*isInDiet*)


- [] Deve ser possível editar uma refeição, podendo alterar todos os dados acima (UPDATE a meal)
- [] Deve ser possível apagar uma refeição (DELETE a meal)
- [x] Deve ser possível listar todas as refeições de um usuário (GET diet_summary)
- [x] Deve ser possível visualizar uma única refeição (GET a meal by ID)
- [] Deve ser possível recuperar as métricas de um usuário (Cookies)
    - Quantidade total de refeições registradas
    - Quantidade total de refeições dentro da dieta
    - Quantidade total de refeições fora da dieta
    - Melhor sequência de refeições dentro da dieta
- O usuário só pode visualizar, editar e apagar as refeições o qual ele criou (Use Cases)
