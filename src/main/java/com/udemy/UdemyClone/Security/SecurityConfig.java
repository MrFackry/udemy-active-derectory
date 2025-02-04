package com.udemy.UdemyClone.Security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.Customizer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.context.annotation.Bean;
import org.springframework.beans.factory.annotation.Autowired;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests((authorize) -> authorize
                        .anyRequest().fullyAuthenticated()
                )
                .formLogin(Customizer.withDefaults());

        return http.build();
    }

    @Autowired
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .ldapAuthentication()
                .userDnPatterns("uid={0},ou=users,dc=miempresa,dc=com") //la ruta de usuarios
                .groupSearchBase("ou=groups") //la ruta de los grupos (si usas grupos en LDAP)
                .contextSource()
                .url("ldap://localhost:389/dc=miempresa,dc=com") //servidor LDAP
                .managerDn("cn=admin,dc=miempresa,dc=com") //Usuario admin en LDAP
                .managerPassword("admin123") //Contraseña del admin LDAP
                .and()
                .passwordCompare()
                .passwordEncoder(new BCryptPasswordEncoder()) //Compara la contraseña con el hash en LDAP
                .passwordAttribute("userPassword"); //Atributo donde está la contraseña en LDAP
    }
}


//@Configuration
//public class WebSecurityConfig {

//  @Bean
//  public SecurityFilterChain configure(HttpSecurity http) throws Exception {
//    return http
//      .authorizeRequests()
//      .anyRequest().authenticated()
//      .and()
//      .formLogin(Customizer.withDefaults())
//      .build();
//  }
//}

