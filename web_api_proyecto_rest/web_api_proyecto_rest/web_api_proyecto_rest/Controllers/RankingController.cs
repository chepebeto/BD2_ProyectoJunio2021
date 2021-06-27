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
            string vrlCadUsuarioS = "select nombre, format(Mayo,2) as Mayo,format(Junio,2) as Junio  , format(Julio, 2) as Julio,format(Agosto, 2) as Agosto ,format(Septiembre, 2) as Septiembre,format(Octubre, 2) as Octubre ,format(Noviembre, 2) as Noviembre,format(Diciembre, 2) as Diciembre ,format(Enero, 2) as Enero,format(Febrero, 2) as Febrero ,format(Marzo, 2) as Marzo ,format(Abril,2) as Abril from bases2.vista_general order by Mayo desc; ";

            string vrlConsulta1 = IOConsultaService.fn_ranking(vrlCadUsuarioS);
            string vrlError = string.Empty;
            return vrlConsulta1;
        }
    }
}
