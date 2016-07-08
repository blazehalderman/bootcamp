@my_Cars = []

car1 = {make: "porsche", model: "918 spyder", color: "red"}
car2 = {make: "mcclarren", model: "f1", color: "yellow"}
car3 =  {make: "aston martin", model: "vulcan", color: "blue"}
car4 = {make: "ford", model: "fiesta", color: "orange"}
car5 = {make: "subaru", model: "outback", color: "green"}

@my_Cars.push(car1, car2, car3, car4, car5)

def car_letter_exists
  @my_Cars.select {|car| (car[:make].include? 'i') || (car[:make].include? 'a') ||  (car[:make].include? 'e')}
end


array = []

def car_array_string
  if car_letter_exists
  @my_Cars.map {|car| car[:make] + ', ' + car[:model] + ', ' + car[:color]}
  end
end

array << car_array_string

puts array.join(' | ')
