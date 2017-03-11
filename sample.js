
function SendData()
{
		// サーバーに非同期で検索条件に合う車情報を取得
		$.ajax
		(
			{
				url: './rest_test.php',
				type: 'post',
				data: {
					id: 'test',
					password: '12345'
				},
				success: function( jsData, dataType )
				{
					var obj = JSON.parse( jsData );
                    console.log( obj );
				},
				error: function(XMLHttpRequest, textStatus, errorThrown)
				{
					console.log( 'error' );
				}
			}
		);

}

$(
	function()
	{
	    $('#send_button').on
	    (
	        'click',
	        function()
	        {
	            SendData();
	        }
	    );
	}
);
