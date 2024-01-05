# Build the site
build:
	hugo

# Serve the site locally
serve:
	hugo server -D

# Clean the generated files
clean:
	rm -rf public