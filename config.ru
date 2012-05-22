//use Rack::Static, :urls => ["/images"], :root => "public"
//run lambda { |env| [200, { 'Content-Type' => 'text/html', 'Cache-Control' =>
//'public, max-age=86400' }, File.open('public/index.html', File::RDONLY)] }

// apparently this will find and serve everything, not sure i want to do that
use Rack::Static, :urls => [/./], :root => “public”
