FROM gradle:jdk21 AS build

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . /app
RUN chmod +x ./gradlew && \
    ./gradlew build


FROM eclipse-temurin:21-jre-alpine
COPY --from=build /app/build/libs/encryptor-0.0.1-SNAPSHOT.jar ./encryptor.jar
CMD [ "java", "-jar", "encryptor.jar" ]
