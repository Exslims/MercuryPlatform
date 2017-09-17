package com.mercury.platform.model;

import lombok.Data;

@Data
public class Statistics {
    private String uuid;
    private String releaseEntryUuid;
    private String uniqueUsersCount;
    private long duration;
    private int maxOnline;
    private int currentOnline;
    private int averageOnline;
    private int updateCount;
}
