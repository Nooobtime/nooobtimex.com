import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AgeFromDate } from "age-calculator";

export default function AboutMe() {
  const birthdate = new Date(2003, 3, 19); // April 19, 2003 (Month is 0-indexed)
  const age = new AgeFromDate(birthdate).age;
  const university = "Thammasat University";
  const bachelor = "Computer Science";

  return (
    <section className="min-h-[24rem] bg-base-200 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Profile Avatar using shadcn/ui */}
        <Avatar className="w-40 h-40">
          <AvatarImage
            className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            src="/profile/NooobtimeX.webp"
            alt="Avatar"
          />
          <AvatarFallback>WP</AvatarFallback>
        </Avatar>

        {/* About Me Content */}
        <div className="max-w-3xl text-center lg:text-left">
          <h2 className="text-5xl font-bold text-primary">
            Wongsaphat Puangsorn <em className="text-3xl">({age})</em>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-base-content">
            I am a skilled software developer currently pursuing a degree in{" "}
            <em className="font-semibold">{bachelor}</em> at{" "}
            <em className="font-semibold">{university}</em>. With expertise in
            both <em className="font-semibold"> frontend </em> and{" "}
            <em className="font-semibold"> backend </em> development, I am
            proficient in{" "}
            <em className="font-semibold"> modern JavaScript frameworks</em>. I
            build robust web applications using the latest technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
