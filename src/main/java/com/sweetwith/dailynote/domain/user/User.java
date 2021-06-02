package com.sweetwith.dailynote.domain.user;

import com.sweetwith.dailynote.domain.BaseTimeEntity;
import com.sweetwith.dailynote.web.dto.UserJoinRequestDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@NoArgsConstructor
@Getter
@Entity
public class User extends BaseTimeEntity {

    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(nullable = false, unique = true)
    private String loginId;

    @Column(nullable = false)
    private String loginPw;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    public User(String loginId, String loginPw) {
        this.loginId = loginId;
        this.loginPw = loginPw;
    }

    public User(UserJoinRequestDto userJoinRequestDto){
        loginId = userJoinRequestDto.getLoginId();
        loginPw = userJoinRequestDto.getLoginPw();
        name = userJoinRequestDto.getName();
        email = userJoinRequestDto.getEmail();
    }
}
