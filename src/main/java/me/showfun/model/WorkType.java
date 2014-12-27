package me.showfun.model;

import org.apache.commons.lang3.StringUtils;

/**
 * Created by Jamy on 14-12-20.
 */
public enum WorkType {

    WEDDING(0, "wedding"), KIDS(1, "kids"), PORTRAY(2, "portray"), CASUAL(4, "casual"), ALL(8, "all");

    private final int type;
    private final String description;

    WorkType(int type, String description) {
        this.type = type;
        this.description = description;
    }

    public int getType() {
        return this.type;
    }

    public String getDescription() {
        return description;
    }

    public static WorkType genWorkTypeByDescription(String desc) {
        if (StringUtils.isEmpty(desc)) return ALL;
        switch (desc) {
            case "wedding":
                return WEDDING;
            case "kids":
                return KIDS;
            case "portray":
                return PORTRAY;
            case "casual":
                return CASUAL;
            default:
                return ALL;
        }
    }

}
