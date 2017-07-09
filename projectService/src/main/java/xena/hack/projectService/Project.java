package xena.hack.projectService;

/**
 * Created by courtneydavis on 7/9/17.
 */


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Service;

@Document(collection = "projects")
public class Project {

    @Id
    public String id;

    public String title;
    public String githubUrl;


    public Project(){}

    public Project(String title, String githubUrl ){
        this.title = title;
        this.githubUrl = githubUrl;

    }

    @Override
    public String toString() {
        return String.format(
                "Project[id=%s, title='%s', githubUrl='%s']",
                id, title, githubUrl);
    }
}
