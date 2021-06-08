package com.sweetwith.dailynote.service.user;

import com.sweetwith.dailynote.domain.user.User;
import com.sweetwith.dailynote.web.dto.UserJoinRequestDto;
import com.sweetwith.dailynote.web.dto.UserResponseDto;
import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class UserServiceTest {

    @Autowired
    UserService userService;

    UserJoinRequestDto userJoinRequestDto1;
    UserJoinRequestDto userJoinRequestDto2;

    @Before
    public void setup(){
        userJoinRequestDto1 = UserJoinRequestDto.builder()
                .loginId("il6339")
                .loginPw("123123")
                .name("JINIL")
                .email("il633990@gmail.com")
                .build();

        userJoinRequestDto2 = UserJoinRequestDto.builder()
                .loginId("il6339")
                .loginPw("123123")
                .name("JINIL")
                .email("il633990@gmail.com")
                .build();
    }

    @Test
    @DisplayName("유저 회원 가입")
    public void setUser(){
        Long userId = userService.registerUser(userJoinRequestDto1);

        UserResponseDto ret = userService.getUserDetail(userId);

        Assertions.assertThat(ret.getLoginId()).isEqualTo(userJoinRequestDto1.getLoginId());
        Assertions.assertThat(ret.getName()).isEqualTo(userJoinRequestDto1.getName());
        Assertions.assertThat(ret.getEmail()).isEqualTo(userJoinRequestDto1.getEmail());


    }

    @Test
    @DisplayName("중복 유저 아이디 등록시 예러 발생")
    public void duplicateUserReturnError(){
        userService.registerUser(userJoinRequestDto1);

        Assertions.assertThatThrownBy(() -> userService.registerUser(userJoinRequestDto2))
                .as("정보를 다시 확인해주세요")
                .isInstanceOf(RuntimeException.class);
    }

    @Test
    @DisplayName("로그인")
    public void login() {
        userService.registerUser(userJoinRequestDto1);

        userService.loginUser(userJoinRequestDto1.getLoginId(), userJoinRequestDto1.getLoginPw());
        Assertions.assertThatThrownBy(() ->
                userService.loginUser(userJoinRequestDto1.getLoginId(), "Wrong password"))
                .as("ID/PW 확인 해주세요")
                .isInstanceOf(NoSuchElementException.class);
    }



}
