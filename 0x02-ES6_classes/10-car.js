export default class Car
    def __init__(self, brand, motor, color):
        self._brand = brand
        self._motor = motor
        self._color = color

    def cloneCar(self):
        return Car(self._brand, self._motor, self._color)
