package com.freitaseric

import com.freitaseric.domain.server.dto.CreateServerRequest
import com.freitaseric.domain.server.repository.FakeServerRepository
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.autohead.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import java.util.*

fun Application.configureRouting() {
    install(AutoHeadResponse)
    install(ContentNegotiation) {
        json()
    }

    val serverRepository = FakeServerRepository()

    routing {
        route("/servers") {
            get {
                call.respond(HttpStatusCode.OK, serverRepository.findAll())
            }

            post {
                val body = call.receive<CreateServerRequest>()

                val server = serverRepository.add(body)

                call.respond(HttpStatusCode.Created, server)
            }

            get("{id}") {
                val id =
                    if (call.parameters["id"] != null) UUID.fromString(call.parameters["id"]) else return@get call.respond(
                        HttpStatusCode.BadRequest
                    )

                val server = serverRepository.findById(id)

                call.respond(HttpStatusCode.OK, server)
            }
        }
    }
}
