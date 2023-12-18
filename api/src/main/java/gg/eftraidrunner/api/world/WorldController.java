package gg.eftraidrunner.api.world;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class WorldController {

    final WorldRepository worldRepository;
        
    public WorldController(WorldRepository repository) {
        this.worldRepository = repository;
    }
    
    @GetMapping("/world")
    public Iterable<World> helloWorld() {
        return this.worldRepository.findAll();
    }

    @PostMapping("/world")
    public World addWorld(@RequestBody World newWorld) {
        return this.worldRepository.save(newWorld);
    }
}
