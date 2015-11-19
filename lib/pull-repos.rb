directory = '.'

Dir.entries(directory).select do |file|
  if File.directory? file and !(file =~ /\.(.*)/)
    puts "pulling repo #{file}"
    Dir.chdir file
    %x[git pull]
    Dir.chdir ".."
  end
end
