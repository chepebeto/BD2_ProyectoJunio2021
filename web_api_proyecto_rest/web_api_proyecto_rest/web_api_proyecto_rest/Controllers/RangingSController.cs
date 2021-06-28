using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using web_api_proyecto_rest.Services;

namespace web_api_proyecto_rest.Controllers
{
    [Route("api/consulta/rank")]
    public class RangingSController : Controller
    {
        ConsultasService IOConsultaService = new ConsultasService();

        [HttpGet]
        public ActionResult<string> rank()
        {
            string vrlCadUsuarioS = "select nombre, Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre,Enero,Febrero,Marzo,Abril from bases2.vista_general_ranking order by Mayo asc; ";

            string vrlConsulta1 = IOConsultaService.fn_ranking2(vrlCadUsuarioS);
            string vrlError = string.Empty;
            return vrlConsulta1;
        }
    }
}
