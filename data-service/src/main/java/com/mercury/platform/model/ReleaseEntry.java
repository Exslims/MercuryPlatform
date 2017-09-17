package com.mercury.platform.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class ReleaseEntry {
    private String uuid;
    private ReleaseEntryStatus status;
    private Timestamp date;
    private String version;
    private String jarUuid;
    private Statistics statistics;
}
