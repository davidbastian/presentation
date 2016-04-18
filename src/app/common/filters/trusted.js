function trusted($sce) {

    return function(url) {
	        return $sce.trustAsResourceUrl(url);
	};

}
export {
    trusted
};