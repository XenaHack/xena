package xena.hack.projectService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.management.Query;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by courtneydavis on 7/9/17.
 */

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository repository;



    public Project create(@RequestBody Project project) {
        return repository.save(project);
    }


    public Project get(@PathVariable String projectId) {
        return repository.findOne(projectId);
    }

    public List<Project> getProjectsFromTags(List<String> tags){
       return repository.findByTagsIn(tags);
    }
}
