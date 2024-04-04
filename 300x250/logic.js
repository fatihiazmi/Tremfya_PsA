

//Add Click Elements to Body Tag
/**Define number of click elements you need by passing the addClickElements function a number
  *By Defualt the function creates 1 click element 
**/

function removepara(e){
    if(e == "Efficacy - Joint & Skin" || e == "Heritage"){
      document.getElementById("psoinpsa").style.display = "block";
    }
  }
  

// custom function for copy insert start
  // INSERT COPY TO DOM
  function  insertCopy(_target, _copy, _style) {
    var style_obj = eval("({"+_style+"})");
    var _c = _copy;
    
    _target.innerHTML = _c;   

    for(var key in style_obj) {
      if(key === 'posX'){
        TweenMax.set(_target, {x:style_obj.posX});
      }

      if(key === 'posY'){
        TweenMax.set(_target, {y:style_obj.posY});
      }

      if(key === 'fontSize'){
         _target.style.fontSize = style_obj.fontSize + "px";
      }

      if(key === 'lineHeight'){
      
        _target.style.lineHeight = style_obj.lineHeight + "px";
      }

      if(key === 'padTop'){
        _target.style.paddingTop = style_obj.padTop + 'px';
      }

      if(key === 'letterSpacing'){
        _target.style.letterSpacing = style_obj.letterSpacing + 'px';
      }

      if(key === 'width'){
         _target.style.width = style_obj.width + "px";
      }

      if(key === 'height'){
        _target.style.height = style_obj.height + "px";
     }
    }
  }
// custom function for copy insert END






function BuildAfterNoonTemplate(feedData,elements) {
  
    /////======= Set Dynamic Content =======/////

    /*Similar to the Linked Animation Templates below. If there are more than 3 different templates with varied content settings
    *Include these template settings in their own function using the setDynamicVariable function to capture latest dom elements
    *Call the populate function here
    */
    console.log('Afternoon Build Template');

    let exit = feedData[0].cta_url.Url;
    console.log(feedData);
    console.log(elements);

   
    
    customLabel = feedData[0].UniqueID + "_" +feedData[0].Person + "_" +  feedData[0].Place + "_" + "Afternoon" + "_" + "Efficacy - Joint Symptom Relief + Fatigue ";
   
    insertCopy(elements.frame1_copy, '<span class="spanColor">Joint symptoms </span> hitting hard at mid-day?','');
    insertCopy(elements.frame2_copy, 'For adults with <br>active psoriatic arthritis', '');
    insertCopy(elements.frame2_copy2, `Don't let symptoms define you.`, '');
    insertCopy(elements.frame3_copy, `TREMFYA<sup>®</sup> is proven to <span class="spanColor">significantly reduce</span> joint <br>pain, stiffness, and swelling`, '');
    insertCopy(elements.frame3_copy2, `In two medical studies, at 24 weeks, more than 5 out of 10 TREMFYA<sup>®</sup> patients had at least 20% improvement in active PsA symptoms. Results may vary.`, '');
    insertCopy(elements.frame4_copy, `Reduced PsA-related <br><span class="spanColor">fatigue</span> is possible`, '');
    insertCopy(elements.frame4_copy2, `Results may vary.`, '');
    insertCopy(elements.frame5_copy, `<span class="spanColor">Emerge as you</span> Ask your doctor <br>about TREMFYA<sup>®</sup>`, '');

    if (feedData[0].Place == "Travel") {

        elements.frame1_copy.classList.add("frame1_copy_shadowed");
    }

    insertImage(feedData[0].logo.Url,"src", elements.logo);
    insertImage(feedData[0].logo2.Url,"src", elements.logo2);
    insertImage('https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20230927245949360_PsA_300x250_Endemic-Afternoon_Fatigue.jpg',"src", elements.heroImage);
    insertImage(feedData[0].graphicImg1.Url,"src", elements.graphicImg1);
    insertImage(feedData[0].graphicImg2.Url,"src", elements.graphicImg2);

    elements['cta'].innerHTML = "Learn more";
    elements['cp_code'].innerHTML = "cp-400192v1";

    removepara(feedData[0].creativeVersion);
    console.log("customLabel: "+customLabel);
    logCustomVariable("Impression", customLabel);
    initclickTag(customLabel,exit);
    


}

function BuildTemplate(feedData,elements) {
  
    /////======= Set Dynamic Content =======/////

    /*Similar to the Linked Animation Templates below. If there are more than 3 different templates with varied content settings
    *Include these template settings in their own function using the setDynamicVariable function to capture latest dom elements
    *Call the populate function here
    */
    console.log('Standard Build Template');

    let exit = feedData[0].cta_url.Url;
    console.log(feedData);
    console.log(elements);

    /*
    
    Capture dynamic content and store them in a dictionary to access
    ** Sample references to use in code:
       1. feedData[0].frame1Copy
       2. feedData[0].frame1image.Url

    ** [0] is the feed number - 0 is the first feed
        - Usually only one feed is used but if multiple feeds are used, the feed number can be used to access the correct feed
    
    ** .frame1Copy & .frame1image.Url are the field name in the feed and/or data to enter into dom
    
    */

    /** Now that the variables are retrieved from the DOM you can now access all divs and tags by their ID */
    
    customLabel = feedData[0].UniqueID + "_" +feedData[0].Person + "_" +  feedData[0].Place + "_" + feedData[0].Moment + "_" + feedData[0].message;
    insertCopy(elements.frame1_copy, feedData[0].frame1_copy,feedData[0].frame1_copy_style);
    insertCopy(elements.frame2_copy, feedData[0].frame2_copy, feedData[0].frame2_copy_style);
    insertCopy(elements.frame2_copy2, feedData[0].frame2_copy2, feedData[0].frame2_copy2_style);
    insertCopy(elements.frame3_copy, feedData[0].frame3_copy, feedData[0].frame3_copy_style);
    insertCopy(elements.frame3_copy2, feedData[0].frame3_copy2, feedData[0].frame3_copy2_style);
    insertCopy(elements.frame4_copy, feedData[0].frame4_copy, feedData[0].frame4_copy_style);
    insertCopy(elements.frame4_copy2, feedData[0].frame4_copy2, feedData[0].frame4_copy2_style);
    insertCopy(elements.frame5_copy, feedData[0].frame5_copy, feedData[0].frame5_copy_style);
    insertCopy(elements.cta, feedData[0].cta, feedData[0].cta_style);

    if (feedData[0].Place == "Travel") {

        elements.frame1_copy.classList.add("frame1_copy_shadowed");
    }

    insertImage(feedData[0].logo.Url,"src", elements.logo);
    insertImage(feedData[0].logo2.Url,"src", elements.logo2);
    insertImage(feedData[0].heroImage.Url,"src", elements.heroImage);
    insertImage(feedData[0].graphicImg1.Url,"src", elements.graphicImg1);
    insertImage(feedData[0].graphicImg2.Url,"src", elements.graphicImg2);
    elements['cta'].innerHTML = dynamicContent.DRAFT_Tremfya_PsA_Wave2_Addressable_2023_masterfeed[0].cta;
    elements['cp_code'].innerHTML = dynamicContent.DRAFT_Tremfya_PsA_Wave2_Addressable_2023_masterfeed[0].cp_code;
    elements['cp_code_hm'].innerHTML = dynamicContent.DRAFT_Tremfya_PsA_Wave2_Addressable_2023_masterfeed[0].cp_code;

    removepara(feedData[0].creativeVersion);
    console.log("customLabel: "+customLabel);
    logCustomVariable("Impression", customLabel);
    initclickTag(customLabel,exit);
    
/////======= End Testing Dynamic Templating Feed =======/////

    ///=== Dynamic File Loader ===///
    
    /**
     * The load files function is used to populate the container with the linked code from the feed
     * Conditions are inluded in the loadFiles function to check for the file type and load the appropriate file
    
    **/
    //loadFiles(JSfile);
    
    //Set Additional Version Specific Styles as needed
    /*

    **Example**

    let bodyClass = "bodyClass"; //Set the body class to feed value here
    let CSSClass = "CSSClass"; //Set the body class to feed value here

    setStyleClasses(bodyClass,CSSClass); // Run function to add classes to body and all div elements
    
    */
    //let bodyCSS = feedData[0].bodyClass; //Set the body class to feed value here
    //let elemCSS = feedData[0].CSSclass; //Set the body class to feed value here
    //console.log(bodyCSS,elemCSS);
    //setStyleClasses(bodyCSS,elemCSS); // Run function to add classes to body and all div elements
    ///=== END Dynamic File Loader ===///

}


function initclickTag(label,url){

    //Set the Exit Event to it can be automatically detected by Studio when upoading your files
    
    console.log('InitClickTag Function Fired');
    
    //Create Click Elements
    // clickArray =  document.body;
    // console.log(clickArray);
    //Add event listeners to click elements
    
    // clickArray.addEventListener("click", function () {
    //     Enabler.exitOverride("Background Exit", url);
    // });

    /// INSTEAD OF ADDING AN EVENT LISTENER ON THE BODY, ADD ONE TO THE WRAPPER
    /// THE WRAPPER HAS A Z-INDEX OF 5 WHILE THE ISI LINKS HAVE A Z-INDEX OF 10 
    /// CODE STARTS HERE
    clickThrough = document.getElementById('click_through');
    
    clickThrough.onclick = function () {
        logCustomVariable("Click", label);
        Enabler.exitOverride('Background Exit', url);
    };
    /// CODE ENDS HERE
}

function loadbanner(){
    /**
     * Load Banner is called in the index.html file after this js file is loaded to ensure all functions are loaded
     * Code will wait for the window to load and enabler to be initialized before calling the init function
    */

    // Check if the enabler is already initialized
    if (Enabler.isInitialized()) {
        // Enabler is already initialized, load the banner
        init();
    } else {
        // Enabler is not initialized yet, add an event listener for the INIT event
        Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
    }




}
function dynamicBuilder(){
    /**
     * Dynamic Builder is called in the index.html file after this js file is loaded to ensure all functions are loaded
     * Code will wait for the window to load and enabler to be initialized before calling to building the banner
    */
    
    /*


    /* 
     * Encorporating weather creative: 
     * - To limit calls to the API you can create additional conditionals to only load at specific times
     * - For example, only load weather data if the feed data is available
     * --- Option 1: A specific trigger in the feed can be created to trigger the weather data to load
     *     Example:
     *      if(dynamicContent.DynamicFeedTemplates_FullDynamicMasterFeed[0].CheckWeather == "True"){//do something}
     
     * --- Option 2: A specific time/day or combination of days can be set to load the weather data
     *     
     *     Example: 
     *      var day = new Date().getDay();
     *      if(day == 1 || day == 3 || day == 5){ //Load weather data on Monday, Wednesday, Friday then do something}
     * 
     *     var hour = new Date().getHours();
     *      if(hour > 12 || hour < 20){ //Load weather data at between 12 and 20(8pm) then do something}
     
     * --- Option 3: First you can check if the row contains weather content. Rows will contain content for specific weather assets.
     *     Example: 
     *      if(dynamicContent.DynamicFeedTemplates_FullDynamicMasterFeed[0].frame1CopyWeatherSunny != ""){//do something}
  
    */

    //  Hypothetical Weather Data Feed Column   //
    //      let LoadData = dynamicContent.DynamicFeedTemplates_FullDynamicMasterFeed[0].CheckWeather;

    let feeds = createDynamicContentDictionary();
    let element = setDynamicVariables();
    let LoadData = feeds[0].CheckWeather; //Use columns from feed to determine when to load a specific build template
    let triggerCheck = feeds[0].triggerCheck;
    var hour = new Date().getHours();



    // console.log("Hour: " + hour);

if(triggerCheck == true || triggerCheck== "TRUE")
{
    if(hour >= 12 && hour < 14 )
    {
        console.log("Afetrnoon Time");
        BuildAfterNoonTemplate(feeds,element);
    }
    else
    { 
        BuildTemplate(feeds,element);
        console.log("Not a Afternoon time")

    }

}
else
{
    BuildTemplate(feeds,element);
}

   



    initAnimation(feeds,element); //If linking JS files, all animtaion functions should be labeled initAnimation()
}
function init(){
    /**
     * Once the Enabler is initialized it will call the dynamic builder function          
     * The init function checks to see if the Enabler is initialized and if so calls the dynamic builder function
     * If the Enabler is not initialized it will add an event listener to wait for the Enabler to be initialized
    **/
    console.log('Init Function Called');
    
    dynamicBuilder();



}

// ============ BEGIN ANIMATION FUNCTIONS ============ //


/** If you want to handle different animation templates using separate JS files use the load files function make sure
 * the function is called or the animation runs on it own
 * 
 * If you have more than 3 animation variations use linked animations with the functions included
 * 
 * Example: 
 * loadFiles(JSFile); //this will insert the script code at the end of the body tag
 * 
 * Otherwise you can insert the initAnimation Function Directly into the logic.js file
*/

function initAnimation(feedData,elements){
    /* ANIMATION CODE INCLUDED IN INIT ANIMATION FUNCTION
    
        *The below is what your linked JS function will look like
        *If there less than two animation variations you can include the code directly here
    */  
    
        let animStyle = feedData[0].animationStyle; //Set the animation style to feed value here
        let size = document.getElementsByTagName("title")[0].innerHTML; //Get size from the title tag
    
        console.log('Start Animation');
        timeline = new TimelineMax({ delay: 0, onComplete: function() { console.log("Animation Complete");console.log("Duration: "+ this.totalDuration() + "s");} });
    
        // ================= Build animation timeline here ================= 
        /** Set Initial State - Start with all elements hidden
         * You can either reference the classes or the elements dictionary directly
         * 
         * Example[Direct ID/Class Call]:
         * ...#frame_1_copy...
         * 
         * Example[Dictionary Reference from elements]
         * ...elements['frame1_copy']....
         * 
         * First make sure you're container or wrapper element is set to display none
         * ---This will prevent the elements from flashing before the animation starts---
         * 
         * Start your animation code with setting the wrapper to display block and then continue to add additional settings
        **/
    
        /* Wrap animation settings in conditionals to handle different animation styles (using the values passed in from the feed) 
    
        ** If you have more than 3 animation variations use linked animations with the functions included
        
        Example: 
        if(animStyle == "Animation 1"){ //add animation here }else if(animStyle == "Animation 2"){ //add another animation here }else{ ////add another animation here }
        
        You can create your own variables to track sizes and positions of elements to manage all sizes in one place
    
        Set Conditionals to create different animation settings based on the shell size and animation style
            Example: if(size == "300x250" && animStyle == "Animation 1"){ //set positining/style varibales }
    
        */
    
       //Initial Style for wrapper and main container elements should be set to display none initially.
        //TweenMax.set(['#wrapper'],{ display: 'block' }); //Reveal the banner wrapper
        TweenMax.set([//Additional animation initial setttings
            "#frame1", // elements['frame1_copy'] 
            "#graphicsWrap",
            "#logo",
            '#logo2',
            '#frame4',
            '#cta', 
            '#isi-container-hm',
            '#isi_links_hm',
           
        ],{ alpha: 0 });

        if (feedData[0].Person == "HM") {
            TweenMax.set(['#isi-container-hm',],{ alpha: 1 });
            TweenMax.set(['#isi-container',],{ alpha: 0 });
            TweenMax.set(['#isi_links_hm',],{ alpha: 1 });
            TweenMax.set(['#isi_links',],{ alpha: 0 });
        }

        if (feedData[0].Person == "HM") {
            timeline.add([
                //Load
                TweenMax.to('#wrapper',     .005,   { alpha: 1, ease: Cubic.easeInOut }),
                TweenMax.to('#logo',        0,      { alpha: 1, ease: Cubic.easeInOut }),
                TweenMax.to('#heroImage',   0,      { alpha: 1, ease: Cubic.easeInOut }),
                TweenMax.to('#frame1',      0.5,    { alpha: 1, ease: Cubic.easeInOut }),
                TweenMax.to('#graphicsWrap',0.5,    { alpha: 1, ease: Cubic.easeInOut }),
                TweenMax.to('#frame5',      0.5,    { delay: 1, /*y: "+=80",*/ ease: Cubic.easeInOut }),
                
                // //Frame 1 
                TweenMax.to('#second-fold', 1,      { delay: 5, height:300, ease: Cubic.easeInOut }),
                TweenMax.to('#logo2',       0.5,    { delay: 5.5, alpha: 1, ease: Cubic.easeInOut }),
                TweenMax.to('#graphicImg1', 12,     { delay: 5.5, rotate:-35, ease: Cubic.easeInOut }), 
                TweenMax.to('#graphicImg1', 1,      { delay: 6.1, right:-199, alpha: 1,  ease: Cubic.easeInOut }),
                TweenMax.to('#logo',        0.5,    { delay: 6, alpha: 0, ease: Cubic.easeInOut }),
                TweenMax.to('#heroImage',   0.8,    { delay: 7, alpha: 0, ease: Cubic.easeInOut }), 
                TweenMax.to('#frame1',      0.5,    { delay: 7, alpha: 0, ease: Cubic.easeInOut }), 
                TweenMax.to('#first-fold',  1,      { delay: 7, height:'69%', zIndex:2, ease: Cubic.easeInOut }), 
                TweenMax.to('#frame2',      1,      { delay: 7.5, alpha: 1, height:123, ease: Cubic.easeInOut }),
                
                //Frame 2
                TweenMax.to('#frame2',      0.5,    { delay: 10.5, alpha: 0, ease: Cubic.easeInOut }),
                TweenMax.to('#second-fold', 1,      { delay: 11, alpha: 0, height:450, ease: Cubic.easeInOut }), 

                //Frame 3
                TweenMax.to('#frame3',      0.5,    { delay: 11.5, alpha: 1, ease: Cubic.easeInOut }),
                TweenMax.to('#frame3',      1,      { delay: 16.5, alpha: 0, ease: Cubic.easeInOut }),
        
                // //Frame 4
                TweenMax.to('#frame4',      1,      { delay: 17 , alpha: 1, ease: Cubic.easeInOut }), 
                TweenMax.to('#frame4',      1,      { delay: 22, alpha: 0, ease: Cubic.easeInOut }),
        
                //Frame 5
                TweenMax.to('#graphicImg1', 1,      { delay: 23,   scale:1.8, right:400, ease: Cubic.easeInOut }), 
                TweenMax.to('#logo2',       0.5,    { delay: 23,   alpha: 0, ease: Cubic.easeInOut }),
                TweenMax.to('#logo',        0.5,    { delay: 23, alpha: 1, ease: Cubic.easeInOut }),
                TweenMax.to('#heroImage',   0.8,    { delay: 23.5, alpha: 1, zIndex:2, ease: Cubic.easeInOut }),
                TweenMax.to('#graphicImg2', 1,      { delay: 24.0, alpha: 1, bottom:-125, ease: Cubic.easeInOut }), 
                TweenMax.to('#frame5',      0.5,    { delay: 24.5, alpha: 1, ease: Cubic.easeInOut }), 
                 //Cta 
                TweenMax.to('#cta',         0.5,    { delay: 24.5, alpha: 1,  ease: Cubic.easeInOut }),  
                
            ]);
            //console.log('Animation Complete');
        } else {

            timeline.add([
           
                TweenMax.to('#wrapper', .005, { alpha: 1, ease: Cubic.easeInOut }),
                TweenMax.to('#logo', .0, { alpha: 1, ease: Cubic.easeInOut }),
                TweenMax.to('#logo', .5, { delay: 3, alpha: 0, ease: Cubic.easeInOut }),
                TweenMax.to('#logo', .5, { delay: 17.2, alpha: 1, ease: Cubic.easeInOut }), // 13.2
                TweenMax.to('#logo2', .5, { delay: 2.3, alpha: 1, ease: Cubic.easeInOut }),
                TweenMax.to('#logo2', 0.5, { delay: 17, alpha: 0, ease: Cubic.easeInOut }), // 13
                //Hero  Image
                //TweenMax.to('#heroImage', .0, { alpha: 1, ease: Cubic.easeInOut }),
                TweenMax.to('#heroImage', 0.8, { alpha: 0, delay: 4, ease: Cubic.easeInOut }),
                TweenMax.to('#heroImage', 0.8, { alpha: 1, delay: 17.5, zIndex:2, ease: Cubic.easeInOut }), // 13.5
                 //Frame 1
                TweenMax.to('#frame1', .5, { alpha: 1, ease: Cubic.easeInOut }),
                TweenMax.to('#frame1', 0.5, { delay: 3, alpha: 0, ease: Cubic.easeInOut }),
                TweenMax.to('#graphicsWrap', .5, { alpha: 1, ease: Cubic.easeInOut }),
                //TweenMax.to('#curveBox', 2, { alpha: 1, delay: 2, bottom:-10, ease: Cubic.easeInOut }),
                
                //First Fold
                TweenMax.to('#second-fold', 1, { delay: 2, height:300, ease: Cubic.easeInOut }),
            
                TweenMax.to('#first-fold', 1, { delay: 3, height:'69%', zIndex:2, ease: Cubic.easeInOut }),
                TweenMax.to('#second-fold', 1, { delay: 5.5, alpha: 0, height:450, ease: Cubic.easeInOut }),
                
                //Frame 2
                TweenMax.to('#frame2', 1, { delay: 2.5, alpha: 1, height:123, ease: Cubic.easeInOut }),
                TweenMax.to('#frame2', 0.5, { delay: 4.5, alpha: 0, ease: Cubic.easeInOut }),
        
                //System  graphics
                TweenMax.to('#graphicImg1', 1, { delay: 3.1, right:-199, alpha: 1,  ease: Cubic.easeInOut }),
                TweenMax.to('#graphicImg1', 12, { delay: 2.5, rotate:-35, ease: Cubic.easeInOut }),
                //TweenMax.to('#graphicImg1', 1.5, { delay: 8, rotate:-33, ease: Cubic.easeInOut }),
    
                TweenMax.to('#graphicImg1', 1, { delay: 17, scale:1.8, right:400, ease: Cubic.easeInOut }), // 13
               
                TweenMax.to('#graphicImg2', 1, { delay: 17.8, alpha: 1, bottom:-125, ease: Cubic.easeInOut }), // 13.8
               // TweenMax.to('#graphicImg2', 1, { delay: 12.1, scale:1, rotate:134, left:-22,  bottom:-125, ease: Cubic.easeInOut }),
    
        
                //Frame 3
                TweenMax.to('#frame3', 0.5, { alpha: 1, delay: 6, ease: Cubic.easeInOut }),
                TweenMax.to('#frame3', 1, { alpha: 0, delay: 10.7, ease: Cubic.easeInOut }), // 8.7
        
                //Frame 4
                TweenMax.to('#frame4', 1, { alpha: 1, delay: 11, ease: Cubic.easeInOut }), // 9
                TweenMax.to('#frame4', 1, { alpha: 0, delay: 16.6, ease: Cubic.easeInOut }), // 12.6
        
                //Frame 5
                TweenMax.to('#frame5', 0.5, { delay: 1, /*y: "+=80",*/ ease: Cubic.easeInOut }),
                TweenMax.to('#frame5', 0.5, { alpha: 1, delay: 18.5, /*y: "-=80",*/ ease: Cubic.easeInOut }), // 14.5
        
                 //Cta
                TweenMax.to('#cta', 0.5, { delay: 1, /*y: "+=80",*/ ease: Cubic.easeInOut }),
                 TweenMax.to('#cta', 0.5, { alpha: 1, delay: 18.5, /*y: "-=80",*/ ease: Cubic.easeInOut }), // 14.5
            
                
               
                
            ]);
            //console.log('Animation Complete');

        }
        
    
    
        timeline.play();
    }




// ============ END ANIMATION FUNCTIONS ============ //

