package xena.hack.feedService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class FeedController {

    @Autowired
    private ProjectService projService;


    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Project create(@RequestBody Project project) {
        return projService.create(project);
    }

    @RequestMapping( value = "/get/{projectId}", method = RequestMethod.GET)
    public Project get(@PathVariable String projectId) {
        return projService.get(projectId);
    }

    @RequestMapping(value = "/get/tags/[{tags}]", method = RequestMethod.GET)
    public List<Project> getProjectsFromTags(@PathVariable List<String> tags) {
        return projService.getProjectsFromTags(tags);
    }

}
