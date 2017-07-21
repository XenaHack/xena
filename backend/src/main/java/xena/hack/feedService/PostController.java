package xena.hack.feedService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xena.hack.projectService.Project;

import java.util.List;


/**
 * Created by courtneydavis on 7/19/17.
 */


@RestController
@RequestMapping("/post")
public class PostController {


    @Autowired
    private PostService postService;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Post create(@RequestBody Post post) {
        return postService.create(post);
    }


    @RequestMapping( value = "/get/{postId}", method = RequestMethod.GET)
    public Post get(@PathVariable String postId) {
        return postService.get(postId);
    }

    @RequestMapping(value = "/get/tags/[{tags}]", method = RequestMethod.GET)
    public List<Post> getProjectsFromTags(@PathVariable List<String> tags) {
        return postService.getPostsFromTags(tags);
    }

    @RequestMapping(value = "/get/project/[{postId}]", method = RequestMethod.DELETE)
    public void deletePost(@PathVariable String postId) {
        postService.deletePost(postId);
    }

}
