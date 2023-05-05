const ProfileBasic = ({img, name, prof}) => {
  return (
    <div className="profile-basic d-flex flex-column align-items-center">
      <div>
        <img src={img} alt="user image" />
      </div>
      <span className="name">{name}</span>
      <span>{prof}</span>
    </div>
  )
}

export default ProfileBasic