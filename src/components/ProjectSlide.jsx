export default function ProjectSlide(props){
    return (
        <div className="slide">
            <div className="slide-image" style={{backgroundImage:"url(https://picsum.photos/500)"}}></div>
            <div className="slide-content">
                <h3>Don't Get Got! Online</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet convallis nisi, nec volutpat tellus dictum eget. Sed pellentesque nisl pulvinar finibus euismod. Pellentesque nec pellentesque felis. Etiam semper dapibus ex sit amet venenatis. Pellentesque porttitor tincidunt eleifend semper dapibus ex sit amet venenatis. Pellentesque porttitor tincidunt eleifend.</p>
                <div className="slide-button"><button>Visit</button></div>
            </div>
        </div>
    );
}