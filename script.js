$(document).ready(() => {
    let content = '';
    //=========================================================================
    content += '<h2></h2>';
    for (let i = 1; i <= 7; i++) {
        content += MangalamBhagwan['verse' + i].replaceAll('\n', '</br>');
    }
    content += '</br>'.repeat(4);
    //=========================================================================
    content += '<h2>श्री गणेश बन्दना</h2>';
    content += GaneshBandana.verse1.replaceAll('\n', '</br>');
    content += GaneshBandana.verse2.replaceAll('\n', '</br>');
    content += GaneshBandana.verse1.slice(0, 13).replaceAll('\n', '</br>') + '.'.repeat(10) + '</br>';
    content += GaneshBandana.verse3.replaceAll('\n', '</br>');
    content += GaneshBandana.verse1.slice(0, 13).replaceAll('\n', '</br>') + '.'.repeat(10) + '</br>';
    content += GaneshBandana.verse4.replaceAll('\n', '</br>');
    content += GaneshBandana.verse1.slice(0, 13).replaceAll('\n', '</br>') + '.'.repeat(10) + '</br>';
    content += GaneshBandana.verse5.replaceAll('\n', '</br>');
    content += GaneshBandana.verse1.slice(0, 13).replaceAll('\n', '</br>') + '.'.repeat(10) + '</br>';
    content += '</br>'.repeat(4);
    //=========================================================================
    content += '<h2>श्री जयदेवकृत गीत गोविन्द </h2>';
    content += Govinda['verse1'].replaceAll('\n', '</br>');
    content += Govinda['verse2'].replaceAll('\n', '</br>');
    for (let i = 3; i <= 10; i++) {
        content += Govinda['verse' + i].replaceAll('\n', '</br>');
        content += Govinda['verse2'].replaceAll('\n', '</br>');
    }
    content += Govinda['verse1'].replaceAll('\n', '</br>');
    content += Govinda['verse2'].replaceAll('\n', '</br>');
    content += '</br>'.repeat(4);
    //=========================================================================
    content += '<h2>आदिनाथ शिव बन्दना</h2>';
    content += Aadinath.verse1.replaceAll('\n', '</br>');
    content += Aadinath.verse2.replaceAll('\n', '</br>');
    content += Aadinath.verse3.replaceAll('\n', '</br>');
    content += Aadinath.verse4.replaceAll('\n', '</br>');
    content += Aadinath.verse1.slice(0, 8).replaceAll('\n', '</br>') + '.'.repeat(10) + '</br>';
    content += Aadinath.verse5.replaceAll('\n', '</br>');
    content += Aadinath.verse6.replaceAll('\n', '</br>');
    content += Aadinath.verse1.slice(0, 8).replaceAll('\n', '</br>') + '.'.repeat(10) + '</br>';
    content += Aadinath.verse7.replaceAll('\n', '</br>');
    content += Aadinath.verse8.replaceAll('\n', '</br>');
    content += Aadinath.verse1.slice(0, 8).replaceAll('\n', '</br>') + '.'.repeat(10) + '</br>';
    content += '</br>'.repeat(4);
    //=========================================================================
    content += '<h2>काली बन्दना</h2>';
    for (let i = 1; i <= 14; i++) {
        content += KaliBandana['verse' + i].replaceAll('\n', '</br>');
    }
    content += '</br>'.repeat(4);
    //=========================================================================
    content += '<h2>माधव स्तुती</h2>';
    content += Madhav.verse1.replaceAll('\n', '</br>') + '</br>';
    content += Madhav.verse2.slice(1).replaceAll('\n', ' - ३</br>');
    content += Madhav.verse1.replaceAll('\n', '</br>');
    content += Madhav.verse2.replaceAll('\n', '</br>');
    content += Madhav.verse3.replaceAll('\n', '</br>');
    content += Madhav.verse4.replaceAll('\n', '</br>');
    content += Madhav.verse1.replaceAll('\n', '</br>');
    content += Madhav.verse2.replaceAll('\n', '</br>');
    content += Madhav.verse3.replaceAll('\n', '</br>');
    content += Madhav.verse4.replaceAll('\n', '</br>');
    content += Madhav.verse1.replaceAll('\n', '</br>');
    content += Madhav.verse2.replaceAll('\n', '</br>');
    content += '</br>'.repeat(4);
    //=========================================================================
    content += '<h2>सरस्वती माताको स्तुती</h2>';
    content += Saraswatimata.verse1.replaceAll('\n', '</br>');
    content += Saraswatimata.verse1.slice(0, 8).replaceAll('\n', '</br>') + '.'.repeat(10) + '</br>';
    content += Saraswatimata.verse2.replaceAll('\n', '</br>');
    content += Saraswatimata.verse1.slice(0, 8).replaceAll('\n', '</br>') + '.'.repeat(10) + '</br>';
    content += Saraswatimata.verse3.replaceAll('\n', '</br>');
    content += Saraswatimata.verse1.slice(0, 8).replaceAll('\n', '</br>') + '.'.repeat(10) + '</br>';
    content += '</br>'.repeat(4);
    //=========================================================================
    content += '<h2>ब्रम्हाकृत शिव स्तुती</h2>';
    for (let i = 1; i <= 16; i++) {
        content += Rudrashtakam['verse' + i].replaceAll('\n', '</br>');
    }
    content += Rudrashtakam.verse1.replaceAll('\n', '</br>');
    content += Rudrashtakam.verse1.slice(0, 25).replaceAll('\n', '</br>') + '</br>';
    content += Rudrashtakam.verse17.replaceAll('\n', '</br>');
    content += '</br>'.repeat(4);
    //=========================================================================
    content += '<h2>दोहा</h2>';
    for (let i = 1; i <= 4; i++) {
        content += Doha['verse' + i].replaceAll('\n', '</br>');
    }
    content += '</br>'.repeat(4);
    //=========================================================================
    content += '<h2>श्री रामायणजीको आरती</h2>';
    for (let i = 1; i <= 5; i++) {
        content += Ramayan['verse' + i].replaceAll('\n', '</br>');
        if (i != 5) content += Ramayan.verse1.slice(0, 24).replaceAll('\n', '</br>') + '</br>';
    }
    content += '</br>' + Ramayan.verse1.slice(1, 5) + '....., ' + Ramayan.verse5.slice(1, 6) + '....</br>';
    content += Ramayan.verse1.replaceAll('\n', '</br>');
    content += Ramayan.verse1.slice(0, 24).replaceAll('\n', '</br>') + '</br>';
    content += '</br>'.repeat(4);
    //=========================================================================
    content += '<h2>तुलसीकृत रामायण</h2>';
    // content += '<h4>लव - कुशकाण्ड</h2>';

    for (let i = 1; i <= 12; i++) {
        content += Tulsikrit['verse' + i].replaceAll('\n', '</br>');
    }
    content += Tulsikrit.verse1.replaceAll('\n', '</br>');
    content += Tulsikrit.verse1.slice(0, 15).replaceAll('\n', '</br>') + '</br>';
    content += Tulsikrit.verse13.replaceAll('\n', '</br>');
    content += '</br>'.repeat(2);
    //=========================================================================
    content += `<h2>${HariSaranam.verse1.replaceAll('\n', '</br>')}</h2>`;
    $('#root').html(content);
});