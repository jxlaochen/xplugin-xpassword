module.exports = function(grunt) {
	grunt.initConfig({
        watch : {
            options: {
                livereload: 35729 // this port must be same with the connect livereload port
            },
            scripts: {
                options: {
                    livereload: true
                },
                tasks:['concat','copy','uglify','cssmin'],
　　　　　　　　　　//所有文件发生改变都执行自动reload
                files : ['**/*']
            }
        },
		concat : {
			options : {},
			background:{
				src:[
					"js/core.js",
					"js/context-menu.js",
					"js/background.js"
				],
				dest : './temp/js/background.js'
			},
			dist : {
				src : [
				    "js/jquery.min.js",
					"js/core.js",
					"js/context-menu.js",
					"js/md5.js",
					"js/content.js"
			    ],
				dest : './temp/js/content.js'
			},
			popup : {
				src : [
				    "js/jquery.min.js",
					"js/jquery.qrcode.min.js",
					"js/core.js",
					"js/md5.js",
					"js/popup.js"
			    ],
				dest : './temp/js/popup.js'
			}
		},
		copy : {
			main:{
				files:[{
					expand : true,
					src : 'icon**',
					dest : './build/',
				},{
					expand : true,
					src : 'images/*',
					dest : './build/',
				},{
					expand : false,
					src : 'manifest.json',
					dest : './build/manifest.json',
				},{
					expand : false,
					src : 'popup.html',
					dest : './build/popup.html',
				},{
					expand : false,
					src : 'options.html',
					dest : './build/options.html',
				},{
					expand : false,
					src : 'help.html',
					dest : './build/help.html',
				}]
			}
		},
		uglify: {  
			background: {  
		        src: './temp/js/background.js',
		        dest: './build/js/background.min.js'
		     },
			 content: {  
		        src: './temp/js/content.js',
		        dest: './build/js/content.min.js'
		     },
			 popup: {  
		        src: './temp/js/popup.js',
		        dest: './build/js/popup.min.js'
		     }
		},
		cssmin:{
			 popup: {  
		        src: './css/black.css',
		        dest: './build/css/black.min.css'
		     }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin'); 
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('default', ['concat','copy','uglify','cssmin' ]);
}