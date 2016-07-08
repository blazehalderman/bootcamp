myCars = [
 {make: "Porsche", model: "918 Spyder", color: "Red"},
 {make: "Ferrari", model: "458", color: "Green"},
 {make: "Lamborghini", model: "Veneno", color: "Orange"},
 {make: "Aston Martin", model: "Vulcan", color: "Blue"},
 {make: "Ford", model: "Fiesta", color: "Purple"}
]

 for car in myCars
   if car[:color] == 'Red'
   puts car
   end
 end

 for car in myCars
   if car[:make].index('i')
     puts car[:make]
   end
 end

for car in myCars
  puts "#{car[:make]} #{car[:model]}"
end

 for car in myCars
   puts car[:make] + " " + car[:model]
 end

 
