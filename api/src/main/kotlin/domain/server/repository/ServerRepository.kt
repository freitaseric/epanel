package com.freitaseric.domain.server.repository

import com.freitaseric.domain.server.Server
import com.freitaseric.domain.server.dto.CreateServerRequest
import java.util.*

interface ServerRepository {
    fun add(server: CreateServerRequest): Server
    fun remove(id: UUID): Int
    fun findById(id: UUID): Server?
    fun findAll(): List<Server>
    fun findByName(name: String): Server?
}