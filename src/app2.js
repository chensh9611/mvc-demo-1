import './app2.css'
import $ from "jquery"
const $tab_bar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
$tab_bar.on('click','li', (e) =>{
    const $li = $(e.currentTarget)
    $li
        .addClass('selected')
        .siblings().removeClass('selected')
    const index = $li.index()
    console.log(index)
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
});
$tab_bar.children().eq(0).trigger('click')