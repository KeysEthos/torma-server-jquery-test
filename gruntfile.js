module.exports = function(grunt) {

  grunt.initConfig({

	// JS TASKS ================================================================
	//     // check all js files for errors
	jshint: {
           all: ['public/src/js/**/*.js', 'public/src/js/*.js'] 
	},
	
	// take all the js files and minify them into app.min.js
	uglify: {
	   options: {
		mangle: {
			except: ['angular', 'angular-routes']
		},
		sourceMap: true,
		sourceMapIncludeSources: true
	   },
           build: {
              files: {
                 'public/dist/js/app.min.js': ['public/src/js/*.js', 'public/src/js/**/*.js']
              }
           }
         },

	// CSS TASKS ===============================================================
	//     // process the scss file to style.css
	sass: {
           build: {
              files: {
                 'public/dist/css/style.css': 'public/src/css/style.scss'
              }
           } 
         },

	// take the processed style.css file and minify
	cssmin: {
           build: {
              files: {
                 'public/dist/css/style.min.css': 'public/dist/css/style.css'
              }
            }
         },
	
	// IMG Minification =======================================================
	//     //takes images from src/img and loads in dist/img
	imagemin: {              
            png: {                        
              options: {                     
                 optimizationLevel: 7
               },
	    files: {
		    'public/dist/img/purple_hex_light.png' : ['public/src/img/purple_hex_light.png'],
		    'public/dist/img/purple_hex.png' : [ 'public/src/img/purple_hex.png' ]
               }
            }
	},
	  

	// COOL TASKS ==============================================================
	//     // watch css and js files and process the above tasks
	watch: {
          css: {
        	files: ['public/src/css/**/*.scss'],
        	tasks: ['sass', 'cssmin']
          },
          js: {
        	files: ['public/src/js/**/*.js'],
        	tasks: ['jshint', 'uglify']
      	  } 
    	},
	
	// configure nodemon
	   nodemon: { dev: { script: 'server.js'}},

	// run watch and nodemon at the same time
	concurrent: {
           options: {
        	logConcurrentOutput: true
      	   },
          tasks: ['nodemon', 'watch']
        }
  });
// Grunt Load Tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  
// register grunt tasks
  grunt.registerTask('default', ['nodemon', 'sass', 'cssmin', 'jshint', 'uglify', 'concurrent', 'imagemin']);  

	
};
