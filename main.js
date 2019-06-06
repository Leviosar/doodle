const Doodle = {}

Doodle.horizon = {
    primaryColor: 'rgb(25,25,25)',
    secondaryColor: 'rgb(50,50,50)',
    primaryFontColor: 'rgb(255,255,255)',
    primaryTitleColor: 'rgba(233,83,120)',    
    primaryBorder: '1px solid #e3e3e3',    
}

styleChange(document.querySelectorAll('a'), 'color', Doodle.horizon.primaryFontColor)
styleChange(document.querySelectorAll('span'), 'color', '#ccc')
styleChange(document.querySelectorAll('h1'), 'color', Doodle.horizon.primaryTitleColor)
styleChange(document.querySelectorAll('h2'), 'color', Doodle.horizon.primaryTitleColor)
styleChange(document.querySelectorAll('body'), 'background', Doodle.horizon.primaryColor)
styleChange(document.querySelectorAll('.block'), 'background', Doodle.horizon.secondaryColor)
styleChange(document.querySelectorAll('.block a'), 'color', Doodle.horizon.primaryFontColor)
styleChange(document.querySelectorAll('.block h2'), 'color', Doodle.horizon.primaryTitleColor)
styleChange(document.querySelectorAll('.block h2'), 'textShadow', 'none')
styleChange(document.querySelectorAll('.block h3'), 'color', Doodle.horizon.primaryTitleColor)
styleChange(document.querySelectorAll('.block h3'), 'textShadow', 'none')
styleChange(document.querySelectorAll('.node_category h3'), 'color', Doodle.horizon.primaryTitleColor)
styleChange(document.querySelectorAll('.node_category h3'), 'textShadow', 'none')
styleChange(document.querySelectorAll('.node_category a'), 'color', Doodle.horizon.primaryFontColor)
styleChange(document.querySelectorAll('dt'), 'color', Doodle.horizon.primaryFontColor)
styleChange(document.querySelectorAll('dd'), 'color', Doodle.horizon.primaryFontColor)
styleChange(document.querySelectorAll('.node_category a'), 'textShadow', 'none')
styleChange(document.querySelectorAll('input[type=submit]'), 'background', Doodle.horizon.secondaryColor)
styleChange(document.querySelectorAll('input[type=submit]'), 'color', Doodle.horizon.primaryFontColor)
styleChange(document.querySelectorAll('input[type=submit]'), 'border', Doodle.horizon.primaryBorder)
styleChange(document.querySelectorAll('input[type=submit]'), 'paddding', '10px')
styleChange(document.querySelectorAll('.semester_label'), 'color', Doodle.horizon.primaryTitleColor)
styleChange(document.querySelectorAll('.semester_label'), 'textShadow', 'none')
styleChange(document.querySelectorAll('.userpicture'), 'borderRadius', '10000vw')
styleChange(document.querySelectorAll('.page-context-header'), 'margin-top', '30px')
styleChange(document.querySelectorAll('.page-context-header'), 'margin-bottom', '30px')
styleChange(document.querySelectorAll('.breadcrumb'), 'background', Doodle.horizon.secondaryColor)
styleChange(document.querySelectorAll('.breadcrumb span'), 'color', Doodle.horizon.primaryFontColor)
styleChange(document.querySelectorAll('.navbar-inner'), 'background', Doodle.horizon.secondaryColor)
styleChange(document.querySelectorAll('.navbar-inner h2'), 'borderLeft', 'none')
styleChange(document.querySelectorAll('header .container-fluid .usermenu .moodle-actionmenu.show'), 'backgroundColor', 'transparent !important')


function styleChange(elementArray, property, value){
    if(elementArray.length !== undefined){
        for (const element of elementArray) {
            element.style[property] = value
        }
    }else{
        elementArray.style[property] = value
    }
}