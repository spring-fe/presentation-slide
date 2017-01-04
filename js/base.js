var compiled = {};
    // return compiled handlebar html
    $.handlebars = function(templateId, data) {
        if(!compiled.hasOwnProperty(templateId)){
            var template = $(templateId).html();
            compiled[templateId] = Handlebars.compile(template);
        }
        return compiled[templateId](data);
    };

    //fill the given element with compiled handlebar html
    $.fn.handlebars = function(templateId, data, func) {

        if(!compiled.hasOwnProperty(templateId)){
            var template = $(templateId).html();
            compiled[templateId] = Handlebars.compile(template);
        }
        var result = compiled[templateId](data);
        if(func && func == 'replace'){
            $(this).replaceWith(result);
        } else {
            if(func && func == 'append'){
                $(this).append(result);
            } else {
                if(func && func == 'prepend'){
                    $(this).prepend(result);
                } else {
                    $(this).html(result);
                }
            }
        }
    };