export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons:number;
    description:string;
    urlpagina:string;
    urlimagen:string;
    
    public constructor(id:number,name:string,channel:string,seasons:number,description:string,urlpagina:string,urlimagen:string){
        this.id=id;
        this.name=name;
        this.channel=channel;
        this.seasons=seasons;
        this.description=description;
        this.urlpagina=urlpagina;
        this.urlimagen=urlimagen;
    }
}
