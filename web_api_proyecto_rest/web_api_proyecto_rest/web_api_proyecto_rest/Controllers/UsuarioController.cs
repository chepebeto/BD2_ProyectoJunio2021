﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using web_api_proyecto_rest.Services;

namespace web_api_proyecto_rest.Controllers
{
    [Route("api/consulta/login")]
    public class UsuarioController : Controller
    {
        ConsultasService IOConsultaService = new ConsultasService();

        [HttpGet("{datos}")]
        public ActionResult<string> login(string datos)
        {
            RequestModel vrlUsuario = JsonConvert.DeserializeObject<RequestModel>(datos);
            string vrlCadUsuario = "select * from bases2.usuario where alias = '" + vrlUsuario.usuario + "' and password = '" + vrlUsuario.pasword + "'; ";

            string vrlConsulta1 = IOConsultaService.fn_buscarUsuario(vrlCadUsuario);
            string vrlError = string.Empty;
            return vrlConsulta1;
        }
    }
}
