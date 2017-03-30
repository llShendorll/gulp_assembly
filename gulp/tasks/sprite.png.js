'use strict';

module.exports = function () {
    $.gulp.task('sprite:png', function () {
        var spriteData = $.gulp.src('./source/sprite/*.png')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
                imgPath: '../img/sprite.png',
                padding: 20,
                algorithm: 'binary-tree'
            }));

        var imgStream = spriteData.img
            .pipe($.gulp.dest($.config.root + '/assets/img'));

        var cssStream = spriteData.css
            .pipe($.gulp.dest($.config.root + '/assets/css'));

        return ($.merge(imgStream, cssStream));
    })
};