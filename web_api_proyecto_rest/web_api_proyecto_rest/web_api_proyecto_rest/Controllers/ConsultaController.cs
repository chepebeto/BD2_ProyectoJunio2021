using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using web_api_proyecto_rest.Services;

namespace web_api_proyecto_rest.Controllers
{
    [Route("api/consulta/consulta")]

    public class ConsultaController : Controller
    {
        ConsultasService IOConsultaService = new ConsultasService();
        
        [HttpGet("{dato}")]
        public ActionResult<string> consulta(string dato)
        {
            RequestModel vrlUsuario = JsonConvert.DeserializeObject<RequestModel>(dato);
            string vrlCadUsuario = "select * from bases2.usuario where alias = '" + vrlUsuario.usuario + "' and password = '" + vrlUsuario.pasword + "'; ";

            string vrlConsulta1 = IOConsultaService.fn_consultas(vrlUsuario.Operacion);
            string vrlError = string.Empty;
            return vrlConsulta1;
        }
        
       
    }
}
