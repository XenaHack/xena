package xena.hack.feedService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private PostRepository repository;



    public Project create(@RequestBody Post post) {
        return repository.save(post);
    }


    public Project get(@PathVariable String projectId) {
        return repository.findOne(projectId);
    }

    public List<Project> getProjectsFromTags(List<String> tags){
       return repository.findByTagsIn(tags);
    }
}
