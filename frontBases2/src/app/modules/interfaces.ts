export interface Ranking{
        nombre?:        string,
        Mayo?:          string,
        Junio?:         string,
        Julio?:         string,
        Agosto?:        string,
        Septiembre?:    string,
        Octubre?:       string,
        Noviembre?:     string,
        Diciembre:      string,
        Enero:          string,
        Febrero:        string,
        Marzo:          string,
        Abril:          string,         
}


export interface RespuestaRanking{
    codigo? :string
    mensaje?:string
    error?  :string
    json?   :string
}