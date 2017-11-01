import math

def circle_sector_area(perimeter, angle):
    radius = perimeter / float(2 + angle)
    return angle * radius**2 / 2

def pipeline_placement(point):
    town_a = math.sqrt(400 + point**2)
    town_b = math.sqrt(900 + (100-point)**2)
    return town_a + town_b
