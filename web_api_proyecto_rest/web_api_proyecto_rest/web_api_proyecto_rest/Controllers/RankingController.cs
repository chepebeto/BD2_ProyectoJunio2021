using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using web_api_proyecto_rest.Services;

namespace web_api_proyecto_rest.Controllers
{
    [Route("api/consulta/ranking")]
    public class RankingController : Controller
    {
        ConsultasService IOConsultaService = new ConsultasService();

        [HttpGet]
        public ActionResult<string> ranking()
        {
            RequestModel vrlUsuario = new RequestModel();
            vrlUsuario.usuario = "abautista";
            vrlUsuario.pasword = "123456";
            vrlUsuario.Operacion = "A";

            string vrlCadUsuario = JsonConvert.SerializeObject(vrlUsuario);
           // RequestModel vrlUsuario = JsonConvert.DeserializeObject<RequestModel>(datos);
            string vrlCadUsuarioS = "select nombre, Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre,Enero,Febrero,Marzo,Abril from bases2.vista_general order by Mayo desc; ";

            string vrlConsulta1 = IOConsultaService.fn_ranking(vrlCadUsuarioS);
            string vrlError = string.Empty;
            return vrlConsulta1;
        }
    }
}
