<?php
header('Content-Type: application/json');

$botToken = "7184174569:AAEXDmu8c4Hn58DGKUWN6EuYk-ZlhiLXRkg";

function sendMessage($chat_id, $message) {
    global $botToken;
    $data = [
        'chat_id' => $chat_id,
        'text' => $message,
    ];
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.telegram.org/bot" . $botToken . "/sendMessage");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $repair_location = filter_input(INPUT_POST, 'repair_location', FILTER_SANITIZE_STRING);
    $square_meters = filter_input(INPUT_POST, 'square_meters', FILTER_SANITIZE_STRING);
    $start_time = filter_input(INPUT_POST, 'start_time', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    if ($name && $phone && $repair_location && $square_meters) {
        $chat_id = "1303621741";
        $text = "Имя: $name\nТелефон: $phone\nМесто ремонта: $repair_location\nКвадратура: $square_meters\nНачало ремонта: $start_time\nСообщение: $message";
        $result = sendMessage($chat_id, $text);
        echo $result ? json_encode(['status' => 'success']) : json_encode(['status' => 'error']);
    } else {
        echo json_encode(['status' => 'error']);
    }
} else {
    echo json_encode(['status' => 'error']);
}
?>
