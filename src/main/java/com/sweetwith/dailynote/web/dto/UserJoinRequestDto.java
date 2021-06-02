package com.sweetwith.dailynote.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
public class UserJoinRequestDto {
    private String loginId;
    private String loginPw;
    private String name;
    private String email;
}
