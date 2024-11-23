"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function PathForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <form action={() => {}} className="path-form">
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
    </form>
  );
}
