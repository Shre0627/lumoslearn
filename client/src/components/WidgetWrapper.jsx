function WidgetWrapper ({ title, className= "", onClose, widgetContent }){
    return (
    <div className={`widget- ${className}`}>
        <div className="widget-header">
            <span className="widget-title">{title}</span>
            <button
                className="widget-close"
                onClick={onClose}
                title="Close Widget"
            > &times </button>
        </div>
        <div className="widget-content">
            {widgetContent}
        </div>
    </div>
    );
}

export default WidgetWrapper;