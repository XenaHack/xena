package xena.hack.feedService;

import org.springframework.boot.CommandLineRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FeedServiceApplication {



	public static void main(String[] args) throws Exception{
		SpringApplication.run(FeedServiceApplication.class, args);
	}

}
