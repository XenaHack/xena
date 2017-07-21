package xena.hack.feedService;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;



/**
 * Created by courtneydavis on 7/19/17.
 */

@Document(collection = "posts")
public class Post {

    @Id
    public String id;


    public String message;
    public ArrayList<String> comments;
    public String creation;
    public List<String> tags;


    public Post(){}

    public Post(String message, List<String> tags){
        this.message = message;
        this.comments = new ArrayList<>();
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        this.creation = dateFormat.format(new Date());
        this.tags = tags;
    }

    @Override
    public String toString() {
        return String.format(
                "Post[id=%s, message='%s', comments='%s', creation='%s' ,tags='%s]",
                id, message, comments.toString(), creation, tags);
    }
}
