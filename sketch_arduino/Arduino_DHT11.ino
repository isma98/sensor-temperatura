#include <dht.h>
dht DHT;
#define DHT11_PIN 8

void setup(){
  Serial.begin(9600);
}

void loop()
{
  DHT.read11(DHT11_PIN);
  //Variables para medir temperatura y humedad
  float t = DHT.temperature;
  float h = DHT.humidity;
  
  //TEMPERATURA//
  Serial.print(t);
  Serial.println(" C");
  delay(2000);

}
