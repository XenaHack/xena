package xena.hack.projectService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

/**
 * Created by courtneydavis on 7/9/17.
 */

@Component
@ConfigurationProperties
@RestController
public class ProjectController {

    @Autowired
    private ProjectRepository repository;


    @RequestMapping(value = "/project", method = RequestMethod.POST)
    public Project create(@RequestBody Project project) {
        return repository.save(project);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{projectId}")
    public Project get(@PathVariable String projectId) {
        return repository.findOne(projectId);
    }

}
