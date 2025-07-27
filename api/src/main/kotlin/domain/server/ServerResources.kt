package com.freitaseric.domain.server

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

object ServerResources {
    @Serializable
    data class ServerRam(val allocated: Long, val swap: Long)

    @Serializable
    data class ServerRom(val allocated: Long, @SerialName("allow_overlap") val allowOverlap: Boolean)

    @Serializable
    data class ServerCpu(
        val allocated: Long,
        @SerialName("threads_fixed") val threads: List<Int>,
        @SerialName("allow_overlap") val allowOverlap: Boolean
    )
}