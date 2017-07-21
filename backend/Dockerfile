FROM maven:latest
COPY . /
EXPOSE 8080
RUN cd / && mvn clean install
#ENTRYPOINT [“java”,”-jar”,”/xenaService-0.0.1-SNAPSHOT.jar”]
CMD mvn clean package && mvn spring-boot:run

