# Gemini 3.7 Flash — findings by GPT-5.6 Terra

- Source: Google DeepMind (`gemini-3.7-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's Flash workhorse model, positioned for everyday coding, agents and reliable multi-step execution.
- **Provider / access:** Google Gemini API / Vertex AI, `gemini-3.7-flash`.
- **Release / knowledge:** released 2026-08-13 according to Google's launch post; cutoff not verified.
- **IDs:** `google/gemini-3.7-flash` (no Zen Free ID verified).
- **Context window:** 1M tokens and 64K maximum output, per the Google DeepMind model card.
- **Modalities:** Text, image, audio, and video input; text output (Google DeepMind model card).
- **Pricing (as of 2026-09-18):** Introductory $0.75 input / $3.75 output per 1M tokens through 2026-12-31; $1.50/$7.50 from 2027-01-01 (Google DeepMind model card).
- **Architecture:** proprietary; parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- Google launch post: GDP.pdf **34.0%** (Google-reported), versus 22.0% for Gemini 3.6 Flash.
- Terminal-Bench 2.1: **85.8%**; Terminal-Bench 3.0: **14.9%** (Google DeepMind model card).
- AutomationBench: **30.4%** (private enterprise-workflow set); GDPval-AA v2: **1525 Elo**; Harvey LAB-AA: **90.7%** (Google DeepMind model card).
- OSWorld-2.0: **47.9%**; Agent's Last Exam: **26.3%** pass rate (Google DeepMind model card).
- Tau3-Banking / Tau2-Bench, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: the Google model card does not publish result rows for these suites.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56** (Google DeepMind model card).
- HLE-Verified: **53.6%**; BioMysteryBench: **87.1%** human-solvable / **43.5%** human-difficult; LABBench2: **82.1%** (Google DeepMind model card).
- CharXiv: **84.5%** without tools and **88.7%** with tools (Google DeepMind model card).
- GPQA Diamond, LCR / MLCR, CritPt, and Omniscience: no result rows are published in the Google model card.

Coding:

- FrontierCode 1.1 Main: **43.6%**; DeepSWE v1.1: **65.3%**; Code Arena: **1588 Elo** (Google DeepMind model card).
- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode / AA-SciCode, and Vibe Code Bench: no result rows are published in the Google model card.

Long context:

- GDM-MRCR v2 (8-needle): **97.0%** at 128K average; LVBench long-video understanding: **85.4%** (Google DeepMind model card), alongside the documented 1M-token window.

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 at 85.8%, GDPval-AA v2 at 1525 Elo, and Harvey LAB-AA at 90.7% are strong; the lower 14.9% Terminal-Bench 3.0 and 47.9% OSWorld-2.0 results cap it.
- **Reasoning: 88/100.** HLE-Verified at 53.6%, an AA Intelligence Index of 56, CharXiv up to 88.7%, and strong scientific-task results support a high score; GPQA and other cross-lab reasoning rows are absent.
- **Context window: 98/100.** The documented 1M context and 97.0% GDM-MRCR v2 at 128K support a near-ceiling score; public retrieval data at the full 1M length is absent.
- **Multimodal: 92/100.** Native text, image, audio, and video input with 85.4% LVBench long-video performance is broad coverage; output is text-only.
- **Coding: 90/100.** DeepSWE v1.1 at 65.3%, Terminal-Bench 2.1 at 85.8%, FrontierCode at 43.6%, and Code Arena 1588 provide direct evidence; public SWE-bench and LiveCodeBench rows are absent.
- **Cost efficiency: 90/100.** Introductory $0.75/$3.75 per 1M tokens is strong Flash-tier value, though the documented price doubles in 2027 and access is not free.
- **Overall Score: 91/100.** Mean of the five quality dimensions: (87 + 88 + 98 + 92 + 90) / 5 = 91.0; best for long-context, multimodal agent workflows when Google's managed platform is suitable.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-18
- Method: public internet research using Google DeepMind, Google Cloud and Gemini API documentation; scores are normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
