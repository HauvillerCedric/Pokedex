function NavBar({onPreviousClick, onNextClick}) {
    return (
        <div>
            <button onClick={onPreviousClick}>Précédent</button>
            <button onClick={onNextClick}>Suivant</button>
        </div>
    );
}

export default NavBar;
