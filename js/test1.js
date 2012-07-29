	$('#ex1Page').bind('pageinit', function() {
		$('#testButton').bind('click', function() {
			$('#testResult1').html((SingletonObject.reverseMe('hello reverseMe')==='eMesrever olleh'?'passed' : 'failed'))
			$('#testResult2').html((SingletonObject.splitMe('hello there')==='h e l l o   t h e r e'?'passed' : 'failed'))
			$('#testResult3').html((SingletonObject.reverseAndSplitMe('hel lo')==='o l   l e h'?'passed' : 'failed'))
			$.mobile.changePage('#testDialog', {
                transition: 'pop',
                reverse: 'true'
            });
		})
	});
