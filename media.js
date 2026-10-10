// Dependency-free, touch-native project media. Local MP4/WebM clips use type: 'video'.
function createProjectMedia(project, expanded = false, initialIndex = 0) {
  const items = project.media ? [...project.media] : (project.screenshots || []).map(shot => ({type:'image',src:shot.image,caption:shot.caption}));
  if(project.trailer)items.push({type:'external',poster:project.trailer.poster,url:project.trailer.url,caption:'Official trailer · Steam'});
  if (!items.length) items.push({type:'image',src:project.image,caption:project.imageAlt || project.title});
  const root = document.createElement('div'); root.className = 'media-gallery';
  root.setAttribute('role','region'); root.setAttribute('aria-label',`${project.title} media gallery`);
  const toolbar = document.createElement('div'); toolbar.className = 'media-toolbar';
  const label = document.createElement('span'); label.textContent = project.status || 'PROJECT GALLERY'; toolbar.append(label);
  const expand = document.createElement('button'); expand.type='button'; expand.className='media-expand'; expand.textContent=expanded?'Close ✕':'View larger ⛶'; toolbar.append(expand);
  const track = document.createElement('div'); track.className='media-track'; track.tabIndex=0;
  track.setAttribute('aria-label','Swipe or use left and right arrow keys to browse media');
  let active=initialIndex;
  const thumbs=[];
  items.forEach((item,index)=>{
    const slide=document.createElement('div');slide.className='media-slide';slide.setAttribute('role','group');slide.setAttribute('aria-label',`${index+1} of ${items.length}: ${item.caption}`);
    if(item.type==='video') {
      const video=document.createElement('video');video.src=item.src;video.poster=item.poster||'';video.controls=true;video.playsInline=true;video.preload='none';video.setAttribute('aria-label',item.caption);
      if(item.captions){const captions=document.createElement('track');captions.kind='captions';captions.src=item.captions;captions.srclang='en';captions.label='English';video.append(captions);}
      slide.append(video);
      video.addEventListener('error',()=>{const note=document.createElement('p');note.className='media-error';note.textContent='This video could not load. Try the project’s store link.';if(!slide.querySelector('.media-error'))slide.append(note);});
    } else {
      const image=document.createElement('img');image.src=item.poster||item.src;image.alt=item.caption;image.loading=index===0?'eager':'lazy';image.draggable=false;slide.append(image);
      if(item.type==='external') {const link=document.createElement('a');link.className='trailer-link';link.href=item.url;link.target='_blank';link.rel='noopener';link.innerHTML='<span aria-hidden="true">▶</span> Watch trailer on Steam ↗';slide.append(link);}
    }
    track.append(slide);
  });
  const controls=document.createElement('div');controls.className='media-controls';
  const caption=document.createElement('span');caption.className='media-caption';caption.setAttribute('aria-live','polite');
  const previous=document.createElement('button');previous.type='button';previous.textContent='←';previous.setAttribute('aria-label','Previous media');
  const next=document.createElement('button');next.type='button';next.textContent='→';next.setAttribute('aria-label','Next media');
  controls.append(caption,previous,next);
  const rail=document.createElement('div');rail.className='media-thumbnails';rail.setAttribute('role','group');rail.setAttribute('aria-label','Choose media');
  items.forEach((item,index)=>{
    const button=document.createElement('button');button.type='button';button.setAttribute('aria-label',`Show ${item.caption}`);
    const image=document.createElement('img');image.src=item.poster||item.src;image.alt='';image.loading='lazy';
    if(item.type!=='video'||item.poster)button.append(image);
    if(item.type!=='image'){const play=document.createElement('span');play.textContent='▶';button.append(play);}
    button.addEventListener('click',()=>go(index));thumbs.push(button);rail.append(button);
  });
  function update(){
    caption.textContent=`${String(active+1).padStart(2,'0')} / ${String(items.length).padStart(2,'0')} — ${items[active].caption}`;
    thumbs.forEach((button,index)=>{button.setAttribute('aria-pressed',String(index===active));});
    [...track.children].forEach((slide,index)=>{slide.inert=index!==active;if(index!==active)slide.querySelector('video')?.pause();});
    const thumb=thumbs[active];rail.scrollTo({left:thumb.offsetLeft-rail.offsetLeft-rail.clientWidth/2+thumb.clientWidth/2,behavior:'auto'});
  }
  function go(index){active=(index+items.length)%items.length;track.scrollTo({left:active*track.clientWidth,behavior:motionPreference.matches?'instant':'smooth'});update();}
  previous.addEventListener('click',()=>go(active-1));next.addEventListener('click',()=>go(active+1));
  track.addEventListener('keydown',event=>{if(event.target.tagName==='VIDEO')return;if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();go(active+(event.key==='ArrowRight'?1:-1));}});
  let scrollTimer;
  track.addEventListener('scroll',()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>{active=Math.round(track.scrollLeft/track.clientWidth)||0;update();},120);},{passive:true});
  root.append(toolbar,track,controls,rail);
  const hint=document.createElement('p');hint.className='media-hint';hint.textContent='SWIPE TO EXPLORE · SELECT A THUMBNAIL';root.append(hint);
  expand.addEventListener('click',()=>{
    if(expanded){root.closest('dialog').close();return;}
    root.querySelectorAll('video').forEach(video=>video.pause());
    const dialog=document.createElement('dialog');dialog.className='media-dialog';dialog.setAttribute('aria-label',`${project.title} expanded media`);
    dialog.append(createProjectMedia(project,true,active));document.body.append(dialog);
    const oldOverflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.showModal();
    dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
    dialog.addEventListener('close',()=>{dialog.querySelectorAll('video').forEach(video=>video.pause());dialog.remove();document.body.style.overflow=oldOverflow;expand.focus();},{once:true});
  });
  const resize=new ResizeObserver(()=>{track.scrollTo({left:active*track.clientWidth,behavior:'instant'});});resize.observe(track);
  // Disconnect observers when filtering removes a gallery or a dialog closes.
  const removed=new MutationObserver(()=>{if(!root.isConnected){resize.disconnect();removed.disconnect();clearTimeout(scrollTimer);root.querySelectorAll('video').forEach(video=>video.pause());}});
  requestAnimationFrame(()=>{if(root.isConnected){removed.observe(document.body,{childList:true,subtree:true});track.scrollLeft=initialIndex*track.clientWidth;update();}});
  update();return root;
}
