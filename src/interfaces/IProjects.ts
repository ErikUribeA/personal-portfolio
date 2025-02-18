export interface IProjects {
    id:             string;
    title_en:       string;
    title_es:       string;
    description_en: string;
    description_es: string;
    img:            string;
    linkGithub:     string;
    linkWeb:        string;
    icons:          Icon[];
}

export interface Icon {
    name:    string;
    color:   string;
    library: string;
}
