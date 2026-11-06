# Mistral Large 3 — findings by GLM 5.3 Flash

- Source: Mistral/mistral-large-3 (`mistral-large-2512`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral's first granular MoE since Mixtral — a 675B/41B-active open-weight multimodal flagship released as part of the Mistral 3 family (2025-12-02). Now **deprecated (2026-10-31)** in favor of Mistral Large 4. Use cases: general chat, multilingual assistants (40+ languages), image understanding, enterprise fine-tuning base.
- **Provider / access:** Mistral AI Studio (`mistral-large-2512`, Chat Completions + Agents/Conversations APIs); at launch also Amazon Bedrock, Azure Foundry, IBM watsonx, OpenRouter, Fireworks, Together AI, Modal, Hugging Face; NVIDIA NIM "coming soon" at launch. Vendor docs mark the model **Deprecated — use Mistral Large 4 for new integrations** (deprecation date 2026-10-31).
- **Release / knowledge:** released 2025-12-02 (v25.12); knowledge cutoff not published on the consulted vendor pages (no verified public cutoff found).
- **IDs:** `mistral-large-2512` (Mistral API); HF collection `mistralai/mistral-large-3`. Base + instruct checkpoints both Apache 2.0 (a reasoning variant was promised but superseded by Large 4).
- **Context window:** **256K total** per the vendor model card (verified 2026-11-06); BenchLM lists 128K — vendor page takes precedence, discrepancy noted. Max output not published on consulted pages.
- **Modalities:** text + image in; text out. Function calling yes; structured outputs yes; document QnA; no audio/video in.
- **Pricing (as of 2026-11-06):** $0.50/M input, $1.50/M output (Mistral API, as listed at the announcement and on current docs snapshot).
- **Architecture:** sparse (granular) MoE, 41B active / 675B total parameters; trained from scratch on 3,000 NVIDIA H200 GPUs; Apache 2.0 open weights (BenchLM labels it "Proprietary" — vendor license text wins). NVFP4 checkpoint for Blackwell/8×A100–H100 serving via vLLM.

### Raw benchmarks found

Numbers are Artificial Analysis measurements as republished by BenchLM (updated 2026-11-06) unless noted. Vendor-posted benchmarks are chart images without printed values.

Agent / tool use:

- τ²-bench: **24.6%** (AA harness, via BenchLM)
- GDPval-AA: **588** Elo (AA, via BenchLM) — normalized 0.0% on BenchLM's scale
- AA Agentic Index: **2.4%** (AA, via BenchLM)
- Terminal-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **68.0%** (AA, via BenchLM)
- HLE: **4.2%** (AA, via BenchLM)
- AA-LCR: **36.0%** (AA, via BenchLM)
- CritPt: **0.0%** (AA, via BenchLM)
- Artificial Analysis Intelligence Index: **9.3** (AA, via BenchLM)
- Omniscience Accuracy / Hallucination Rate: **25.0% / 86.0%** (AA, via BenchLM — very high hallucination rate)
- LMArena (human preference, at launch 2025-12): **#2 OSS non-reasoning, #6 OSS overall** (vendor-cited, lmarena.ai leaderboard)

Coding:

- AA Coding Index: **20.1%** (AA, via BenchLM)
- AA-SciCode: **36.6%** (AA, via BenchLM)
- SWE-bench Verified / LiveCodeBench / DeepSWE: no verified public score found

Multimodal:

- AA-MMMU-Pro: **55.7%** (AA, via BenchLM)

Long context:

- No long-context retrieval scores (MRCR / RULER / GraphWalks) found — 256K window is vendor-stated only.

### Normalized scores (1–100)

- **Tool use: 33/100.** τ²-bench 24.6%, GDPval-AA 588 Elo and Agentic Index 2.4% are all well below the mid bands (τ² ~10–25% maps to low-50s only with stronger GDPval support); weak agentic evidence caps it.
- **Reasoning: 54/100.** GPQA Diamond 68.0% is upper-mid for an open MoE, and LMArena #6-OSS shows solid human preference, but HLE 4.2%, LCR 36%, CritPt 0% and an 86% hallucination rate keep it mid.
- **Context window: 72/100.** Vendor-stated 256K → the 200K–500K tier (200K ≈ 70, slight step up); no public retrieval-at-length data.
- **Multimodal: 61/100.** Native image understanding with MMMU-Pro 55.7% (mid-pack) → image-in band (60–70), low end.
- **Coding: 45/100.** AA Coding Index 20.1% and SciCode 36.6% are weak and no SWE-bench Verified number exists; nothing justifies the 65–75 mid band.
- **Cost efficiency: 91/100.** $0.50/$1.50 per M tokens for a 675B MoE is strong value, just under the ~$0.60/$2.20 ≈ 92 reference point.
- **Overall Score: 53/100.** (33 + 54 + 72 + 61 + 45) / 5 = 53.0 → 53. Best fit: a deprecated-but-cheap open multilingual multimodal generalist for self-hosting and fine-tuning — new integrations should target Mistral Large 4.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-06
- Method: public internet research (vendor announcement + model card, third-party leaderboard pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Mistral 3 — Mistral announcement (2025-12-02)](https://mistral.ai/news/mistral-3)
  - [Mistral Large 3 model page — Mistral docs (256K, deprecation notice)](https://docs.mistral.ai/models/mistral-large-3-25-12)
  - [BenchLM — Mistral Large 3 benchmark scores (AA-sourced)](https://benchlm.ai/models/mistral-large-3)
  - [Artificial Analysis — Mistral Large 3](https://artificialanalysis.ai/models/mistral-large-3)
  - [LMArena text leaderboard (vendor-cited launch ranking)](https://lmarena.ai/leaderboard/text)
  - [Hugging Face — Mistral Large 3 collection](https://huggingface.co/collections/mistralai/mistral-large-3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
