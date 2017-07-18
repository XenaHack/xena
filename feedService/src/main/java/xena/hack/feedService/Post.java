package xena.hack.feedService;

import org.springframework.data.annotation.Id;

/**
 * Created by jefferychiang on 7/16/17.
 */
public class Post {
    @Id
    public String id;

    public String authorFirstName;
    public String authorLastName;
    public String message;
    public String updateTime;


    public Post(String firstName, String lastName, String message, String updateTime) {
        this.authorFirstName = firstName;
        this.authorLastName = lastName;
        this.message = message;
        this.updateTime = updateTime;
    }
}
