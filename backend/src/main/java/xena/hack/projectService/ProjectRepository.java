package xena.hack.projectService;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import xena.hack.feedService.Post;

import java.util.List;

/**
 * Created by courtneydavis on 7/9/17.
 */

@Repository
public interface ProjectRepository extends MongoRepository<Project, String> {
    public Project findByTitle(String title);
    public List<Project> findByGithubUrl(String githubUrl);
    List<Project> findByTagsIn(List<String> tags);
    List<Project> findAll();
}
