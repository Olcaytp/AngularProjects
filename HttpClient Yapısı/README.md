# Httpclientexample
Kendi hazırladığımız veya dış uygulamalar üzerinden ulaştığımızWeb Api veya web servis yapılarını kullanabilmek(tüketebilmek)
 için HttpClient yapısına ihtiyaç duyarız.

HttpClient; istemci ile sunucu arasında işlem yapabilmemizi sağlyan bir yapıdır. Bu özelliği sayesinde web api veya
 web servislerdeki get, posti puti delete işlemlerini kullanmamıza olanak sağlar.


 öncelikle uygulamamıza bir servis ekleyerek işşemlerimize başlarız.
 "ng g s Dataservice" diyerek bir servis ekkleriz.

Todo.ts diye bir dosya ekleyerek içine interface oluşturuyoryum.içine de model tanımlamalarını atıyorum.
export interface Todo
{
    userID: number,
    id: number,
    titler: string,
    completed: boolean
}
sonra dataservice.service.ts e giderek orada constructor içine HttpClientkütüphanesini eklememiz gerekecek şu şekilde;
export class DataserviceService {
    constructor(private http:HttpClient)
}
otomatik olarak üst satırlara iöport edilecektir yoksa hata verir.
Bu işlemlerden sonra export class içine her zaman metot tanımlarını yapıyorum.

//önce url tanımlamamı yapıyorum. _url= 'https://jsonplaceholder.typicode.com/';
getTodos():Observable<Todo[]>
{
    return this.http.get<Todo[]>(this._url+'todos') // todos urlin sonundan geldi ve buraya bütün listeyi istediğimi 
    //belirtmek için ayzdım.
} //gibi
devamı örnek projede..

HttpClient projesinde get,put, post ve delete metotlarını kullanarak örnek bir çalışma yaptık.

Bu metotları önce dataservice.ts dosyasında tanımlıyoruz, sonra app.component.ts'de de tanıtıyoruz. html de de 
çağırıyoruz.
# Httpclientexample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
