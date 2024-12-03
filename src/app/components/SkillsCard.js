function SkillsCard({srcImg,classNameImg,altImg}){
    return(
        <div className="card mb-4 bg-transparent image-hover">
            <img src={srcImg} className={classNameImg} alt={altImg} />
        </div>
    )
}
export default SkillsCard;  
