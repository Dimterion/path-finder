"use client";

import { useActionState, useState } from "react";
import { Send } from "lucide-react";
import { z } from "zod";
import MDEditor from "@uiw/react-md-editor";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { formSchema } from "@/lib/validation";

export default function PathForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };

      await formSchema.parseAsync(formValues);

      console.log(formValues);

      // const result = await createPath(prevState, formData, pitch);

      // console.log(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;

        setErrors(fieldErrors as unknown as Record<string, string>);

        return { ...prevState, error: "Not validated:", status: "ERROR" };
      }

      return {
        ...prevState,
        error: "An error has occurred",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction} className="path-form">
      <div>
        <label htmlFor="title" className="path-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="path-form_input"
          required
          placeholder="Path title"
        />
        {errors.title && <p className="path-form_error">{errors.title}</p>}
      </div>
      <div>
        <label htmlFor="description" className="path-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="path-form_textarea"
          required
          placeholder="Path description"
        />
        {errors.description && (
          <p className="path-form_error">{errors.description}</p>
        )}
      </div>
      <div>
        <label htmlFor="category" className="path-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="path-form_input"
          required
          placeholder="Path category (Development, Education, etc.)"
        />
        {errors.category && (
          <p className="path-form_error">{errors.category}</p>
        )}
      </div>
      <div>
        <label htmlFor="link" className="path-form_label">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="path-form_input"
          required
          placeholder="Path image URL"
        />
        {errors.link && <p className="path-form_error">{errors.link}</p>}
      </div>
      <div data-color-mode="light">
        <label htmlFor="pitch" className="path-form_label">
          Pitch
        </label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder: "Describe your path.",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />
        {errors.pitch && <p className="path-form_error">{errors.pitch}</p>}
      </div>
      <Button
        type="submit"
        className="path-form_btn text-white"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit"}
        <Send className="ml-2 size-6" />
      </Button>
    </form>
  );
}
