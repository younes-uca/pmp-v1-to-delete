import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ComptableCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public nom: string;
    public nomLike: string;
    public prenom: string;
    public prenomLike: string;
    public email: string;
    public emailLike: string;
    public tele: string;
    public teleLike: string;
     public salaire: number;
     public salaireMin: number;
     public salaireMax: number;

}
