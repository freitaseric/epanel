package com.freitaseric.domain.server.dto

import com.freitaseric.domain.server.Server
import com.freitaseric.domain.server.ServerResources
import com.freitaseric.domain.server.ServerStatus
import kotlinx.serialization.Serializable
import java.util.*

@Serializable
data class CreateServerRequest(
    val name: String,
    val type: String,
    val ram: ServerResources.ServerRam,
    val rom: ServerResources.ServerRom,
    val cpu: ServerResources.ServerCpu
) {
    fun toServerModel(): Server {
        return Server(
            id = UUID.randomUUID(),
            name = name,
            status = ServerStatus.PROVISIONING,
            type = type,
            ram = ram,
            rom = rom,
            cpu = cpu,
        )
    }
}
