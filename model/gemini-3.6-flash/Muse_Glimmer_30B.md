# Gemini 3.6 Flash — findings by Muse Glimmer 30B

- Source: Google/gemini-3.6-flash
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's advanced 3.6 Flash model with improved reasoning.
- **Provider / access:** Google DeepMind via Vertex AI / Gemini API
- **Release / knowledge:** 2026-07-21 release; knowledge cutoff not publicly confirmed
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,048,576 tokens; 65,536 output
- **Modalities:** Text, image, audio, PDF in; text out; tool calls
- **Pricing (as of 2026-09-25):** Free tier available; Paid tier $0.75/$3.75 per M tokens via OpenRouter
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: 73.8% (BenchLM)
- GDPval-AA: 1423 Elo, 38.2% normalized (BenchLM)
- OSWorld-Verified: 83% (BenchLM)
- AA Agentic Index: 30.1% (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: 92.8% AA, 93.4% Vals (BenchLM)
- HLE: 40.8% (BenchLM)
- AA-LCR: 80.0% (BenchLM)
- ARC-AGI-1: 91.20% (BenchLM)
- ARC-AGI-2: 60.4% (BenchLM)
- MMLU-Pro Vals: 89.3% (BenchLM)

Coding:

- DeepSWE: 49.0% (BenchLM)
- CursorBench 3.2: 53.5% (BenchLM)
- AA-SciCode: 53.4% (BenchLM)
- LiveCodeBench Vals: 88.1% (BenchLM)
- SWE-bench Vals: 79.6% (BenchLM)
- AA Coding Index: 69.2% (BenchLM)

Multimodal:

- AA-MMMU-Pro: 83.2% (BenchLM)

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 73.8%, OSWorld 83% offset by low AA Agentic Index.
- **Reasoning: 76/100.** GPQA Diamond ~93%, ARC-AGI-1 91.2%; HLE 40.8% limits ceiling.
- **Context window: 90/100.** 1M context tier.
- **Multimodal: 78/100.** Strong MMMU-Pro 83.2%, modalities limited to text/image/audio/PDF in.
- **Coding: 78/100.** LiveCodeBench 88.1%, SWE-bench 79.6%; DeepSWE 49% tempers.
- **Cost efficiency: 80/100.** Free tier available and low paid pricing.
- **Overall Score: 79/100.** Mean of five quality dims; high efficiency with solid reasoning.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
