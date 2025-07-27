package com.freitaseric.domain.server.repository

import com.freitaseric.domain.server.Server
import com.freitaseric.domain.server.ServerResources
import com.freitaseric.domain.server.ServerStatus
import com.freitaseric.domain.server.dto.CreateServerRequest
import java.util.*

class FakeServerRepository : ServerRepository {
    private val servers = mutableListOf<Server>()

    init {
        servers.add(
            Server(
                UUID.randomUUID(),
                "Minecraft Teste",
                ServerStatus.STOPPED,
                "minecraft-paper",
                ServerResources.ServerRam(8192L, 0L),
                ServerResources.ServerRom(10240L, false),
                ServerResources.ServerCpu(400L, emptyList(), false)
            )
        )
    }

    override fun add(server: CreateServerRequest): Server {
        val model = server.toServerModel()
        servers.add(model)
        return model
    }

    override fun remove(id: UUID): Int {
        val prevSize = servers.size
        servers.removeIf { it.id == id }
        return servers.size - prevSize
    }

    override fun findById(id: UUID): Server {
        return servers.firstOrNull { it.id == id } ?: error("No server with id $id")
    }

    override fun findAll(): List<Server> {
        return servers
    }

    override fun findByName(name: String): Server {
        return servers.firstOrNull { it.name == name } ?: error("No server with name $name")
    }
}