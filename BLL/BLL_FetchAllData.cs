using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FasalBazar.DAL;

namespace FasalBazar.BLL
{
    public class BLL_FetchAllData
    {
        string result;
        public string getAllData() {
            DAL_FetchAllData dal = new DAL_FetchAllData();
            return dal.getAllData();
        }
    }
}