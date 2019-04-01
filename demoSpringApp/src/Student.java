/**
 * Spring Application with external jars added without using maven
 */

/**
 * @author aishwarya.m
 * @since  Apr 1, 2019
 */
public class Student {

    private String studentName;

    public void displayInfo() {
        System.out.println("Hello " + studentName);
    }


    public String getStudentName() {
        return studentName;
    }


    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }
}
