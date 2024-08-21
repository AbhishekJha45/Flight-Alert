package com.flight.notify.config;

import com.flight.notify.util.Constant;
import com.flight.notify.util.ReadJsonFileToJsonObject;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.examples.Example;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.media.Content;
import io.swagger.v3.oas.models.responses.ApiResponse;

import java.util.Properties;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@OpenAPIDefinition
@Configuration
public class SpringDocConfig {

    @Bean
    public OpenAPI baseOpenAPI() {

        ReadJsonFileToJsonObject readJsonObject = new ReadJsonFileToJsonObject();

        ApiResponse getAllSuccessAPI = new ApiResponse().content(
                new Content().addMediaType(MediaType.APPLICATION_JSON_VALUE,
                        new io.swagger.v3.oas.models.media.MediaType().addExamples(Constant.DEFAULT, new Example().value(readJsonObject.read().get("getAllSuccessResponse").toString()))
                )).description("Ok(Success)");

        ApiResponse postSuccessAPI = new ApiResponse().content(
                new Content().addMediaType(MediaType.APPLICATION_JSON_VALUE,
                        new io.swagger.v3.oas.models.media.MediaType().addExamples(Constant.DEFAULT, new Example().value(readJsonObject.read().get("postSuccessResponse").toString()))
                )).description("Created");

        ApiResponse noContentAPI = new ApiResponse().content(
                new Content().addMediaType(MediaType.APPLICATION_JSON_VALUE,
                        new io.swagger.v3.oas.models.media.MediaType().addExamples(Constant.DEFAULT, new Example().value(readJsonObject.read().get("noContentResponse").toString()))
                )).description("No Content");

        ApiResponse badRequestAPI = new ApiResponse().content(
                new Content().addMediaType(MediaType.APPLICATION_JSON_VALUE,
                        new io.swagger.v3.oas.models.media.MediaType().addExamples(Constant.DEFAULT, new Example().value(readJsonObject.read().get("badRequestResponse").toString()))
                )).description("Bad Request");

        ApiResponse internalServerErrorAPI = new ApiResponse().content(
                new Content().addMediaType(MediaType.APPLICATION_JSON_VALUE,
                        new io.swagger.v3.oas.models.media.MediaType().addExamples(Constant.DEFAULT, new Example().value(readJsonObject.read().get("internalServerErrorResponse").toString()))
                )).description("Internal Server Error");

        Components components = new Components();
        components.addResponses("getAllSuccessAPI", getAllSuccessAPI);
        components.addResponses("postSuccessAPI", postSuccessAPI);
        components.addResponses("noContentAPI", noContentAPI);
        components.addResponses("badRequestAPI", badRequestAPI);
        components.addResponses("internalServerErrorAPI", internalServerErrorAPI);

        return new OpenAPI()
                .components(components)
                .info(new Info().title("Flight Notification Service Doc").version("1.0.0").description("Spring Boot RESTful APIs Implementation for flight service"));
    }

    @Bean
    public JavaMailSender javaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("localhost");
        mailSender.setPort(5672);
        
        mailSender.setUsername("omabhishekutlsolutions@gmail.c");
        mailSender.setPassword("ylbo dygo dagp bgej");
        
        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");
        
        return mailSender;
    }

}
