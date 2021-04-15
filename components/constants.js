const base_url='https://policy209.herokuapp.com/'
export const api_urls={
"search":`${base_url}search/`,
"get_put_single_object":`${base_url}policy/`,
"get_all_objects":`${base_url}allpolicy/`,
"get_chart_data":`${base_url}chartdata/`
}

export const MonthName=["Jan","Feb","Mar","April","May","June","July",
                            "Aug", "Sep", "Oct", "Nov", "Dec"]

export const chartType=["Bar","LineChart","PieChart"]

export const regions=[null,"East","West","North","South"]