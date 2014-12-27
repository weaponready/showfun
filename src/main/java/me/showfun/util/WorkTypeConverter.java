package me.showfun.util;

import me.showfun.model.WorkType;

import java.beans.PropertyEditorSupport;


public class WorkTypeConverter extends PropertyEditorSupport {

    @Override
    public void setAsText(String text) throws IllegalArgumentException {
        super.setValue(WorkType.genWorkTypeByDescription(text));
    }
}
