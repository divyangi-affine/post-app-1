import { Component } from "@angular/core";

@Component({
    selector : 'app-post-create',
    templateUrl : './post-create.component.html'
})

export class PostCreateComponent {
    //Property Decalaration and initializtaion
    newPost = '';
    newPost2 = '';
    enteredValue = '';
    //Event Binding
    onAddPost(postInput : HTMLTextAreaElement) {
        this.newPost = 'hey';
        this.newPost2 = postInput.value; //ref Input
    }
}