package me.showfun.model;

/**
 * Created by Jamy on 14-12-20.
 */
public enum WorkType {

    WEDDING(0),KIDS(1),PORTRAY(2),CASUAL(4);

    private final int type;

    WorkType(int type){
        this.type=type;
    }

    public int getType(){
        return this.type;
    }

}
