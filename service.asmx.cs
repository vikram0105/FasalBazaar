using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using FasalBazar.BLL;

namespace FasalBazar
{
    /// <summary>
    /// Summary description for srevices
    /// </summary>
    [WebService(Namespace = "https://localhost:44365/Services")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class service : System.Web.Services.WebService
    {

        [WebMethod]
        public string GetAll()
        {
            BLL_FetchAllData bll = new BLL_FetchAllData();
            return bll.getAllData();
        }
    }
}
