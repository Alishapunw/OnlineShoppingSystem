import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-test-image',
  templateUrl: './test-image.component.html',
  styleUrls: ['./test-image.component.css']
})
export class TestImageComponent implements OnInit {

  fileForm = new FormGroup({
    
  });
  fileToUpload: any;
  trustedDashboardUrl!: string;



  constructor(private http:  HttpClient, private sanitizer: DomSanitizer) { }

  handleFileInput(e: any) {
    this.fileToUpload = e?.target?.files[0];
  }

  ngOnInit(): void {
      this.getImageFromServer();
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  
  saveFileInfo()
  {
    const formData: FormData = new FormData();
    formData.append('myFile', this.fileToUpload);   
    return this.http.post('http://localhost:65061/api/Timages/UploadImages', formData, {  headers : new HttpHeaders()  }).subscribe( (data) => {  alert("File uploaded"); console.log(data);
     });
  }

  getImageFromServer(){
    return   this.http.get('http://localhost:65061/api/Timages/GetOneImage').subscribe( (data:any) =>  {
      this.trustedDashboardUrl = data["filePath"]
    }  )  ;
  }

}
