<?php

	$content = '';
	foreach($_POST as $key => $value){
		if($value){
			$content .= "<b>$key</b>: <i>$value</i>\n";
		}
	}
	if(trim($content)){
		$content = "<b>Message from Site: electric water gun </b>\n".$content;
		$apiToken = "7102832423:AAECGSq8pNlvLnh15HMzy-b7fwU0pPwTQ8k";
		$data = [
			//user`s telegram chat id
			'chat_id' => '@CodeOnlyGetMessageShop',
			'text' => $content,
			'parse_mode' => 'HTML'
		];
		$response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?".http_build_query($data));
	}
?> 