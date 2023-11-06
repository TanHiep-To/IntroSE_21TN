import logoImage from "/src/assets/logo-recipe.png";

const LogoIcon = () => {
    return (
        <div className="flex items-center space-x-3 bg-white p-2">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
                <img src={logoImage} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-bold text-green-900 italic">Love Cook</span>
        </div>
    );
}

export default LogoIcon;
