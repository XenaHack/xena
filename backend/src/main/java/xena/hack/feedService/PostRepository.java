package xena.hack.feedService;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import xena.hack.projectService.Project;

import java.util.List;

/**
 * Created by courtneydavis on 7/19/17.
 */

@Repository
public interface PostRepository extends MongoRepository<Post, String> {
    List<Post> findByTagsIn(List<String> tags);
}
