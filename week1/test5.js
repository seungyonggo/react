// 5. 심화문제 (선택).
// 심화 문제의 올바른 풀이를 위해서는 아직 배우지 않은 개념도 이해하고 있어야 합니다.. (클로저, this)
// 그러나 반드시 올바르게 문제를 풀이하지 않아도 괜찮으니 아래와 같은 기능을 구현해보세요.
// 올바른 풀이가 아닌 현재까지 배운 개념만으로도 기능 작동에는 문제가 없는 것을 확인하였습니다.
// 아래와 같은 기능을 하는 오브젝트를 반환하는 함수를 만드세요
// 파라미터로는 최종 목표지 까지와의 거리를 전달 받습니다.
// 함수 이름은 car입니다. car는 각각 시동걸기, 시동끄기, 주행 기능을 가지고 있습니다.
// 해당 자동차는 연식이 오래되어 최대 40km밖에 운전하지 못합니다.
// 40km 이상 주행하려고 한다면 안전 사고 위험이 있어 강제로 시동을 종료합니다.
// 주행거리까지 1km 단위로 상황판(콘솔)에 나타납니다. 최종 목표
// 1. 시동이 걸리면 시동이 걸렸다는 메시지가 콘솔에 로그됩니다.
// 2. 시동이 꺼지면 시동이 꺼졌다는 메시지가 콘솔에 로그됩니다.
// 3. 주행 중이면 최종 목표 거리까지 1km 단위로 콘솔에 거리가 로그됩니다.
// 4. 최종 목표거리에 도달하면 주행이 완료되었다는 메시지가 콘솔에 로그됩니다.
// 5. 최종 목표거리가 40km 이상인 상태에서 주행을 시도하면
//  안전 위험으로 시동을 종료했다는 메시지가 콘솔과 로그됨과 동시에 시동이 꺼집니다.
// 6. 시동이 걸리지 않으면 주행을 할 수 없습니다.
// 7. 시동이 걸려있는 상태에서 시동을 다시 걸 수 없습니다.
// 8. 시동이 꺼져있는 상태에서 시동을 다시 끌 수 없습니다.
// let isEngineRunning = false;
// let isIgnitionOn = false;
// let finalTargetDistance = 0;
// let currentDistance = 0;

// function start() {
//   console.log("The system has started up.");
//   isIgnitionOn = true;
// }

// function turnOff() {
//   console.log("The engine has been turned off.");
//   isEngineRunning = false;
// }

// function drive(distance) {
//   if (isEngineRunning) {
//     currentDistance += distance;
//     console.log(`${currentDistance} km driven.`);
//     if (currentDistance >= finalTargetDistance) {
//       console.log("Driving completed.");
//       turnOff();
//     }
//   } else {
//     console.log("Cannot drive without starting the engine.");
//   }
//   if (finalTargetDistance > 40 && currentDistance >= 40) {
//     console.log("Engine terminated due to safety hazard.");
//     turnOff();
//   }
// }

// function startEngine() {
//   if (!isEngineRunning) {
//     console.log("Engine started.");
//     isEngineRunning = true;
//   } else {
//     console.log("Cannot start engine while it is running.");
//   }
// }

// function turnOffIgnition() {
//   if (isIgnitionOn && !isEngineRunning) {
//     console.log("Ignition turned off.");
//     isIgnitionOn = false;
//   } else if (!isIgnitionOn) {
//     console.log("Ignition is already turned off.");
//   } else {
//     console.log("Cannot turn off ignition while engine is running.");
//   }
// }

// start(); // logs "The system has started up."
// startEngine(); // logs "Engine started."
// drive(10); // logs "10 km driven."
// drive(30); // logs "40 km driven." and "Driving completed."

// ------------소연님문풀
// function car(state, purpose) {
//   let drive = 0;
//   let engine = state === "on" ? true : false;
//   if (engine) {
//     console.log("시동걸림");
//     for (let i = 0; i < purpose; i++) {
//       drive += 1;
//       console.log(`${drive}km`);
//       if (drive >= 40) {
//         console.log("주행이 강제종료됩니다.");
//         engine = false;
//         break;
//       } else if (drive === purpose) {
//         console.log("주행이 완료되었습니다.");
//         break;
//       }
//     }
//   }

//   if (engine === false) {
//     console.log("시동꺼짐");
//   }

//   return engine;
// }

// console.log(car("on", 10));
