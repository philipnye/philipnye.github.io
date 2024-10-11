# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll-theme-chirpy", "~> 7.1", ">= 7.1.1"

gem "html-proofer", "~> 5.0", group: :test

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Replace problematic gem (0.1.1) (ref. https://github.com/jekyll/jekyll/issues/9660#issuecomment-2331271748)
gem "wdm", "~> 0.2", :platforms => [:mingw, :x64_mingw, :mswin]
