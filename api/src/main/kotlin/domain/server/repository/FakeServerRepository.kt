package com.freitaseric.domain.server.repository

import com.freitaseric.domain.server.Server
import com.freitaseric.domain.server.ServerResources
import com.freitaseric.domain.server.ServerStatus
import com.freitaseric.domain.server.dto.CreateServerRequest
import java.util.*

class FakeServerRepository : ServerRepository {
    private val servers = mutableMapOf<UUID, Server>()

    init {
        val id = UUID.randomUUID()
        servers[id] = Server(
            id,
            "Minecraft Teste",
            ServerStatus.STOPPED,
            "minecraft-paper",
            ServerResources.ServerRam(8192L, 0L),
            ServerResources.ServerRom(10240L, false),
            ServerResources.ServerCpu(400L, emptyList(), false)
        )
    }

    override fun add(server: CreateServerRequest): Server {
        val model = server.toServerModel()
        servers[model.id] = model
        return model
    }

    override fun remove(id: UUID): Int {
        val prevSize = servers.size
        servers.remove(id)
        return servers.size - prevSize
    }

    override fun findById(id: UUID): Server {
        return servers[id] ?: error("No server with id $id")
    }

    override fun findAll(): List<Server> {
        return servers.values.toList()
    }

    override fun findByName(name: String): Server {
        return servers.values.firstOrNull { it.name == name } ?: error("No server with name $name")
    }

    override fun start(id: UUID): Server {
        val server = servers[id] ?: error("No server with id $id")

        val updatedServer = server.copy(status = ServerStatus.RUNNING)

        servers[id] = updatedServer

        return updatedServer
    }

    override fun stop(id: UUID): Server {
        val server = servers[id] ?: error("No server with id $id")

        val updatedServer = server.copy(status = ServerStatus.STOPPED)

        servers[id] = updatedServer

        return updatedServer
    }


}