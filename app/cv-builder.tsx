import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  type CvData,
  type EducationEntry,
  type WorkEntry,
  EMPTY_CV,
  loadCv,
  makeEducationEntry,
  makeWorkEntry,
  saveCv,
} from "../data/cv";
import { exportCvPdf } from "../utils/exportPdf";
import SectionHeader from "../components/SectionHeader";

const SECTION_KEYS = [
  "personal",
  "summary",
  "skills",
  "experience",
  "education",
  "links",
] as const;

type SectionKey = (typeof SECTION_KEYS)[number];

export default function CVBuilderScreen() {
  const [cv, setCv] = useState<CvData>(EMPTY_CV);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<Record<SectionKey, boolean>>({
    personal: true,
    summary: false,
    skills: false,
    experience: false,
    education: false,
    links: false,
  });

  const saveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    loadCv().then((data) => {
      setCv(data);
      setLoading(false);
    });
  }, []);

  function updateCv(patch: Partial<CvData>) {
    const updated = { ...cv, ...patch };
    setCv(updated);
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => saveCv(updated), 600);
  }

  function toggleSection(key: SectionKey) {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function addExperience() {
    const entry = makeWorkEntry({
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    updateCv({ experience: [...cv.experience, entry] });
  }

  function updateExperience(id: string, patch: Partial<WorkEntry>) {
    updateCv({
      experience: cv.experience.map((e) =>
        e.id === id ? { ...e, ...patch } : e,
      ),
    });
  }

  function removeExperience(id: string) {
    Alert.alert(
      "Remove experience",
      "Are you sure you want to remove this entry? This cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () =>
            updateCv({ experience: cv.experience.filter((e) => e.id !== id) }),
        },
      ],
    );
  }

  function addEducation() {
    const entry = makeEducationEntry({
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    updateCv({ education: [...cv.education, entry] });
  }

  function updateEducation(id: string, patch: Partial<EducationEntry>) {
    updateCv({
      education: cv.education.map((e) =>
        e.id === id ? { ...e, ...patch } : e,
      ),
    });
  }

  function removeEducation(id: string) {
    Alert.alert(
      "Remove education",
      "Are you sure you want to remove this entry? This cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () =>
            updateCv({ education: cv.education.filter((e) => e.id !== id) }),
        },
      ],
    );
  }

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      {/* Personal Info */}
      <SectionHeader
        title="Personal Info"
        expanded={expanded.personal}
        onToggle={() => toggleSection("personal")}
      />
      {expanded.personal && (
        <View style={styles.section}>
          <Field
            label="Full Name"
            value={cv.name}
            onChangeText={(v) => updateCv({ name: v })}
            placeholder="e.g. Jane Smith"
          />
          <Field
            label="Job Title"
            value={cv.title}
            onChangeText={(v) => updateCv({ title: v })}
            placeholder="e.g. Frontend Developer"
          />
          <Field
            label="Email"
            value={cv.email}
            onChangeText={(v) => updateCv({ email: v })}
            placeholder="e.g. jane@email.com"
            keyboardType="email-address"
          />
          <Field
            label="Phone"
            value={cv.phone}
            onChangeText={(v) => updateCv({ phone: v })}
            placeholder="e.g. +33 6 12 34 56 78"
            keyboardType="phone-pad"
          />
          <Field
            label="Address"
            value={cv.address}
            onChangeText={(v) => updateCv({ address: v })}
            placeholder="e.g. Paris, France"
            last
          />
        </View>
      )}

      {/* Summary */}
      <SectionHeader
        title="Summary"
        expanded={expanded.summary}
        onToggle={() => toggleSection("summary")}
      />
      {expanded.summary && (
        <View style={styles.section}>
          <Field
            label="Summary"
            value={cv.summary}
            onChangeText={(v) => updateCv({ summary: v })}
            placeholder="A brief description of yourself..."
            multiline
            last
          />
        </View>
      )}

      {/* Skills */}
      <SectionHeader
        title="Skills"
        expanded={expanded.skills}
        onToggle={() => toggleSection("skills")}
      />
      {expanded.skills && (
        <View style={styles.section}>
          <Field
            label="Skills"
            value={cv.skills}
            onChangeText={(v) => updateCv({ skills: v })}
            placeholder="e.g. React, TypeScript, Node.js"
            multiline
            last
          />
        </View>
      )}

      {/* Work Experience */}
      <SectionHeader
        title="Work Experience"
        expanded={expanded.experience}
        onToggle={() => toggleSection("experience")}
      />
      {expanded.experience && (
        <View style={styles.section}>
          {cv.experience.map((entry, index) => (
            <View key={entry.id} style={styles.entryCard}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>
                  {entry.role || "New Entry"}
                  {entry.company ? ` — ${entry.company}` : ""}
                </Text>
                <Pressable
                  onPress={() => removeExperience(entry.id)}
                  style={styles.removeButton}
                >
                  <Text style={styles.removeText}>Remove</Text>
                </Pressable>
              </View>
              <Field
                label="Company"
                value={entry.company}
                onChangeText={(v) => updateExperience(entry.id, { company: v })}
                placeholder="e.g. Acme Corp"
              />
              <Field
                label="Role"
                value={entry.role}
                onChangeText={(v) => updateExperience(entry.id, { role: v })}
                placeholder="e.g. Frontend Developer"
              />
              <Field
                label="Start Date"
                value={entry.startDate}
                onChangeText={(v) =>
                  updateExperience(entry.id, { startDate: v })
                }
                placeholder="e.g. 01-2023"
              />
              <Field
                label="End Date"
                value={entry.endDate}
                onChangeText={(v) => updateExperience(entry.id, { endDate: v })}
                placeholder="e.g. 03-2026 or Present"
              />
              <Field
                label="Description"
                value={entry.description}
                onChangeText={(v) =>
                  updateExperience(entry.id, { description: v })
                }
                placeholder="Key responsibilities and achievements..."
                multiline
                last
              />
            </View>
          ))}
          <Pressable style={styles.addEntryButton} onPress={addExperience}>
            <Text style={styles.addEntryText}>+ Add experience</Text>
          </Pressable>
        </View>
      )}

      {/* Education */}
      <SectionHeader
        title="Education"
        expanded={expanded.education}
        onToggle={() => toggleSection("education")}
      />
      {expanded.education && (
        <View style={styles.section}>
          {cv.education.map((entry) => (
            <View key={entry.id} style={styles.entryCard}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>
                  {entry.degree || "New Entry"}
                  {entry.institution ? ` — ${entry.institution}` : ""}
                </Text>
                <Pressable
                  onPress={() => removeEducation(entry.id)}
                  style={styles.removeButton}
                >
                  <Text style={styles.removeText}>Remove</Text>
                </Pressable>
              </View>
              <Field
                label="Institution"
                value={entry.institution}
                onChangeText={(v) =>
                  updateEducation(entry.id, { institution: v })
                }
                placeholder="e.g. University of Paris"
              />
              <Field
                label="Degree"
                value={entry.degree}
                onChangeText={(v) => updateEducation(entry.id, { degree: v })}
                placeholder="e.g. BSc Computer Science"
              />
              <Field
                label="Start Date"
                value={entry.startDate}
                onChangeText={(v) =>
                  updateEducation(entry.id, { startDate: v })
                }
                placeholder="e.g. 09-2019"
              />
              <Field
                label="End Date"
                value={entry.endDate}
                onChangeText={(v) => updateEducation(entry.id, { endDate: v })}
                placeholder="e.g. 06-2022 or Present"
              />
              <Field
                label="Description"
                value={entry.description}
                onChangeText={(v) =>
                  updateEducation(entry.id, { description: v })
                }
                placeholder="Relevant coursework, achievements..."
                multiline
                last
              />
            </View>
          ))}
          <Pressable style={styles.addEntryButton} onPress={addEducation}>
            <Text style={styles.addEntryText}>+ Add education</Text>
          </Pressable>
        </View>
      )}

      {/* Links */}
      <SectionHeader
        title="Links"
        expanded={expanded.links}
        onToggle={() => toggleSection("links")}
      />
      {expanded.links && (
        <View style={styles.section}>
          <Field
            label="LinkedIn"
            value={cv.linkedin}
            onChangeText={(v) => updateCv({ linkedin: v })}
            placeholder="https://linkedin.com/in/yourname"
            keyboardType="url"
          />
          <Field
            label="GitHub"
            value={cv.github}
            onChangeText={(v) => updateCv({ github: v })}
            placeholder="https://github.com/yourname"
            keyboardType="url"
          />
          <Field
            label="Website"
            value={cv.website}
            onChangeText={(v) => updateCv({ website: v })}
            placeholder="https://yoursite.com"
            keyboardType="url"
            last
          />
        </View>
      )}

      {/* Export */}
      <Pressable style={styles.exportButton} onPress={() => exportCvPdf(cv)}>
        <Text style={styles.exportButtonText}>Export PDF</Text>
      </Pressable>
    </ScrollView>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChangeText: (v: string) => void;
  placeholder?: string;
  multiline?: boolean;
  keyboardType?: "default" | "email-address" | "phone-pad" | "url";
  last?: boolean;
};

function Field({
  label,
  value,
  onChangeText,
  placeholder,
  multiline,
  keyboardType = "default",
  last,
}: FieldProps) {
  return (
    <View style={!last && { marginBottom: 14 }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.inputMultiline]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        multiline={multiline}
        numberOfLines={multiline ? 4 : 1}
        textAlignVertical={multiline ? "top" : "center"}
        keyboardType={keyboardType}
        autoCapitalize={
          keyboardType === "email-address" || keyboardType === "url"
            ? "none"
            : "sentences"
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f7fb" },
  content: { padding: 16, paddingBottom: 40 },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  section: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 12,
    fontSize: 15,
    color: "#111827",
    backgroundColor: "#f9fafb",
  },
  inputMultiline: {
    height: 90,
    textAlignVertical: "top",
  },
  entryCard: {
    backgroundColor: "#f9fafb",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  entryTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
    flex: 1,
    marginRight: 8,
  },
  removeButton: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "#fee2e2",
  },
  removeText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#991b1b",
  },
  addEntryButton: {
    borderWidth: 1,
    borderColor: "#1f6feb",
    borderStyle: "dashed",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  addEntryText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1f6feb",
  },
  exportButton: {
    backgroundColor: "#1f6feb",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  exportButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
