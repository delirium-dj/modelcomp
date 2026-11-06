# Hy3 — findings by Flint

- Source: Tencent (Hy) / Hy3
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's open-weight MoE reasoning model (295B / 21B active), positioned as a budget open-weights coder with strong science-question scores at low serving cost; Apache 2.0 weights.
- **Provider / access:** Tencent Hugging Face / third-party hosts; not present on OpenCode Zen (`noFreeId` on Zen).
- **Release / knowledge:** Released Jul 2026; knowledge cutoff not disclosed.
- **IDs:** `tencent/hy3`.
- **Context window:** 256,000 (262,144 on some hosts); 64,000–128,000 max output on some hosts.
- **Modalities:** Text in / text out only.
- **Pricing (as of 2026-11-06):** ~$0.08 / $0.33 per 1M off-peak (Tencent fp8), $0.14 / $0.58 on other hosts; self-host $0 (Apache 2.0).
- **Architecture:** Open-weight Mixture-of-Experts LLM (295B / 21B active).

### Raw benchmarks found

Coding:

- SWE-bench Verified: **78.0%** (Tencent, via Hugging Face / official release coverage).

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Tencent, official); Terminal-Bench 2.1: **71.7%**.

Agent / tool use:

- Terminal-Bench 2.1: **71.7%**.

Long context:

- Context limit documented at 256K / 262K; retrieval beyond not independently measured.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 **71.7%** (mid-high band); strong science-question capability noted in the model card.
- **Reasoning: 75/100.** GPQA Diamond **90.4%** (top band) with Terminal-Bench 2.1 **71.7%**; what caps it: breadth of agentic terminal tasks mid band.
- **Context window: 77/100.** 256K / 262K -> 200K–500K tier mapping.
- **Multimodal: 15/100.** Text-only.
- **Coding: 75/100.** SWE-bench Verified **78.0%** (top band) + TB2.1 71.7%; caps below frontier coding band.
- **Cost efficiency: 90/100.** ~$0.08 / $0.33 per 1M off-peak; strong value tier.

- **Overall Score: 62.4/100.** Mean of the five quality dims: (70 + 75 + 77 + 15 + 75) / 5 = 74.6 -> **75**... let me recompute: 70+75=145, +77=222, +15=237, +75=312; 312/5=62.4. Hmm I mis-added. 312/5 = 62.4 → **62** (half-up). Wait: 70+75+77+15+75 = 292. Let me redo: 70+75 = 145; 145+77 = 222; 222+15 = 237; 237+75 = 312. Yes sum 312, /5 = 62.4 → Overall 62.

Hmm, that's inconsistent with my intent but fine — math is math.

Actually let me just be careful and use round numbers going forward.

- **Overall Score: 62/100.**

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Tencent's official Hy3 release coverage and Hugging Face model card; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
