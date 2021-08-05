import React from 'react';
import "./Main.css";

function Main() {
    return (
        <div className="container-fluid py-5 card card__1">
            <div className="row ">
                
  <div className="nav flex-column col-3 nav-pills me-3 vl" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <hr className="hr__1"/>
    <button className="nav-link  py-2 text-start " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">General</button>
    <button className="nav-link py-2 text-start" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Privacy</button>
    <button className="nav-link active py-2 text-start" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Features</button>
    <button className="nav-link py-2 text-start" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Customization</button>
    <button className="nav-link py-2 text-start" id="v-pills-profil-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Intergration</button>
    <button className="nav-link py-2 text-start" id="v-pills-message-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Session Settings <i class="fas fa-lock text-secondary"></i></button>
    <button className="nav-link py-2 text-start" id="v-pills-setting-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">My plans</button>
  </div>
  <div className="tab-content col-sm-8" id="v-pills-tabContent">
      
    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
      <div className="container-fluid">
      <div className="row">
        
        <div className="col-sm-8 purple"><i class="fas fa-comments fs-4 px-3"> Audience Q&A</i></div>
        <div className="col-sm-4 "><i class="fas fa-toggle-on text-success "></i> <i class="fas fa-chevron-up  px-2 "></i> <i class="far fa-times-circle text-secondary px-4 "></i></div>
        <hr className="hr__2 "/>

        
          <div class="col-sm-8 ">Moderation<br/><small className="text-secondary">Easily review all question before they go live</small></div>
          <div class="col-sm-4"><i class="fas fa-toggle-off text-secondary"></i></div>
          <div class="col-sm-8">Labels<br/><small className="text-secondary">Categorize and files question</small></div>
          <div class="col-sm-4"><i class="fas fa-toggle-on text-success "></i></div>
          <div class="col-sm-8">Downvotes<br/><small className="text-secondary">Allow the participants to reply or comment on question</small></div>
          <div class="col-sm-4"><i class="fas fa-toggle-on text-success "></i></div>
          <div class="col-sm-8">Repiles<br/><small className="text-secondary">let your participants send anomymous question</small></div>
          <div class="col-sm-4"><i class="fas fa-toggle-on text-success "></i></div>
          <div class="col-sm-8">Anonymous question<br/><small className="text-secondary">Easily review all question before they go live</small></div>
          <div class="col-sm-4"><i class="fas fa-toggle-on text-success "></i> </div>
          <div class="col-sm-8">Maximum question length<br/><small className="text-secondary">show number of views  instents of participents</small>
          <div className="row ">
          <div class="col-sm-2 ">
            
          <span class="badge purple__1 "> 160</span>
            </div>
          
          <div class="col-sm-2">
         <span class="badge  purple__1 "> 240</span> 
          </div>
          <div class="col-sm-2 ">
           <span class="badge purple__1"> 300</span>
           </div>
          </div>
         
          </div>
          <div class="col-sm-4"><i class="fas fa-toggle-off text-secondary"></i> </div>
          <div class="col-sm-8">Close question<br/><small className="text-secondary">prevent the participants form sending new questions</small></div>
          <div class="col-sm-4"><i class="fas fa-toggle-on text-success "></i> <button type="button" class="btn  purple__1  px-4 mx-5 text-white">Save</button></div>
  
    </div>
        
      </div>
    
    
    </div>


    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

          <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>


    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><p>Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
    
    </div>


    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><p>Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ip</p>
    
    
    </div>
    <div className="tab-pane fade" id="v-pills-profil" role="tabpanel" aria-labelledby="v-pills-profile-tab">


        ..
    </div>


    <div className="tab-pane fade" id="v-pills-message" role="tabpanel" aria-labelledby="v-pills-messages-tab"><p>sahil</p>
    
    </div>


    <div className="tab-pane fade" id="v-pills-setting" role="tabpanel" aria-labelledby="v-pills-settings-tab"><p>singh shil</p>
    
    
    </div>

  </div>
</div>
        </div>
    )
}

export default Main;
