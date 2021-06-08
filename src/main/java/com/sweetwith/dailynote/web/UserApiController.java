package com.sweetwith.dailynote.web;

import com.sweetwith.dailynote.domain.user.User;
import com.sweetwith.dailynote.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class UserApiController {
    private final UserService userService;

    @PostMapping("/auth")
    public User loginPost(@RequestBody User user, HttpServletRequest req, RedirectAttributes rttr){
        HttpSession session = req.getSession();

        User member = userService.loginUser(user.getLoginId(), user.getLoginPw());
        System.out.println("user1 = " + member.toString());

        if(member == null){
            session.setAttribute("user",null);
            rttr.addFlashAttribute("msg",false);
        } else{
            session.setAttribute("user", member);
        }

        return member;
    }

}
