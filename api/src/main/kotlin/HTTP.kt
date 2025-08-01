package com.freitaseric

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.*
import io.ktor.server.plugins.compression.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.plugins.httpsredirect.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.response.*

fun Application.configureHTTP() {
  install(Compression)

  if (!developmentMode) install(HttpsRedirect) {
    // The port to redirect to by default 443, the default HTTPS port.
    sslPort = 443
    // 301 Moved Permanently, or 302 Found redirect.
    permanentRedirect = true
  }

  install(StatusPages) {
    exception<IllegalStateException> { call, cause ->
      call.respond(
        HttpStatusCode.BadRequest, mapOf("error" to cause.localizedMessage)
      )
    }

    exception<IllegalArgumentException> { call, cause ->
      val details = cause.cause?.message ?: cause.message ?: "Unknown"

      call.respond(
        HttpStatusCode.BadRequest,
        mapOf("error" to "The format of the parameter is invalid or malformed.", "details" to details)
      )
    }

    exception<BadRequestException> { call, cause ->
      val details = cause.cause?.message ?: cause.message ?: "Unknown"

      call.respond(
        HttpStatusCode.BadRequest, mapOf(
          "error" to "The format of the request is invalid or malformed.", "details" to details
        )
      )
    }

    exception<Throwable> { call, cause ->
      call.respond(
        HttpStatusCode.InternalServerError,
        mapOf("error_type" to cause::class.simpleName, "error_message" to cause.message)
      )
    }
  }

  install(CORS) {
    allowMethod(HttpMethod.Options)
    allowMethod(HttpMethod.Put)
    allowMethod(HttpMethod.Delete)
    allowMethod(HttpMethod.Patch)
    allowHeader(HttpHeaders.Authorization)
    if (this@configureHTTP.developmentMode) anyHost()
  }
}
