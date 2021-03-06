"use strict";

// DropZone Options
const dropZone_Options = {
	paramName: "file", // The name that will be used to transfer the file
	maxFilesize: 2, // MB
	dictDefaultMessage: "Drop HERE",
	maxFiles: 1,
	accept: function(file, done) {
		done();
	}
};

// DropZone config
Dropzone.options.libdropzone = dropZone_Options;

// Create dropzones programmatically
function createDropZone(id) {
	$('div#' + id).dropzone({
		url: "/file-upload"
	});
}
