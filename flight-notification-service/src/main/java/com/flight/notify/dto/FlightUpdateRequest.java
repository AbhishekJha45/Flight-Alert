package com.flight.notify.dto;

import com.flight.notify.model.FlightStatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class FlightUpdateRequest implements Serializable {

    @NotNull
    @NotBlank
    private String flightNumber;

    @NotNull
    @Enumerated(EnumType.STRING)
    private FlightStatus status;
}
