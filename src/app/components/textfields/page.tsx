"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import Input from "../ui/input";
import Button from "../ui/button";
import z, { email } from "zod";
import { useState } from "react";

const schema = z.object({
  searchWithIcon: z.string().trim().min(2, "Search is too short"),
  email: z.email("Enter a valid email"),
  linkedInURL: z
    .url("Enter a valid url")
    .startsWith("https://www.linkedin.com/in/", {
      error: "Enter a valid LinkedIn URL",
    }),
});

type FormFields = z.infer<typeof schema>;
type FieldErrors = Partial<Record<keyof FormFields, string[]>>;

export default function Home() {
  const [errors, setErrors] = useState<FieldErrors>();

  function submitForm(formData: FormData) {
    const result = schema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      const fieldErrors = z.flattenError(result.error).fieldErrors;
      setErrors(fieldErrors);
      return;
    }

    setErrors(undefined);
  }

  return (
    <div className="flex items-center justify-center flex-wrap h-screen gap-4 bg-surface">
      <form className="flex flex-col gap-4 flex-wrap w-100" action={submitForm}>
        <Input
          label="Global Nutrition Search"
          placeholder="Search for foods, recipes, macros..."
          leftIcon={<Search />}
          rightIcon={<SlidersHorizontal />}
          name="searchWithIcon"
          error={!!errors?.searchWithIcon}
          errorMessage={errors?.searchWithIcon?.[0]}
        />
        <Input
          label="Global Nutrition Search"
          placeholder="Search for foods, recipes, macros..."
          leftIcon={<Search />}
          name="search"
        />
        <Input
          label="Name"
          placeholder="Enter your name"
          helperMessage="Locked by organization"
          name="name"
        />
        <Input
          label="Email"
          placeholder="Enter your email"
          name="email"
          error={!!errors?.email}
          errorMessage={errors?.email?.[0]}
        />
        <Input
          label="LinkedIn URL"
          placeholder="Enter your LinkedIn URL"
          name="linkedInURL"
          error={!!errors?.linkedInURL}
          errorMessage={errors?.linkedInURL?.[0]}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
