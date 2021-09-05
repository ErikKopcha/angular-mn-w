import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { PostService } from "src/app/services/post.service";
import { PostsComponentTest } from "./posts.component";
import { PostsService } from "./posts.service";

describe('PostsComponent', () => {
  let fixture: ComponentFixture<PostsComponentTest>;
  let component: PostsComponentTest;
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponentTest],
      providers: [PostService],
      imports: [HttpClientModule]
    });

    fixture = TestBed.createComponent(PostsComponentTest);
    component = fixture.componentInstance;
    service = TestBed.get(PostService);
  });

  xit('should fetch posts on ngOnInit', () => {
    const posts = [1, 2, 3];
    spyOn(service, 'fetch').and.returnValue(of(posts));

    fixture.detectChanges();

    expect(component.posts).toEqual(posts);
   });
})
