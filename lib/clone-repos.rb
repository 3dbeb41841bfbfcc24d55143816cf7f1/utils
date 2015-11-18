require "json";
JSON.load(STDIN.read).each do |repo|
  puts "cloning repo #{repo['clone_url']}"
  %x[git clone #{repo["clone_url"]}]
end
