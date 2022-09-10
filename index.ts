class auto {
    public modelo : string;
    public marca : string;
    public dominio : string;
    public colorActual : string;
    public estaPrendido : boolean;
    public velocidadActual : number;
    public direccionActual : string;


    constructor (pModelo:string,pMarca:string,pDominio:string,pColorActual:string,pEncendido:boolean,pVelocidad:number,pDireccion:string) {
        this.modelo = pModelo;
        this.marca = pMarca;
        this.dominio = pDominio;
        this.colorActual = pColorActual;
        this.estaPrendido = pEncendido;
        this.velocidadActual = pVelocidad;
        this.direccionActual = pDireccion;

    }


    encenderApagar (): void {
        if (this.estaPrendido===true){
            this.estaPrendido=false;
        }else{
            this.estaPrendido=true;
        }
    }
    acelerar (): void {
        this.velocidadActual = this.velocidadActual ++
    }
    frenar (): void {
        this.velocidadActual = 0;
    }
    doblarDerecha (): void {
        this.direccionActual = "derecha";
    
    }
    doblarIzquierda (): void {
        this.direccionActual = "Izquierda";
    }
}