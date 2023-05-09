<?php
// Ваши данные для авторизации в amoCRM
$domain = 'avitoroom'; // поддомен вашего аккаунта amoCRM
$user_email = 'avitoroom@list.ru'; // ваш email, используемый в amoCRM
$api_key = 'd78a6a23919f87fade83b191e4873003e9001b71'; // API ключ

// Данные заявки с вашего сайта
$name = $_POST['name'];
$city = $_POST['city'];
$phone = $_POST['phone'];

// Авторизация
$url = 'https://' . $domain . '.amocrm.ru/private/api/auth.php?type=json';
$headers = [
    'Content-Type: application/json'
];
$data = [
    'USER_LOGIN' => $user_email,
    'USER_HASH' => $api_key
];

$curl = curl_init();
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_USERAGENT, 'amoCRM-API-client/1.0');
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_COOKIEFILE, dirname(__FILE__) . '/cookie.txt');
curl_setopt($curl, CURLOPT_COOKIEJAR, dirname(__FILE__) . '/cookie.txt');
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);

$response = curl_exec($curl);
$code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

$responseData = json_decode($response, true);

if ($code != 200 || !$responseData['response']['auth']) {
    echo json_encode(['success' => false, 'error' => 'Ошибка авторизации в amoCRM.']);
    exit;
}

// Создание контакта
$url = 'https://' . $domain . '.amocrm.ru/api/v2/contacts';
$contact = [
    'name' => $name,
    'custom_fields' => [
        [
            'id' => 932139, // ID поля с номером телефона в amoCRM
            'values' => [
                [
                    'value' => $phone,
                    'enum' => 'MOB'
                ]
            ]
        ]
    ]
];

$customFields = [];
if ($city) {
    $customFields[] = [
        'id' => 932137, // ID поля с городом в amoCRM
        'values' => [
            [
                'value' => $city
            ]
        ]
    ];
}
if ($customFields) {
    $contact['custom_fields'] = array_merge($contact['custom_fields'], $customFields);
}

$data = ['add' => [$contact]];

$curl = curl_init();
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_USERAGENT, 'amoCRM-API-client/1.0');
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_COOKIEFILE, dirname(__FILE__) . '/cookie.txt');
curl_setopt($curl, CURLOPT_COOKIEJAR, dirname(__FILE__) . '/cookie.txt');
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);

$response = curl_exec($curl);
$code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

$responseData = json_decode($response, true);

if ($code != 200 || empty($responseData['_embedded']['items'])) {
    echo json_encode(['success' => false, 'error' => 'Ошибка создания контакта в amoCRM.']);
    exit;
}

$contactId = $responseData['_embedded']['items'][0]['id'];

// Создание сделки
$url = 'https://' . $domain . '.amocrm.ru/api/v2/leads';
$lead = [
    'name' => 'Заявка с сайта',
    'contacts_id' => [$contactId]
];

$data = ['add' => [$lead]];

$curl = curl_init();
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_USERAGENT, 'amoCRM-API-client/1.0');
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_COOKIEFILE, dirname(__FILE__) . '/cookie.txt');
curl_setopt($curl, CURLOPT_COOKIEJAR, dirname(__FILE__) . '/cookie.txt');
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);

$response = curl_exec($curl);
$code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

$responseData = json_decode($response, true);

if ($code != 200 || empty($responseData['_embedded']['items'])) {
    echo json_encode(['success' => false, 'error' => 'Ошибка создания сделки в amoCRM.']);
    exit;
}

echo json_encode(['success' => true]);
