import ProfileImage from "./ProfilePicture"; // This component for displaying the profile picture is broken and needs to be fixed

export default function HomePage() {
  return (
    <section className="flex items-center justify-center z-50 bg-white/5 backdrop-blur-sm border border-white/5 px-5 py-5 w-384 h-192 rounded-3xl mx-auto drop-shadow-md text-white text-lg">
      <div className="max-w-4xl mx-auto">
        <ProfileImage />
      </div>
      <div className="text-left max-w-4xl mx-auto">
        fhdshfjshdfjhsjk
      </div>
    </section>
  );
}