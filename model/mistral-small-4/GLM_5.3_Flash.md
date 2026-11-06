# Mistral Small 4 — findings by GLM 5.3 Flash

- Source: Mistral/mistral-small-4 (`mistral-small-2603`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral's first unified hybrid model — one open-weight MoE combining instruct chat (Small 3.x line), reasoning (Magistral) and agentic coding (Devstral), with configurable `reasoning_effort` and native image input. Top use cases: coding agents, document/visual analysis, and cost-efficient general chat.
- **Provider / access:** Mistral API / AI Studio (`mistral-small-2603`), Chat Completions (`/v1/chat/completions`) plus Agents & Conversations APIs; day-0 NVIDIA NIM and free prototyping at build.nvidia.com (`mistralai/mistral-small-4-119b-2603`); open weights on Hugging Face (`mistralai` Small 4 collection). Also served by vLLM, SGLang, llama.cpp, Transformers.
- **Release / knowledge:** released 2026-03-16; knowledge cutoff not stated on the vendor pages consulted (no verified public cutoff found).
- **IDs:** `mistral-small-2603` (Mistral API); `mistralai/mistral-small-4-119b-2603` (NVIDIA build/NIM); HF collection `mistralai/mistral-small-4`. No OpenCode Zen free ID was checked as part of this research (no Zen listing consulted).
- **Context window:** 256K total (vendor model card, verified 2026-11-06). Max output not published on the consulted pages.
- **Modalities:** text + image in; text out. Function calling yes; structured outputs yes; reasoning configurable (`reasoning_effort="none"` for fast chat, `"high"` for deep reasoning). No audio/video input.
- **Pricing (as of 2026-11-06):** $0.15/M input, $0.60/M output (Mistral API/AI Studio). Open weights under Apache 2.0 — self-hosting at cost possible.
- **Architecture:** MoE, 128 experts with 4 active per token; 119B total parameters, ~6B active (announcement; model card says 6.5B active — both cited, minor vendor discrepancy). Open weights, Apache 2.0.

### Raw benchmarks found

Numbers below are Artificial Analysis measurements as republished by BenchLM (page updated 2026-11-06) unless noted. The vendor blog's benchmark figures are chart images without printed values, so most claims below are third-party measured.

Agent / tool use:

- τ²-bench: **41.2%** (Artificial Analysis harness, via BenchLM)
- GDPval-AA: **537** Elo (AA, via BenchLM) — normalized 0.0% on BenchLM's scale
- AA Agentic Index: **1.4%** (AA, via BenchLM)
- Terminal-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **76.9%** (AA, via BenchLM)
- HLE: **9.9%** (AA, via BenchLM)
- AA-LCR: **49.7%** (AA current version, via BenchLM); vendor blog reports **0.72** on AA LCR with ~1.6K output characters (earlier/newer benchmark version — version ambiguity noted, both cited)
- CritPt: **0.3%** (AA, via BenchLM)
- Artificial Analysis Intelligence Index: **4.3** (AA, via BenchLM)
- Omniscience Accuracy / Hallucination Rate: **21.4% / 66.6%** (AA, via BenchLM)
- AA-IFBench (instruction following): **48.2%** (AA, via BenchLM)

Coding:

- AA Coding Index: **26.6%** (AA, via BenchLM)
- AA-SciCode: **38.8%** (AA, via BenchLM)
- LiveCodeBench: no exact number found; vendor blog claims Mistral Small 4 **outperforms GPT-OSS 120B while producing ~20% less output** (provisional, vendor claim without a printed value)
- SWE-bench Verified / SWE-Pro: no verified public score found

Multimodal:

- AA-MMMU-Pro: **56.8%** (AA, via BenchLM)

Long context:

- No long-context retrieval scores (MRCR / RULER / GraphWalks) found — 256K window is vendor-stated only.

### Normalized scores (1–100)

- **Tool use: 40/100.** τ²-bench 41.2% is respectable for the size class, but GDPval-AA 537 Elo sits far below the ~900–1200 mid band and the AA Agentic Index of 1.4% caps it; no Terminal-Bench or Claw-Eval coverage.
- **Reasoning: 58/100.** GPQA Diamond 76.9% is strong for a 119B-A6B open model (upper-mid band), but HLE 9.9%, CritPt 0.3% and AA Index 4.3 keep it well below frontier; LCR ~50% is mid.
- **Context window: 72/100.** 256K places it in the 200K–500K tier (200K ≈ 70 baseline, modest step up); no public retrieval scores at length to justify more.
- **Multimodal: 62/100.** Native image input with MMMU-Pro 56.8% (mid-pack vision) → image-in band (60–70); no audio/video/PDF-native input.
- **Coding: 50/100.** AA Coding Index 26.6% and SciCode 38.8% are weak, and no SWE-bench Verified number exists; the vendor's LiveCodeBench-beats-GPT-OSS-120B claim (unprinted value) is the only positive signal, kept provisional.
- **Cost efficiency: 93/100.** $0.15/$0.60 per M tokens is near the bottom of the paid market for a multimodal hybrid, just under the ~97–99 band of $0.10/$0.20 models.
- **Overall Score: 56/100.** (40 + 58 + 72 + 62 + 50) / 5 = 56.4 → 56. Best fit: a cheap, open, self-hostable multimodal hybrid for high-volume chat, document understanding and light coding agents — not a frontier reasoning or hard-SWE tool.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-06
- Method: public internet research (vendor announcement + model card, third-party leaderboard pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Mistral Small 4 — Mistral announcement (2026-03-16)](https://mistral.ai/news/mistral-small-4)
  - [Mistral Small 4 model card — Mistral docs](https://docs.mistral.ai/models/model-cards/mistral-small-4-0-26-03)
  - [BenchLM — Mistral Small 4 benchmark scores (AA-sourced)](https://benchlm.ai/models/mistral-small-4)
  - [Artificial Analysis — Mistral Small 4](https://artificialanalysis.ai/models/mistral-small-4)
  - [NVIDIA build — mistralai/mistral-small-4-119b-2603](https://build.nvidia.com/mistralai/mistral-small-4-119b-2603)
  - [Hugging Face — Mistral Small 4 collection](https://huggingface.co/collections/mistralai/mistral-small-4)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
