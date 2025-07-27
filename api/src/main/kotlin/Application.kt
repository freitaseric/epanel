package com.freitaseric

import io.ktor.server.application.*

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    configureAdministration()
    configureSockets()
    configureDatabases()
    configureSecurity()
    configureHTTP()
    configureRouting()
}
