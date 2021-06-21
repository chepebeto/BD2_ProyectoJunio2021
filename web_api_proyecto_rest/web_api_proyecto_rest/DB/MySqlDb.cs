using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

using MySqlConnector;

namespace web_api_proyecto_rest.DB
{
   
    public class MySqlDb
    {
        private MySqlConnection vrgConection;
        private string vrgCadena= "server=35.184.32.71; database=prueba;user id=dba;password=Bases2.12;port=33060";
        public DataTable ConectarMysql(string pmConsulta)
        {
            try
            {
                vrgConection = new MySqlConnection(vrgCadena);
                vrgConection.Open();
                MySqlDataReader vrlReader = null;
                MySqlCommand cmd = new MySqlCommand(pmConsulta, vrgConection);
                vrlReader = cmd.ExecuteReader();
                DataTable vrlDatos = new DataTable();//vrlReader.GetSchemaTable();

                // var dataTable = new DataTable();
                vrlDatos.Load(vrlReader);
                if (vrlDatos.Rows.Count== 0 || vrlDatos == null)
                {
                    return null;
                }

                return vrlDatos;
            }
            catch(Exception er)
            {
                return null;
            }
        }
    }
}
