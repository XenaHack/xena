package xena.hack.feedService;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends MongoRepository<Post, String> {
    public Post findByLastName(String lastName);
    public Post findByFirstName(String firstName);
}
