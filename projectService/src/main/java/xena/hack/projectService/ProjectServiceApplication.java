package xena.hack.projectService;

import org.springframework.boot.CommandLineRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProjectServiceApplication implements CommandLineRunner{

	@Autowired
	private ProjectRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(ProjectServiceApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		// save a couple of projects
		repository.deleteAll();
		repository.save(new Project("Project-ABC", "www.blah.com"));
		repository.save(new Project("Project BLAH LAH", "www.blah.com"));


		// fetch all projects
		System.out.println("Customers found with findAll():");
		System.out.println("-------------------------------");
		for (Project proj : repository.findAll()) {
			System.out.println(proj);
		}
		System.out.println();
	}
}
