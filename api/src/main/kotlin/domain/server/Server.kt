package com.freitaseric.domain.server

import com.freitaseric.internal.impl.UUIDSerializer
import kotlinx.serialization.Serializable
import java.util.*

@Serializable
data class Server(
    @Serializable(with = UUIDSerializer::class) val id: UUID,
    val name: String,
    val status: ServerStatus,
    val type: String,
    val ram: ServerResources.ServerRam,
    val rom: ServerResources.ServerRom,
    val cpu: ServerResources.ServerCpu
)
