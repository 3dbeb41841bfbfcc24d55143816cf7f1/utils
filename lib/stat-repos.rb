directory = '.'

Dir.entries(directory).select do |file|
  if File.directory? file and !(file =~ /\.(.*)/)
    puts "getting git status for repo #{file}"
    Dir.chdir file
    %x[git status]
    Dir.chdir '..'
  end
end
