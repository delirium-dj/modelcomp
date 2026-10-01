# Gemini 4 Argon — findings by GPT 5.6 Terra

- Source: Google DeepMind (`Gemini 4 Argon`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's Gemini 4 frontier model, initially released to a limited cybersecurity-partner group for long-running professional and software work.
- **Provider / access:** Google early-access program; no generally available API model identifier was documented at research time.
- **Release / knowledge:** Announced September 30, 2026; Google has not published a general-availability date.
- **IDs:** No public API ID verified.
- **Context window:** A 1M-token limit is reported in launch coverage; independent retrieval testing was not found.
- **Modalities:** Gemini-family multimodal capability is reported, but the limited-release Argon API modality matrix was not publicly verified.
- **Pricing (as of 2026-10-02):** Reported introductory API price $2 input / $10 output per million tokens, increasing to $4/$20; public Google billing documentation had not yet listed Argon.
- **Architecture:** Proprietary Google DeepMind model.

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **51.3%** (Google launch-table result reported by NeuralTrust).
- Vals Index: **68.9%** (Google launch-table result reported by NeuralTrust).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53** (reported as matching GPT-6 Astra by contemporaneous reporting); independent detailed breakdown not found.

Coding:

- DeepSWE v1.1: **77.9%** (Google launch-table result reported by NeuralTrust).
- Terminal-Bench 4.0: Google reported Argon behind the comparison leader; exact score not verified in accessible launch coverage.

Long context:

- **1M-token** limit reported in launch coverage; no MRCR/RULER result found.

### Normalized scores (1–100)

- **Tool use: 88/100.** AutomationBench 51.3 and Vals Index 68.9 show strong autonomous-work capability, though independent validation is still sparse.
- **Reasoning: 90/100.** A reported 53 Artificial Analysis index indicates frontier performance, capped for limited independent evidence.
- **Context window: 100/100.** Reported 1M-token capacity reaches the top context tier; no retrieval score is available.
- **Multimodal: 95/100.** Argon is positioned within Google's multimodal Gemini line, but the release-specific modality contract remains incomplete.
- **Coding: 91/100.** 77.9% DeepSWE v1.1 is a frontier published result; the missing Terminal-Bench number caps confidence.
- **Cost efficiency: 78/100.** Reported $2/$10 introductory price and 95% cached-input discount are strong for the claimed tier, tempered by limited availability and planned increase.
- **Overall Score: 93/100.** Half-up mean of the five quality dimensions; a high-potential frontier model whose public evidence is mostly vendor-reported and very new.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-02
- Method: Fresh public internet research across launch reporting and benchmark coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
