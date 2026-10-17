# Gemma 4 26B A4B — findings by GLM 5.3

- Source: Google (`gemma-4.26b-a4b`)
- Date: 2026-10-16 (UTC) — re-research of the 2026-10-08 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open-weights MoE (25.2B total / 3.8B active, Apache 2.0) with 256K context and image input — 4B-class inference speed carrying a larger knowledge base; positioned for cheap high-throughput image+text work.
- **Provider / access:** OpenRouter and Bedrock/Snowflake hosted APIs; self-host via Hugging Face `google/gemma-4-26B-A4B`. Project meta lists Zen ID `opencode/gemma-4.26b-a4b` (absent from the live Zen models list when re-checked 2026-10-08 — no Free ID).
- **Release / knowledge:** 2026 (Gemma 4 generation); knowledge cutoff not stated on tracked pages.
- **IDs:** `opencode/gemma-4.26b-a4b` (project meta); Hugging Face `google/gemma-4-26B-A4B`.
- **Context window:** 256,000 (262,144) verified (BenchLM 256K).
- **Modalities:** text and image in; text out; reasoning yes; tool calls yes (τ²-bench measured); JSON mode not verified.
- **Pricing (as of 2026-10-08):** ~$0.09 in / $0.30 out per 1M (OpenRouter), $0.13/$0.40 (Bedrock/Snowflake), self-host $0 under Apache 2.0. No Zen Free ID.
- **Architecture:** 25.2B total / 3.8B active MoE, open weights, Apache 2.0 (project meta; HF model card).

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **43.6%** (Artificial Analysis via BenchLM)
- GDPval-AA: **713** (3.4% normalized) (AA via BenchLM)
- Terminal-Bench / Tau3 / Claw-Eval / Toolathlon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **82.3%** (official HF card) / **79.2%** (AA) (BenchLM)
- HLE: **17.2%** vendor / **19.3%** AA (8.7% without tools) (BenchLM)
- MMLU-Pro: **82.6%** (Gemma 4 26B A4B model card via BenchLM)
- AA-LCR: **65.7%** (AA via BenchLM); MRCRv2 **44.1%** (official HF card — new row this pass)
- CritPt: **0.0%** (AA via BenchLM)
- Artificial Analysis Intelligence Index: **16.7** (AA via BenchLM)
- AA-Omniscience Index: **-50.8** (accuracy 19.1%, hallucination rate 86.4%) (AA via BenchLM)

Coding:

- AA Coding Index: **39.3%** (AA via BenchLM)
- AA-SciCode: **40.0%** (AA via BenchLM)
- LiveCodeBench v6: **77.1%** (official HF model card via BenchLM — new row this pass)
- SWE-bench / DeepSWE: **no verified public score found**

Multimodal:

- MMMU-Pro: **73.8%** (model card) / **69.2%** (AA harness) (BenchLM)

Long context:

- 256K window verified (BenchLM); MRCRv2 **44.1%** (official HF card — new row this pass) is the only retrieval-style measurement — weak; AA-LCR 65.7% is the long-context reasoning proxy.

Instruction following:

- AA-IFBench: **72.4%** (AA via BenchLM)

### Normalized scores (1–100)

- **Tool use: 40/100.** τ²-bench 43.6% and GDPval-AA 713 both sit below the mid band (GDPval mid 900–1200) with no Terminal-Bench/Tau3 coverage — weak agentics despite the high-throughput marketing.
- **Reasoning: 55/100.** GPQA 79.2% and MMLU-Pro 82.6% are respectable for the size, but AA Index 16.7, CritPt 0.0%, HLE ~17–19% and an 86.4% hallucination rate (Omniscience -50.8) cap it hard.
- **Context window: 72/100.** 256K sits in the 200K–500K tier just above the 200K (=70) floor; no verified long-context retrieval quality.
- **Multimodal: 68/100.** Image input verified with MMMU-Pro 73.8/69.2% — solid chart/document vision; capped by text-only output and no video/audio.
- **Coding: 50/100.** Updated 45→50: the new official LiveCodeBench v6 77.1% row is a solid mid-tier result for a 3.8B-active MoE; AA Coding Index 39.3% and SciCode 40.0% with no SWE-bench coverage still cap it at light-duty level.
- **Cost efficiency: 96/100.** ~$0.09/$0.30 per 1M and free Apache 2.0 self-hosting put it at the top of the paid-value band — the model's core selling point.
- **Overall Score: 57/100.** (40 + 55 + 72 + 68 + 50) / 5 = 57 (was 56). Best-fit recommendation: cheap, fast, knowledge-heavy text+image processing at scale (classification, extraction, drafting); not an autonomous agent or primary coder — verify facts, its hallucination rate is severe.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-16 (first researched 2026-10-08)
- Method: public internet research (BenchLM 22-row profile re-checked 2026-10-16 — added the official HF-card rows LiveCodeBench v6 77.1%, GPQA 82.3%, MRCRv2 44.1%; all AA rows stable; BenchLM composite 45.64 #119/954; OpenRouter/Bedrock pricing). Coding 45→50 and Overall 56→57 on the new LCB row. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
