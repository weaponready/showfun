package me.showfun.util;


import me.showfun.model.Owned;

public class OwnedUtil {

    public static void verifyIsOwned(Class clazz) {
        boolean canSearchOwned = false;
        Class[] interfaces = clazz.getInterfaces();
        for (Class interfaze : interfaces) {
            if (interfaze.equals(Owned.class)) {
                canSearchOwned = true;
                break;
            }
        }
        if (!canSearchOwned) {
            throw new UnsupportedOperationException("class " + clazz.getName() + " does not implement Owned interface");
        }
    }
}
