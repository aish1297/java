/**
 *
 */
package springDIByConstructor;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

/**
 * @author aishwarya.m
 * @since  Apr 1, 2019
 */
public class Test {

    public static void main(String[] args) {

        Resource resource = new ClassPathResource("applicationContext.xml");
        BeanFactory factory = new XmlBeanFactory(resource);
        Employee emp1 = (Employee)factory.getBean("emp");
        emp1.show();
    }
}
