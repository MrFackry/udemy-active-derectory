package com.udemy.UdemyClone.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity

public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().authenticated()
                )
                .formLogin(Customizer.withDefaults())
                .ldapAuthentication(ldap -> ldap
                        .userDnPatterns("uid={0},ou=users,dc=miempresa,dc=com")
                        .groupSearchBase("ou=groups")
                        .contextSource()
                        .url("ldap://localhost:389/dc=miempresa,dc=com")
                        .managerDn("cn=admin,dc=miempresa,dc=com")
                        .managerPassword("admin123")
                );
        return http.build();
    }
}
