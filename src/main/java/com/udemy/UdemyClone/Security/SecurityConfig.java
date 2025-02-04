package com.udemy.UdemyClone.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configurers.ldap.LdapAuthenticationProviderConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.ldap.DefaultSpringSecurityContextSource;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.ldap.authentication.LdapAuthenticationProvider;
import org.springframework.security.ldap.authentication.LdapAuthenticationProviderConfigurer;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import java.util.Collections;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().authenticated() // Reemplaza authorizeRequests() por authorizeHttpRequests()
                )
                .formLogin(Customizer.withDefaults()); // Usamos la nueva sintaxis para formLogin

        return http.build();
    }

    @Bean
    public DefaultSpringSecurityContextSource contextSource() {
        return new DefaultSpringSecurityContextSource(
                Collections.singletonList("ldap://localhost:389"), "dc=miempresa,dc=com");
    }

    @Bean
    public LdapAuthenticationProvider ldapAuthenticationProvider() {
        LdapAuthenticationProviderConfigurer<AuthenticationManager> ldapConfigurer =
                new LdapAuthenticationProviderConfigurer<>(); // Correcto para versiones actuales de Spring Security

        ldapConfigurer.contextSource(contextSource());

        return ldapConfigurer.build(); // Aquí se construye el provider correctamente
    }

    @Bean
    public UserDetailsService userDetailsService() {
        // Aquí puedes agregar tu lógica para usuarios en memoria o usar LDAP directamente
        return new InMemoryUserDetailsManager();
    }
}
