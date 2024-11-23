"use client";

import { Input } from "@/components/ui/input";

export default function PathForm() {
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
      </div>
    </form>
  );
}
