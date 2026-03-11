import Profile from "./Profile";

function ProfilePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Profile
        name="Quang Tran"
        title="High School Student"
        bio="Hello Im a cuckledoodledoo"
        avatar="😊"
        name2="Gabe Savio"
        title2="High School Student"
        bio2="Hello, me too cuckledoodledoo"
        avatar2="😊"
      />
    </div>
  );
}

export default ProfilePage;