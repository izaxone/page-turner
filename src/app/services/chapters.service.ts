import { Injectable } from '@angular/core';
import { Chapter } from '../models/chapter';

// This service defines the chapters. 

@Injectable({
  providedIn: 'root'
})

export class ChaptersService {
  public chapters: Chapter[] = [
    {
      id: 1,
      title: "Chapter 1 | The Beginning",
      url: "/chapter1",
      content: [
        "Unus lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Three lorem ipsum dolor sit ametolore magna aliqua. Nulla at volutpat diam ut venenatis tellus in. Id aliquet risus feugiat in ante. Orci eu lobortis elementum nibh tellus molestie. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Viverra vitae congue eu consequat ac felis donec et. In est ante in nibh mauris cursus mattis molestie a. Purus non enim praesent elementum facilisis. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Id cursus metus aliquam eleifend mi in nulla posuere. Nascetur ridiculus mus mauris vitae ultricies.",
        "Donec pretium vulputate sapien nec sagittis. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Nulla facilisi cras fermentum odio eu. Tellus elementum sagittis vitae et leo duis ut. Ac placerat vestibulum lectus mauris ultrices eros. Mi eget mauris pharetra et ultrices neque. Eu turpis egestas pretium aenean. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Sed ullamcorper morbi tincidunt ornare massa. Mauris commodo quis imperdiet massa tincidunt nunc. Consequat ac felis donec et odio pellentesque. Vel facilisis volutpat est velit egestas. Quis auctor elit sed vulputate mi sit amet. Sed faucibus turpis in eu. Non pulvinar neque laoreet suspendisse. Velit scelerisque in dictum non. Tristique nulla aliquet enim tortor at auctor. Massa id neque aliquam vestibulum morbi blandit.",
        "Massa ultricies mi quis hendrerit dolor magna eget est. Enim neque volutpat ac tincidunt vitae semper. Urna nec tincidunt praesent semper feugiat. Nunc id cursus metus aliquam. Augue eget arcu dictum varius duis at. Viverra suspendisse potenti nullam ac tortor. Tortor id aliquet lectus proin nibh nisl condimentum id. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Aliquam etiam erat velit scelerisque in dictum. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Gravida cum sociis natoque penatibus. In iaculis nunc sed augue lacus viverra vitae congue. Sed enim ut sem viverra aliquet eget sit. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Sed lectus vestibulum mattis ullamcorper velit. Tellus at urna condimentum mattis pellentesque id."
      ]
    },
    {
      id: 2,
      title: "Chapter 2 | The Middle",
      url: "/chapter2",
      content: [
        "Duo vel turpis nunc eget lorem dolor. Et tortor consequat id porta nibh venenatis cras. Amet massa vitae tortor condimentum. Iaculis at erat pellentesque adipiscing commodo elit. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Gravida arcu ac tortor dignissim convallis aenean et. Non quam lacus suspendisse faucibus interdum posuere lorem. Accumsan lacus vel facilisis volutpat est velit egestas dui. Faucibus scelerisque eleifend donec pretium vulputate sapien. Pharetra pharetra massa massa ultricies mi. Rhoncus dolor purus non enim praesent elementum. Vel orci porta non pulvinar neque.",
        "Est ultricies integer quis auctor elit sed. Penatibus et magnis dis parturient montes nascetur ridiculus. Erat velit scelerisque in dictum non consectetur a erat. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Viverra mauris in aliquam sem fringilla. Risus sed vulputate odio ut enim blandit. Sit amet volutpat consequat mauris nunc. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Bibendum enim facilisis gravida neque convallis a cras semper auctor. At tempor commodo ullamcorper a lacus vestibulum sed. Cursus in hac habitasse platea dictumst quisque. Feugiat nisl pretium fusce id velit ut tortor. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Ultricies integer quis auctor elit sed vulputate.",
        "Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut aliquam purus sit amet luctus. Consequat nisl vel pretium lectus quam id leo in vitae. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Orci ac auctor augue mauris. Cursus risus at ultrices mi. Curabitur vitae nunc sed velit dignissim sodales. Eleifend donec pretium vulputate sapien nec. Malesuada fames ac turpis egestas maecenas pharetra. Diam donec adipiscing tristique risus nec feugiat in fermentum. Suscipit tellus mauris a diam maecenas sed. Sed egestas egestas fringilla phasellus faucibus. Volutpat lacus laoreet non curabitur gravida. Consectetur purus ut faucibus pulvinar elementum integer enim. Purus sit amet volutpat consequat mauris nunc. Pretium lectus quam id leo. Semper quis lectus nulla at volutpat."
      ]
    },
    {
      id: 3,
      title: "Chapter 3 | The End",
      url: "/chapter3",
      content: [
        "Tribus dictum non consectetur a erat nam. Dignissim suspendisse in est ante in nibh. Tempus urna et pharetra pharetra. Montes nascetur ridiculus mus mauris vitae ultricies. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Orci eu lobortis elementum nibh tellus molestie. Mauris ultrices eros in cursus turpis massa. Tempor id eu nisl nunc mi ipsum. Habitasse platea dictumst vestibulum rhoncus est. Adipiscing at in tellus integer feugiat scelerisque varius. Libero justo laoreet sit amet cursus sit. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Lorem ipsum dolor sit amet consectetur. Interdum velit laoreet id donec ultrices.",
        "Lectus proin nibh nisl condimentum id venenatis. Nisl nunc mi ipsum faucibus. Egestas maecenas pharetra convallis posuere morbi. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Nisl tincidunt eget nullam non nisi est sit amet. Egestas dui id ornare arcu odio ut sem nulla. Purus sit amet volutpat consequat mauris nunc congue. Risus in hendrerit gravida rutrum. Mauris a diam maecenas sed. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Fringilla est ullamcorper eget nulla facilisi etiam. Erat imperdiet sed euismod nisi porta lorem. Sed velit dignissim sodales ut. Ac turpis egestas integer eget aliquet nibh praesent tristique. Tellus elementum sagittis vitae et leo duis ut diam. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Posuere urna nec tincidunt praesent semper. Proin sed libero enim sed faucibus turpis in eu.",
        "Tempor commodo ullamcorper a lacus vestibulum. In eu mi bibendum neque egestas congue quisque egestas diam. Quis vel eros donec ac odio tempor orci dapibus ultrices. Ipsum dolor sit amet consectetur adipiscing elit. Leo integer malesuada nunc vel risus commodo viverra. Auctor urna nunc id cursus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Sit amet justo donec enim. Vulputate mi sit amet mauris. Amet consectetur adipiscing elit ut aliquam purus sit. Mattis enim ut tellus elementum sagittis vitae et. Adipiscing elit duis tristique sollicitudin nibh sit. Convallis a cras semper auctor neque vitae. Tristique senectus et netus et malesuada fames ac. Turpis egestas integer eget aliquet nibh praesent tristique magna sit."
      ]
    }
    
  ];

  constructor() { }
}
