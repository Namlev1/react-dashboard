function Dropdown({ width = '240px', left = '-20px', top = '35px', items = [] }) {
    const dropdownStyle = {
        position: 'absolute',
        left,
        top,
        backgroundColor: '#007bff',
        color: 'white',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 10,
    };

    return (
        <div style={dropdownStyle} className="dropdown-menu">
            {items.map((item, index) => (
                <div key={index} className="dropdown-item">
                    {item}
                </div>
            ))}
        </div>
    );
}

export default Dropdown;