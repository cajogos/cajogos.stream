function getSVG(width, height, darkMode = false)
{
    let fillColor = (darkMode) ? '#1D1D1D' : '#FCFCFC';
    let outlineColor = (darkMode) ? '#FCFCFC' : '#1D1D1D';

    return (
        <svg width={width} height={height} viewBox="0 0 481 552" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={outlineColor} d="M464.283 139.916H442.135L447.362 111.262L450.236 95.499H434.193H412.044L417.272 66.8854L420.146 51.122H404.103H381.954L387.142 22.4685L390.016 6.70508H373.973H245.032H233.379L231.783 18.1984L220.928 95.499H213.186H200.934L196.305 62.6153L194.709 51.122H183.056H170.844L166.215 18.1984L164.579 6.70508H152.966H23.9851H7.94238L10.8157 22.4685L80.9329 407.814L82.9283 418.789H94.1024H104.957L111.023 452.191L113.058 463.166H124.193H135.047L141.153 496.608L143.149 507.582H154.323H165.177L171.243 540.985L173.239 551.999H184.413H394.206H405.34L407.335 540.985L477.453 155.679L480.326 139.916H464.283Z" />
            <path fill={fillColor} d="M373.972 20.0735L303.855 405.379H94.0616L23.9443 20.0735H152.925L198.978 347.593L244.991 20.0735H373.972Z" />
            <path fill={outlineColor} d="M227.592 0L225.197 17.3198L198.978 203.368L172.839 17.3198L170.444 0H0L4.27012 23.6252L74.3874 409.051L77.4202 425.453H320.616L323.649 409.051L393.766 23.6252L398.036 0H227.592ZM94.1016 405.379L23.9844 20.0734H152.965L198.978 347.593L244.991 20.0734H373.972L304.014 405.379H94.1016Z" />
        </svg>

    );
}

function VoggtIcon({ width = 16, height = 16, darkMode = false })
{
    return (
        <>
            {getSVG(width, height, darkMode)}
        </>
    );
};

export default VoggtIcon;