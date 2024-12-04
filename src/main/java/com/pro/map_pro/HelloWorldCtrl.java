package com.pro.map_pro;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * packageName    : com.pro.map_pro
 * fileName       : HelloWorldCtrl
 * author         : 정현주
 * date           : 2024-12-04
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-12-04        정현주       최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api")
public class HelloWorldCtrl {

    @GetMapping("/hello")
    public String helloWorld() {
        log.debug("안녕하세요...");
        return "hello";
    }

}
