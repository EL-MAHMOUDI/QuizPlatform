package com.mahmoudi.authenticationmicroservice.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class JWTAthorizationFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Key, Authorization");
        response.setHeader("Access-Control-Expose-Headers", "Access-Control-Allow-Headers, Access-Control-Allow-Credentials, authorization");

        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
        }
        String token = request.getHeader(SecurityParams.JWT_HEADER_NAME);
        if (token == null || !token.startsWith(SecurityParams.TOKEN_PREFIX)){
            filterChain.doFilter(request, response);
            return;
        }else if(request.getRequestURI().equals("/login") || request.getRequestURI().equals("/register")){
            filterChain.doFilter(request, response);
            return;
        }
        String jwt = token.substring(SecurityParams.TOKEN_PREFIX.length());
        JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(SecurityParams.SECRET)).build();
        DecodedJWT decodedJWT = jwtVerifier.verify(jwt);
        String username = decodedJWT.getSubject();
        List<String> roles = decodedJWT.getClaims().get("roles").asList(String.class);
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        roles.forEach(role -> authorities.add(new SimpleGrantedAuthority(role)));
        UsernamePasswordAuthenticationToken user = new UsernamePasswordAuthenticationToken(username,null, authorities);
        SecurityContextHolder.getContext().setAuthentication(user);
        filterChain.doFilter(request, response);

    }
}
