# Gemini 3.6 Flash — findings by Cat Jam

- Source: Google / Gemini 3.6 Flash (`opencode/gemini-3.6-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Previous 3.x Flash workhorse (released 2026-07-21, retired 2026-11-19; superseded by 3.8 Flash). Good token efficiency and tool use; 1M context.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3.6-flash`), Vertex AI, Gemini Enterprise; requests auto-route later to 3.8. Free tier (data consent).
- **Release / knowledge:** Released 2026-07-21; retirement 2026-11-19; knowledge cutoff Mar 2026 (domains limited to Jan 2025).
- **IDs:** `gemini-3.6-flash` (Google), OpenRouter `google/gemini-3.6-flash`
- **Context window:** 1,048,576 tokens; max output 65,536. Verified.
- **Modalities:** Text, image, video, audio, PDF in; text out. Thinking (low/medium/high; minimal unsupported). Computer use preview, code execution, function calling, search grounding, structured output.
- **Pricing (as of 2026-10-16):** Intro through 2026-12-31: $0.75/$3.75 per 1M input/output; free tier. Standard from 2027-01-01: $1.50/$7.50. Batch/flex discounts.
- **Architecture:** Proprietary; based on 3.5 Flash. No open weights.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83.0%** (Meta/Google table, vs 78.4 for 3.5)
- GDPval-AA v2: **1421** Elo (vs 1349)
- Terminal-Bench 2.1: AA 77.5%, Vals 73.8%
- Terminal-Bench 4.0: 7.1% (AA measured)
- AutomationBench? not clearly tabled for 3.6
- MLE-Bench: 63.9% (model card)
- τ³-banking? benchmark table not includes for 3.6; AA shows 29.9% for Flash high in OpenRouter summary (maybe)
- Computer use? OSWorld 83.0; Toolathlon? not found.

Reasoning / knowledge:

- AA Intelligence Index (high): 34.0
- GPQA Diamond: 92.8% (AA high) / Vals 93.4%
- HLE: 40.8% (AA high)
- AA-LCR: 80.0%
- MRCR 128k 91.8%, 1M pointwise 54.0%
- CharXiv reasoning 85.2/89.4
- GDP.pdf? 28? or 22? Actually 3.7 Flash table for GDP.pdf 34.0; 3.6 maybe 22.0? In 3.7 card says 3.6 22.0. Use not in sampled 3.6 card? Model card 3.6 table only metrics above; no GDP.pdf. We won't copy 22 maybe no verified. Good.
- Omniscience? not found.
- CharXiv no tools 85.2, with tools 89.4

Coding:

- DeepSWE v1.1: **49%** (model card) (vs 37%)
- SWE-Bench Pro: 58.7%
- Terminal-Bench 2.1: 78.0 (model card) / AA 77.5
- LiveCodeBench (Vals): 88.1
- SWE-bench (Vals): 79.6
- Vals Index 55.4
- Vibe Code Bench v1.1 (Vals): 64.0
- MLE-Bench 63.9

Long context:

- GDM-MRCR v2 8-needle 128k 91.8%, 1M (pointwise) 54.0%

### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld 83.0, GDPval 1421, MLE-Bench 63.9, TB2.1 78.0. Good agent support; TB4 7.1 caps.
- **Reasoning: 82/100.** GPQA 92.8, HLE 40.8, AA Index 34, LCR 80.0, MRCR 1M 54.0 caps; GPQA strong, HLE only moderate vs 3.7/3.8.
- **Context window: 92/100.** 1M with MRCR 91.8 at 128k and 54.0 at 1M.
- **Multimodal: 90/100.** Text/image/video/audio/PDF in; text out. CharXiv 89.4 (with tools), OSWorld 83, LVBench? not tabled (was for 3.7), audio supports. Good multimodal breadth.
- **Coding: 82/100.** DeepSWE 49, SWE-Pro 58.7, TB2.1 78, Vals LiveCodeBench 88.1, SWE-vals 79.6; TB4 7.1 caps.
- **Cost efficiency: 96/100.** $0.75/$3.75 intro + free tier (data consent); value Flash.
- **Overall Score: 86/100.** Mean of (86 + 82 + 92 + 90 + 82) / 5 = 86.4. Direct predecessor to 3.7/3.8; good multimodal/long context and cost; lower coding/agentic than 3.8.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Google AI docs, Google DeepMind model card, OpenRouter, Whattobe done).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
