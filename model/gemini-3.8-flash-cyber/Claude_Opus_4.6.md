# Gemini 3.8 Flash Cyber — findings by Claude Opus 4.6

- Source: Google DeepMind / Gemini 3.8 Flash Cyber
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Specialized variant of Gemini 3.8 Flash tuned for cybersecurity (vulnerability detection, automated patching). Restricted access via Google's Fairwind Program for trusted defenders.
- **Provider / access:** Fairwind Program only (gated). Not available via public API.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff March 2026 (shared with 3.8 Flash).
- **IDs:** `google/gemini-3.8-flash-cyber` (restricted; no public API or Free ID)
- **Context window:** 1,048,576 tokens (1M); max output 65,536 tokens (assumed same as 3.8 Flash).
- **Modalities:** Text, image, audio, video in; text out; tool calls; specialized cyber analysis capabilities.
- **Pricing (as of 2026-09-19):** No published public rate card. Enterprise/defense agreements through Fairwind Program. Standard 3.8 Flash pricing: $0.75/$3.75.
- **Architecture:** Proprietary; fine-tuned variant of 3.8 Flash with relaxed cyber-specific safeguards.

### Raw benchmarks found

Agent / tool use:

- CyberGym: **86.2%** pass@1 (source: Google blog)
- Real-world vulnerability discovery: **>70%** (source: Google blog)
- CWE-Bench: **47.2%** (source: Google blog; held-out audit-and-patch)
- Terminal-Bench: no verified public score found for Cyber variant specifically
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (likely similar to 3.8 Flash ~95.3%)
- HLE: no verified public score found

Coding:

- SWE-bench: no verified public score found
- DeepSWE: no verified public score found

Long context:

- 1M context shared with 3.8 Flash; no MRCR/RULER retrieval published.

### Normalized scores (1–100)

- **Tool use: 85/100.** CyberGym 86.2% is strong in specialized domain. CWE-Bench 47.2% shows security-focused tool use. But this is a cybersecurity specialist, not general-purpose tool use; general TB/GDPval scores unknown.
- **Reasoning: 88/100.** Inherits 3.8 Flash reasoning (~GPQA 95.3%). Specialized tuning may trade general breadth for cyber depth. Conservative estimate below base 3.8 Flash.
- **Context window: 97/100.** 1M inherited from 3.8 Flash.
- **Multimodal: 90/100.** Full text + image + audio + video in; text out. Same modality as 3.8 Flash.
- **Coding: 80/100.** Specialized for security code (patching, vulnerability). CyberGym 86.2% includes coding-adjacent tasks. General coding benchmarks not published; likely trades general coding breadth for cyber specificity.
- **Cost efficiency: 75/100.** No public pricing; gated access. Assumed enterprise-level pricing comparable to or above standard 3.8 Flash ($0.75/$3.75). Restricted availability reduces accessibility.
- **Overall Score: 88/100.** Mean of (85 + 88 + 97 + 90 + 80) / 5 = 88.0. Strong cyber-specialized model; restricted access limits general utility.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (Google blog, DataCamp, Google DeepMind); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
