package com.mercury.platform;

import lombok.Data;

import java.io.Serializable;

@Data
public class ServerMessage implements Serializable {
    private String message;
}
