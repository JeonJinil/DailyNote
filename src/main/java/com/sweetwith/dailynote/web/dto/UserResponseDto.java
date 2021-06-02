
package com.sweetwith.dailynote.web.dto;

import com.sweetwith.dailynote.domain.user.User;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserResponseDto {
    private String loginId;
    private String name;
    private String email;

    public UserResponseDto(User entity) {
        this.loginId = entity.getLoginId();
        this.name = entity.getName();
        this.email = entity.getEmail();
    }
}
