#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>

//Node-MCU 1.0 보드 깔린 상태 + 기본라이브러리 WIFI.h 폴더 제거한 상태에서 사용가능


int a = 0;
int hid = 0, level = 0;
void setup() {
 
  Serial.begin(115200);                                  //Serial connection
  WiFi.begin("202g", "dkxm202gh");   //WiFi connection
 
  while (WiFi.status() != WL_CONNECTED) {  //Wait for the WiFI connection completion
 
    delay(500);
    Serial.println("Waiting for connection");
 
  }
 
}

void loop() {
  if(!Sendrequest(hid, level))
    Serial.println("Message is sent");
   else
    Serial.println("Error Occured");
   delay(30);
}

int Sendrequest(int hid, int level) {
  if(WiFi.status()== WL_CONNECTED){   //Check WiFi connection status
 
   HTTPClient http;
 
   http.begin("http://test.ooolab.xyz:4000/api/test");      //요청 url
   http.addHeader("Content-Type", "application/json");  // 컨텐트 타입 헤더
   String message1 = "{";
   message1.concat("\"hid\":\"");
   message1.concat(String(hid));
   message1.concat("\",");
   message1.concat("\"level\":\"");
   message1.concat(String(level));
   message1.concat("\"\r\n}");
   int httpCode = http.POST(message1);   //Send the request
                                                      //String payload = http.getString(); // 응답메시지 받는 코드. 필요시 주석해제
   if(httpCode != 200) {
    Serial.print("Error in Sending Occured!! (Error Code :");
    Serial.print(httpCode);
    Serial.println(")");
   }
   else
    Serial.println("Message is sent!");   //Print HTTP return code
   
   http.end();  //Close connection
 
 }else{
    Serial.println("Error in WiFi connection");   
 }
 return 0;
}
