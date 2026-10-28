import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
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
  type LinkEntry,
  type WorkEntry,
  EMPTY_CV,
  loadCv,
  makeEducationEntry,
  makeLinkEntry,
  makeWorkEntry,
  saveCv,
} from "../features/cv/data";
import { exportCvPdf } from "../utils/exportPdf";
import SectionHeader from "../features/cv/SectionHeader";

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

  useEffect(() => {
    return () => {
      if (saveTimeout.current) clearTimeout(saveTimeout.current);
    };
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

  function addLink() {
    const entry = makeLinkEntry({
      label: "",
      url: "",
    });

    updateCv({ links: [...cv.links, entry] });
  }

  function updateLink(id: string, patch: Partial<LinkEntry>) {
    updateCv({
      links: cv.links.map((link) =>
        link.id === id ? { ...link, ...patch } : link,
      ),
    });
  }

  function removeLink(id: string) {
    Alert.alert(
      "Remove link",
      "Are you sure you want to remove this link? This cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () =>
            updateCv({
              links: cv.links.filter((link) => link.id !== id),
            }),
        },
      ],
    );
  }

  function clearCv() {
    Alert.alert(
      "Clear CV",
      "Are you sure you want to clear your CV? All fields, experience, education, and links will be removed. This cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Clear CV",
          style: "destructive",
          onPress: () => {
            if (saveTimeout.current) {
              clearTimeout(saveTimeout.current);
              saveTimeout.current = null;
            }

            setCv(EMPTY_CV);

            setExpanded({
              personal: true,
              summary: false,
              skills: false,
              experience: false,
              education: false,
              links: false,
            });

            saveCv(EMPTY_CV);
          },
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>CV Builder</Text>
          <Text style={styles.headerSubtitle}>
            Your changes are saved automatically.
          </Text>
        </View>

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
              placeholder="e.g. Web Developer"
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
              placeholder="e.g. Project Management, Data Analysis, Search Engine Optimization"
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
                  onChangeText={(v) =>
                    updateExperience(entry.id, { company: v })
                  }
                  placeholder="e.g. Acme Corp"
                />
                <Field
                  label="Role"
                  value={entry.role}
                  onChangeText={(v) => updateExperience(entry.id, { role: v })}
                  placeholder="e.g. Web Developer"
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
                  onChangeText={(v) =>
                    updateExperience(entry.id, { endDate: v })
                  }
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
                  placeholder="e.g. Bachelor in Computer Science"
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
                  onChangeText={(v) =>
                    updateEducation(entry.id, { endDate: v })
                  }
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
            {cv.links.map((link) => (
              <View key={link.id} style={styles.entryCard}>
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>
                    {link.label || "New Link"}
                  </Text>

                  <Pressable
                    onPress={() => removeLink(link.id)}
                    style={styles.removeButton}
                  >
                    <Text style={styles.removeText}>Remove</Text>
                  </Pressable>
                </View>

                <Field
                  label="Link Name"
                  value={link.label}
                  onChangeText={(value) =>
                    updateLink(link.id, { label: value })
                  }
                  placeholder="e.g. LinkedIn, Portfolio, GitHub"
                />
                <Field
                  label="URL"
                  value={link.url}
                  onChangeText={(value) => updateLink(link.id, { url: value })}
                  placeholder="https://example.com"
                  keyboardType="url"
                  last
                />
              </View>
            ))}

            <Pressable style={styles.addEntryButton} onPress={addLink}>
              <Text style={styles.addEntryText}>+ Add link</Text>
            </Pressable>
          </View>
        )}

        {/* Export and Clear */}
        <View style={styles.actionRow}>
          <Pressable
            style={styles.exportButton}
            onPress={() => exportCvPdf(cv)}
          >
            <Text style={styles.exportButtonText}>Export PDF</Text>
          </Pressable>

          <Pressable style={styles.clearButton} onPress={clearCv}>
            <Text style={styles.clearButtonText}>Clear CV</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 8,
  },
  section: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    paddingVertical: 9,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#111827",
    backgroundColor: "#f9fafb",
  },
  inputMultiline: {
    height: 90,
    textAlignVertical: "top",
  },
  entryCard: {
    backgroundColor: "#f9fafb",
    borderRadius: 12,
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
    gap: 12,
  },
  entryTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
    flex: 1,
    marginRight: 8,
  },
  removeButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
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
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  addEntryText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1f6feb",
  },
  exportButton: {
    flex: 1,
    backgroundColor: "#1f6feb",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  exportButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
  },
  actionRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },
  clearButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#dc2626",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  clearButtonText: {
    color: "#dc2626",
    fontSize: 14,
    fontWeight: "700",
  },
});
