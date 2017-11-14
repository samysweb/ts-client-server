// For installation run:
// npm install
// npm link typescript

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		ts: {
			client: {
				options: {
					rootDir : "src/",
					module: "amd",
					sourceRoot: "src/"	
				},
				src: ["src/commons/**/*.ts","src/client/**/*.ts"],
				outDir: "build/js"
			},
			server: {
				options: {
					rootDir : "src/",
					sourceRoot: "src/"
				},
				rootDir : "./",
				src: ["src/commons/**/*.ts", "src/server/**/*.ts"],
				outDir: "build/js"
			}
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: 'build/js',
					optimize: "uglify",
					include: [ 'client/main' ],
					generateSourceMaps: true,
					out: 'client/js/main.js',
					
				}
			}
		},
		clean: {
			client: {
				src: ["build/js/commons/**/*","build/js/client/**/*"]
			},
			server: {
				src: ["build/js/commons/**/*", "build/js/server/**/*"]
			}
		}
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	
	// Default task(s).
	grunt.registerTask('client', ['clean:client','ts:client','requirejs:compile']);

};