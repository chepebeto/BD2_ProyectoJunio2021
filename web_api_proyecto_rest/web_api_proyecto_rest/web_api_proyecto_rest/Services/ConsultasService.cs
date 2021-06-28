using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using web_api_proyecto_rest.DB;
namespace web_api_proyecto_rest.Services
{
    public class ConsultasService
    {
        MySqlDb vrgConexion = new MySqlDb();

        public string fn_buscarUsuario(string pmConsulta)
        {
            SolveModel vrlRespuesta = new SolveModel();
            string vrlSalida = string.Empty;
            try
            {
                DataTable vrlDatos = vrgConexion.ConectarMysql(pmConsulta);


                if (vrlDatos == null)
                {
                    vrlRespuesta.codigo = "400";
                    vrlRespuesta.mensaje = "No encontrado";
                    vrlRespuesta.error = "";
                    vrlRespuesta.json = "";
                    vrlSalida = JsonConvert.SerializeObject(vrlRespuesta);
                    return vrlSalida;
                }

                //foreach(DataRow vrlFila in vrlDatos.Rows)
                //{
                //    Console.WriteLine(vrlFila["alias"].ToString());
                //}


                vrlRespuesta.codigo = "200";
                vrlRespuesta.mensaje = "OK";
                vrlRespuesta.error = "";
                vrlRespuesta.json = "";
                vrlSalida = JsonConvert.SerializeObject(vrlRespuesta);
                return vrlSalida;

            }
            catch (Exception er)
            {
                vrlRespuesta.codigo = "404";
                vrlRespuesta.mensaje = "Ocurrio un error";
                vrlRespuesta.error = er.ToString();
                vrlRespuesta.json = "";
                vrlSalida = JsonConvert.SerializeObject(vrlRespuesta);
                return vrlSalida;
            }
        }
        public string fn_ranking(string pmConsulta)
        {
            SolveModel vrlRespuesta = new SolveModel();
            string vrlSalida = string.Empty;
            try
            {
                DataTable vrlDatos = vrgConexion.ConectarMysql(pmConsulta);


                if (vrlDatos == null)
                {
                    vrlRespuesta.codigo = "400";
                    vrlRespuesta.mensaje = "No encontrado";
                    vrlRespuesta.error = "";
                    vrlRespuesta.json = "";
                    vrlSalida = JsonConvert.SerializeObject(vrlRespuesta);
                    return vrlSalida;
                }

                //foreach(DataRow vrlFila in vrlDatos.Rows)
                //{
                //    Console.WriteLine(vrlFila["alias"].ToString());
                //}
                string vrlJson = JsonConvert.SerializeObject(vrlDatos);

                vrlRespuesta.codigo = "200";
                vrlRespuesta.mensaje = "OK";
                vrlRespuesta.error = "";
                vrlRespuesta.json = vrlJson;
                vrlSalida = JsonConvert.SerializeObject(vrlRespuesta);
                return vrlSalida;

            }
            catch (Exception er)
            {
                vrlRespuesta.codigo = "404";
                vrlRespuesta.mensaje = "Ocurrio un error";
                vrlRespuesta.error = er.ToString();
                vrlRespuesta.json = "";
                vrlSalida = JsonConvert.SerializeObject(vrlRespuesta);
                return vrlSalida;
            }
        }
        public string fn_ranking2(string pmConsulta)
        {
            SolveModel vrlRespuesta = new SolveModel();
            string vrlSalida = string.Empty;
            try
            {
                DataTable vrlDatos = vrgConexion.ConectarMysql(pmConsulta);


                if (vrlDatos == null)
                {
                    vrlRespuesta.codigo = "400";
                    vrlRespuesta.mensaje = "No encontrado";
                    vrlRespuesta.error = "";
                    vrlRespuesta.json = "";
                    vrlSalida = JsonConvert.SerializeObject(vrlRespuesta);
                    return vrlSalida;
                }

                //foreach(DataRow vrlFila in vrlDatos.Rows)
                //{
                //    Console.WriteLine(vrlFila["alias"].ToString());
                //}
                string vrlJson = JsonConvert.SerializeObject(vrlDatos);

                vrlRespuesta.codigo = "200";
                vrlRespuesta.mensaje = "OK";
                vrlRespuesta.error = "";
                vrlRespuesta.json = vrlJson;
                vrlSalida = JsonConvert.SerializeObject(vrlRespuesta);
                return vrlSalida;

            }
            catch (Exception er)
            {
                vrlRespuesta.codigo = "404";
                vrlRespuesta.mensaje = "Ocurrio un error";
                vrlRespuesta.error = er.ToString();
                vrlRespuesta.json = "";
                vrlSalida = JsonConvert.SerializeObject(vrlRespuesta);
                return vrlSalida;
            }
        }
        public string fn_consultas(string pmConsulta)
        {
            SolveModel vrlRespuesta = new SolveModel();
            string vrlSalida = string.Empty;
            try
            {
                if (pmConsulta == "A") ///CONSULTA 1
                {
                    pmConsulta = "select * from bases2.vista_consulta1;";
                }
                else if (pmConsulta == "B") ///CONSULTA 2
                {
                    pmConsulta = "select * from bases2.vista_consulta2;";
                }
                else if (pmConsulta == "C") ///CONSULTA 3
                {
                    pmConsulta = "select * from bases2.vista_consulta3;";
                }
                else if (pmConsulta == "D") ///CONSULTA 4
                {
                    pmConsulta = "select * from bases2.vista_consulta4;";
                }

                DataTable vrlDatos = vrgConexion.ConectarMysql(pmConsulta);


                if (vrlDatos == null)
                {
                    vrlRespuesta.codigo = "400";
                    vrlRespuesta.mensaje = "No encontrado";
                    vrlRespuesta.error = "";
                    vrlRespuesta.json = "";
                    vrlSalida = JsonConvert.SerializeObject(vrlRespuesta);
                    return vrlSalida;
                }

                //foreach(DataRow vrlFila in vrlDatos.Rows)
                //{
                //    Console.WriteLine(vrlFila["alias"].ToString());
                //}
                string vrlJson = JsonConvert.SerializeObject(vrlDatos);

                vrlRespuesta.codigo = "200";
                vrlRespuesta.mensaje = "OK";
                vrlRespuesta.error = "";
                vrlRespuesta.json = vrlJson;
                vrlSalida = JsonConvert.SerializeObject(vrlRespuesta);
                return vrlSalida;

            }
            catch (Exception er)
            {
                vrlRespuesta.codigo = "404";
                vrlRespuesta.mensaje = "Ocurrio un error";
                vrlRespuesta.error = er.ToString();
                vrlRespuesta.json = "";
                vrlSalida = JsonConvert.SerializeObject(vrlRespuesta);
                return vrlSalida;
            }
        }
    }
}
