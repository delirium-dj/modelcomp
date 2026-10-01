# Gemini 3 Flash — findings by Grok 4.6

- Source: Google (`gemini-3-flash` / `gemini-3-flash-preview`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (Preview)
- **Short description:** Google’s December 2025 Flash-tier Gemini 3: 1M context, multimodal, $0.50/$3, positioned as a fast coder (SWE-Verified often **above** Gemini 3 Pro in secondary writeups). Not Gemini 3.x Flash (3.1/3.5/3.6…).
- **Provider / access:** Google AI Studio / Vertex `gemini-3-flash-preview` / `gemini-3-flash`. Tool use / function calling.
- **Release / knowledge:** 2025-12-17 (VerdictPal / Design for Online). Knowledge cutoff not verified here.
- **IDs:** `google/gemini-3-flash`. No OpenCode Zen Free ID found.
- **Context window:** 1,048,576 tokens (Design for Online).
- **Modalities:** text, image, file, audio, and video in (Design for Online); text out. Benchgen says image+text — use the broader DFO I/O list with that disagreement noted.
- **Pricing (as of 2026-10-01):** **$0.50 / $3.00** per 1M (VerdictPal checked 2026-06-09; S5 Labs).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench: **80.4%** (Design for Online; AA/HF aggregation)
- TerminalBench Hard: **38.6%** (Design for Online)
- Tau3 / GDPval-AA / Claw-Eval / TB 2.1: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: vendor/S5 **90.4%**; Design for Online **89.8%**; Vals **87.9%** (BenchLM); AA **81.2%** (BenchLM)
- HLE: S5 **33.7%**; Benchgen **43.5%**; Design for Online **34.7%**; AA-HLE **15.0%** (BenchLM) — large harness gap; do not average
- Artificial Analysis Intelligence Index: **17.9** (BenchLM, 2026-09-27)
- MMLU-Pro: **89%** (DFO) / Vals **88.6%** (BenchLM)
- AA-Omniscience Index **-4.3**; accuracy **45.8%**; hallucination **92.4%** (BenchLM)
- AIME 2025: **97%** (DFO); MATH **97.5%** (Benchgen)
- LCR: **66.3%** (DFO)

Coding:

- SWE-bench Verified: S5/VerdictPal/Benchgen **78%**; BenchLM Vals SWE-bench **75.0%**
- LiveCodeBench: DFO **90.8%**; Vals **85.6%** (BenchLM)
- SciCode: **50.6%** (DFO)
- Vibe Code Bench: **20.20%** (BenchLM)
- DeepSWE: no verified public score found

Long context:

- 1M native. LCR **66.3%** (DFO) — not 98% at 512K+.

### Normalized scores (1–100)

- **Tool use: 80/100.** τ² 80.4% is well above the Tau3 ~50%+ spirit. Capped by TB Hard 38.6% and no TB 4.0/GDPval.
- **Reasoning: 74/100.** Vendor GPQA 90.4% is frontier, but independent Index 17.9, AA-HLE 15%, and Omniscience hallucination 92.4% cap the dimension. Vendor HLE 33.7–43.5% is the optimistic bound.
- **Context window: 96/100.** 1M → 95–100; LCR 66.3% blocks 100.
- **Multimodal: 92/100.** Audio + video in (DFO) maps to 90–100; text-only output. If a first-party card is image-only, drop toward 65.
- **Coding: 84/100.** SWE-Verified 75–78% meets 74%+; LiveCodeBench 85–91% is high. Capped by SciCode 50.6%, Vibe 20%, and Index 17.9 implying weaker 2026 agentic coding.
- **Cost efficiency: 91/100.** $0.50/$3.00 sits next to ~$0.60/$2.20 ≈92 (slightly worse on output). Not $0.
- **Overall Score: 85/100.** (80+74+96+92+84)/5 = 85.2 → 85 half-up. Best-fit: cheap 1M omni Flash coder; do not treat AA Index 17.9 as a 2026 frontier reasoner.

---

## Signature

- Provided by: **Grok 4.6 (x-ai/grok-4.6)** — 2026-10-01
- Method: public internet research (S5 Labs, Benchgen, BenchLM, Design for Online, VerdictPal); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
