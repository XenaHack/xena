package xena.hack.feedService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import xena.hack.projectService.Project;
import xena.hack.projectService.ProjectRepository;

import java.util.List;

/**
 * Created by courtneydavis on 7/19/17.
 */

@Service
public class PostService {

    @Autowired
    private PostRepository repository;



    public Post create(@RequestBody Post post) {
        return repository.save(post);
    }


    public Post get(@PathVariable String postId) {
        return repository.findOne(postId);
    }

    public List<Post> getPostsFromTags(List<String> tags){
        return repository.findByTagsIn(tags);
    }

    public void deletePost(String postId) {
        repository.delete(this.get(postId));
    }
}
