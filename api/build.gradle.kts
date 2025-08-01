plugins {
  alias(libs.plugins.kotlin.jvm)
  alias(libs.plugins.ktor)
  alias(libs.plugins.kotlin.plugin.serialization)
}

group = "com.freitaseric"
version = "0.0.1"

application {
  mainClass = "io.ktor.server.netty.EngineMain"
}

repositories {
  mavenCentral()
  maven { url = uri("https://packages.confluent.io/maven/") }
}

dependencies {
  implementation(libs.ktor.server.rate.limiting)
  implementation(libs.ktor.server.core)
  implementation(libs.ktor.server.websockets)
  implementation(libs.ktor.serialization.kotlinx.json)
  implementation(libs.ktor.server.content.negotiation)
  implementation(libs.postgresql)
  implementation(libs.h2)
  implementation(libs.exposed.core)
  implementation(libs.exposed.jdbc)
  implementation(libs.ktor.server.auto.head.response)
  implementation(libs.ktor.server.auth)
  implementation(libs.ktor.server.auth.jwt)
  implementation(libs.ktor.server.http.redirect)
  implementation(libs.ktor.server.compression)
  implementation(libs.ktor.server.status.pages)
  implementation(libs.ktor.server.netty)
  implementation(libs.logback.classic)
  implementation("io.ktor:ktor-server-host-common:3.2.2")
  implementation("io.ktor:ktor-server-cors:3.2.2")
  testImplementation(libs.ktor.server.test.host)
  testImplementation(libs.kotlin.test.junit)
}
