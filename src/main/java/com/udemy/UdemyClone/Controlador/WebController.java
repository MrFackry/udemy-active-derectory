package com.udemy.UdemyClone.Controlador;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    /*Metodos*/

    /**************************************************
                            Index
     ************************************************* */

    @GetMapping("/") // Maneja la raíz
    public String home() {
        return "forward:/index.html";
    }

    @GetMapping("/{path:[^\\.]*}") // Maneja rutas sin extensiones (como archivos estáticos)
    public String redirect() {
        return "forward:/index.html"; // Redirige al archivo index.html
    }
}
