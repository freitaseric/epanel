# EPanel

## Endpoints da API

### OAuth

- `POST /auth/register`
  - Request:

    ```json
    {
      "username": "...",
      "name": "...",
      "surname": "...",
      "email": "...",
      "password": "..."
    }
    ```

  - Response:

    ```json
    {
      "access_token": "...",
      "refresh_token": "..."
    }
    ```

- `POST /auth/login`
  - Request:

    ```json
    {
      "username": "...",
      "password": "..."
    }
    ```

  - Response:

    ```json
    {
      "access_token": "...",
      "refresh_token": "..."
    }
    ```

- `POST /auth/refresh`
  - Request:

    ```json
    {
      "refresh_token": "..."
    }
    ```

  - Response:

    ```json
    {
      "access_token": "...",
      "refresh_token": "..."
    }
    ```

### Gerenciamento de Servidores

- `GET /servers`
  - Response

    ```json
    [
      {
        "id": "...",
        "name": "...",
        "status": "...",
        "type": "...",
        "ram": {
          "allocated": 2048,
          "swap": 0
        },
        "rom": {
          "allocated": 10240,
          "allow_overlap": false
        },
        "cpu": {
          "allocated": 100,
          "threads_fixed": [0],
          "allow_overlap": false
        }
      }
    ]
    ```

- `POST /servers`
  - Request:

    ```json
    {
      "name": "...",
      "type": "...",
      "ram": {
        "allocated": 2048,
        "swap": 0
      },
      "rom": {
        "allocated": 10240,
        "allow_overlap": false
      },
      "cpu": {
        "allocated": 100,
        "threads_fixed": [0],
        "allow_overlap": false
      }
    }
    ```

  - Response:

    ```json
    {
      "id": "...",
      "name": "...",
      "status": "provisoning",
      "type": "..."
    }
    ```

- `POST /servers/{id}/start`
  - Response:

    ```json
    {
      "message": "Start command sent"
    }
    ```

- `POST /servers/{id}/stop`
  - Response:

    ```json
    {
      "message": "Stop command sent"
    }
    ```

## Schema do sistema de Fila

```json
{
  "command_id": "uuid-gerado-pela-api-para-rastreamento",
  "timestamp": "2025-07-26T01:13:18Z",
  "action": "CREATE_SERVER",
  "payload": {
    "server_id": "uuid-do-novo-servidor-no-banco-de-dados",
    "server_name": "Meu Servidor Minecraft",
    "docker_image": "itzg/minecraft-server",
    "resources": {
      "ram_mb": 2048,
      "swap_mb": 0,
      "disk_mb": 10240,
      "cpu_percent": 100,
      "cpu_cores": [0]
    },
    "environment_variables": {
        "EULA": "TRUE",
        "TYPE": "PAPER"
    },
    "ports": [
        {"host": 25565, "container": 25565, "protocol": "tcp"}
    ]
  }
}
```
