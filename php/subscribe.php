<?

if ($_POST['email'] ) {
    $name = $lastname = 'unknown';
    if ($_POST['name'])
        $name = $_POST['name'];

    $data = array(
        'email'     => $_POST['email'],
        'status'    => 'subscribed',
        'firstname' => $name,
        'lastname'  => $lastname
    );
    syncMailchimp($data);
}
function syncMailchimp($data) {
    $apiKey = 'd072afbbc5a3b1047a09387bbaddb99a-us11';//d072afbbc5a3b1047a09387bbaddb99a-us11
    $listId = '61ef4593e0';//02c9f4de5f

    //$memberId = md5(strtolower($data['email']));
    $dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
    $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listId . '/members';// . $memberId;

    $json = json_encode(array(
        'email_address' => $data['email'],
        'status'        => "pending", //$data['status'], // "subscribed","unsubscribed","cleaned","pending"
        'merge_fields'  => array(
            'FNAME'     => $data['firstname'],
            'LNAME'     => $data['lastname']
        )
    ));

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);                                                                                                                 
    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    //var_dump($_SERVER['HTTP_REFERER']);exit;
    header('Location: '.$_SERVER['HTTP_REFERER'].'/#subscribe');
}
?>