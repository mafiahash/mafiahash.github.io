<?php
header('Content-Type: application/json');

// Замените YOUR_BOT_TOKEN на токен вашего бота
$botToken = "6223942378:AAFVaYsEdmIkJqUb8P0acVQ1LSCyQLS15Rw";

function sendMessage($chat_id, $message) {
    global $botToken;
    $url = "https://api.telegram.org/bot" . $botToken . "/sendMessage?chat_id=" . $chat_id;
    $url = $url . "&text=" . urlencode($message);
    $ch = curl_init();
    $optArray = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true
    );
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $city = $_POST["city"];
    $phone = $_POST["phone"];

    // Замените CHAT_ID на ID чата, куда хотите отправить сообщение
    $chat_id = "-989662305";

    $text = "Имя: " . $name . "\nГород: " . $city . "\nНомер телефона: " . $phone;
    $result = sendMessage($chat_id, $text);

    if ($result) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error']);
    }
} else {
    echo json_encode(['status' => 'error']);
}
