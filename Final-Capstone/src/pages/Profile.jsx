function Profile({ name, title, bio, avatar, name2, title2, bio2, avatar2 }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 text-center">
      
      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-gray-200"
      />

      <h1 className="text-xl font-bold text-gray-800">{name}</h1>
      <p className="text-sm text-gray-500 mb-3">{title}</p>

      <p className="text-gray-600 text-sm leading-relaxed">
        {bio}
      </p>
       
       <img
        src={avatar2}
        alt={name2}
        className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-gray-200"
      />

      <h1 className="text-xl font-bold text-gray-800">{name2}</h1>
      <p className="text-sm text-gray-500 mb-3">{title2}</p>

      <p className="text-gray-600 text-sm leading-relaxed">
        {bio2}
      </p>

    </div>
      
    
  );
}

export default Profile;