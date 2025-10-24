import React, { useRef, useState } from "react";
import { Label } from "@/components/ui/Label";

export function EventThumbnail() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setFileName(f.name);
    else setFileName(null);
  };

  return (
    <div>
      <Label className="mb-2">Thumbnail *</Label>
      <div className="border border-dashed rounded-lg p-8 text-center">
        <input
          type="file"
          ref={inputRef}
          onChange={onChange}
          className="hidden"
          id="thumbnail"
        />
        <label htmlFor="thumbnail" className="cursor-pointer block">
          <div className="text-sm">Upload files</div>
          <div className="text-xs text-muted-foreground mt-2">
            {fileName ?? "0 files uploaded so far."}
          </div>
        </label>
      </div>
    </div>
  );
}
