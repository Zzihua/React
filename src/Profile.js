import A from './image/kango.jpg'

export default function Profile(){
    return(
        <Avatar 
            person={{name:'kango', imageID:'kango123456'}}
            size={200}
        />
    );
}

function Avatar({person, size}){
    return(
        <div>
            <figure>
                <img 
                    src={A}
                    alt='kango'
                    width={size}
                />
                <figcaption>
                    name:{person.name} <br/>
                    imageID:{person.imageID}
                </figcaption>
            </figure>
        </div>
        
    );
}