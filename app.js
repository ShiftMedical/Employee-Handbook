(function() {
	var HandbookApp = angular.module("Handbook", []);

	HandbookApp.config(function($logProvider) {
		$logProvider.debugEnabled(false);
	});

	HandbookApp.controller("ApplicationController", [
		"$log",
		function($log) {
			$log.debug("ApplicationController");
		}
	]);

	HandbookApp.controller("HandbookFilesListController", [
		"$scope",
		function($scope) {
			// function remove_extension(s) {
			// 	return s.slice(0, s.lastIndexOf("."));
			// }

			function get_filename(url) {
				filenamePart = url.substring(url.lastIndexOf('/')+1);
				return filenamePart;
			};

			$scope.files = [
				"https://s3.amazonaws.com/provider-handbook/SM+EH1001+Equal+Employment+Opportunity+Policy.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH1002+Code+of+Business+Ethics.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH2001+Patient+Bill+of+Rights.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH2002+Confidential+Information.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH2003+National+Patient+Safety+Goals.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH2004+Centers+for+Disease+Control+Hand+Hygiene+Guidelines.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH2005+Ethical+Standards.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH2006+Code+of+Conduct.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH3003+Assignment+Cancellation.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH4001+Provider+Credentialing+Procedures.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH4002+Provider+Rights+and+Responsibilities.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH5001+Quality+of+Care+Incident+Reporting.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH6001+Cultural+Diversity+in+Nursing+Practice.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH6002+Americans+with+Disabilities+Act.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH6003+Grievance+Policy.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH6004+Emergency+Management+Plan.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH6005+Harrassment+Policy.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH7001+Performance+Management.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH8001+Platform+Privacy+Policy.pdf",
				"https://s3.amazonaws.com/provider-handbook/SM+EH8002+Terms+of+Service.pdf",
			];

			$scope.get_filename = function(url) {
				return get_filename(url);
			};
		}
	]);
}());
