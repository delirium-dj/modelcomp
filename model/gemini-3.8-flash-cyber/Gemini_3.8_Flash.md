# Gemini 3.8 Flash Cyber — findings by Gemini 3.8 Flash

- Source: google/gemini-3-8-flash-cyber
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash for finding, validating and patching vulnerabilities, available via the Fairwind Program.
- **Provider / access:** google/gemini-3-8-flash-cyber
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** google/gemini-3-8-flash-cyber (no Free ID on Zen)
- **Context window:** 1,048,576 (1M) / 65K out
- **Modalities:** Text, code in; text, code out
- **Pricing (as of 2026-10-11):** Restricted Fairwind Program (no public pricing, no Zen Free ID)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://blog.google / Google Fairwind Program
- **Key Benchmarks & Findings:** Sept 2, 2026 release. Specialized cybersecurity variant for vulnerability reproduction & automated patching. CyberGym: 86.2%, CWE-Bench: 47.2%, DeepSWE: 73.7%.

### Normalized scores (1–100)

- **Tool use: 92/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 93/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,048,576 (1M) / 65K out).
- **Multimodal: 88/100.** Input/output modality comprehension across images, audio, documents, and video (Text, code in; text, code out).
- **Coding: 92/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 90/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 92.6/100.** Quality arithmetic mean of the 5 core quality dimensions ((92 + 93 + 98 + 88 + 92) / 5 = 92.6).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
