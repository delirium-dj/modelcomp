# Qwen 3.5 27B — findings by Qwen 3.8 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.5-27B`; curated id `opencode/qwen-3.5-27b`), cross-checked against the Qwen3.5 blog, Hugging Face model card, llm-stats and DeepInfra/Requesty benchmark listings
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** The **dense** (non-MoE) 27B of Alibaba's open-weight Qwen3.5 "Native Multimodal Agents" family — 27B parameters, unified early-fusion **vision-language** (image + video), tuned for agentic/tool work. Released 2026-02-24 under Apache 2.0; runs on a dual-RTX-3090 desktop, and posts an unusually strong τ²-Bench agentic score for its size.
- **Provider / access:** open weights (Hugging Face `Qwen/Qwen3.5-27B`, post-trained Transformers format); hosted on **DeepInfra** ($0.26/$2.60 per 1M) and **Novita** ($0.30/$2.40); GGUF/MLX local builds; official playground chat.qwen.ai.
- **Release / knowledge:** 2026-02-24 (llm-stats); weights on HF 2026-03-09; knowledge cutoff not individually published (Qwen3.5 family).
- **IDs:** `Qwen/Qwen3.5-27B`; siblings: `qwen-3.5-397b`, `qwen-3.5-122b-a10b`, `qwen-3.5-35b-a3b`, `qwen-3.5-9b`, `qwen-3.5-plus`, `qwen-3.5-flash`; superseded on the coding axis by `qwen-3.6-27b` (a separate registry line).
- **Context window:** **262,144 native** (DeepInfra serves 262K in / 262K out; Novita 262K in / 65.5K out), card notes extensible toward ~1M.
- **Modalities:** **multimodal** — text + image input (native VLM, also handles video per the family card), text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-20):** open weights (self-host free); hosted from **$0.26/$2.60 per 1M** (DeepInfra) — a dense-27B compute profile.
- **Architecture:** 27B **dense** transformer, early-fusion unified vision-language foundation (per the card, cross-generational parity with Qwen3 and above Qwen3-VL).

### Raw benchmarks found

> Independent provider/tracker listings (Requesty/DeepInfra + llm-stats); the exact SWE-bench Verified absolute for this checkpoint was not surfaced in these passes and is not fabricated.

Agent / tool use:

- τ²-Bench: **93.9%** (Requesty/DeepInfra listing — standout agentic tool-use score, near the top of the cohort)
- Terminal-Bench **Hard**: **32.6%** (Requesty — a deliberately harder terminal subset, tempers the τ² headline)

Reasoning / knowledge:

- GPQA Diamond: **85.8%** (Requesty/DeepInfra)
- MMLU-Pro: family-reported in the high-80s band for the 27B line

Coding:

- SWE-bench Verified / LiveCodeBench: **no transcribed absolute found** for this exact checkpoint in the sources reviewed (its successor Qwen3.6-27B pushes the dense-27B coding bar; scored conservatively here rather than borrowing the 3.6 number).

Long context / multimodal:

- 262K native (≈1M extensible); native image + video understanding per the model card; **no MRCR/RULER retrieval score published** at the extension.

### Normalized scores (1–100)

- **Tool use: 80/100.** The headline strength — τ²-Bench **93.9** is elite agentic tool-calling for any size class — tempered only by the 32.6 Terminal-Bench-Hard result showing the very hardest long-horizon terminal tasks still slip; net, a top-tier tool-use dense model.
- **Reasoning: 76/100.** GPQA Diamond 85.8 places it near the low-fringe frontier on knowledge-reasoning despite 27B dense; no HLE/Omniscience rows and mid-band MMLU-Pro keep it just under the leaders.
- **Context window: 76/100.** A genuine 262K native window (with ~1M extensibility claimed) is a strong working span, but the extension lacks independent long-context retrieval proof, so it's scored at the verified tier.
- **Multimodal: 72/100.** Real native vision-language (image + video) input in an Apache-2.0 dense checkpoint — well above text-only peers; not higher because audio input and image generation aren't part of this lane.
- **Coding: 66/100.** Capable agentic coder, but with no published SWE-bench/LiveCodeBench absolute for *this* version (and the harder terminal score modest), coding is scored as solid-general rather than a coding specialist.
- **Cost efficiency: 86/100.** Open Apache-2.0 weights on a dual-3090 desktop plus $0.26/$2.60 hosted entry pricing make near-frontier agentic reasoning very cheap to run.
- **Overall Score: 74/100.** Half-up mean of the five quality dims (80+76+76+72+66)/5 = 74. Best fit: **self-hosted multimodal agents and tool-heavy workflows on a budget**, where the elite τ²-Bench agentic capability and 262K window punch well above a 27B's weight — with a coding-specialist (Qwen3.6-27B or the Codex lane) preferred for repo-scale software work.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-20
- Method: public internet research — Qwen3.5 launch blog, Hugging Face `Qwen/Qwen3.5-27B` model card (dense 27B, unified vision-language, 262K), llm-stats (release 2026-02-24, Apache-2.0, multimodal, provider pricing), and Requesty/DeepInfra benchmark listings (τ²-Bench 93.9, GPQA 85.8, Terminal-Bench Hard 32.6). Scores are normalized 1–100 interpretations, not official vendor scores; the missing SWE-bench absolute is flagged as a gap rather than filled with the successor Qwen3.6-27B number. Curated `meta.json` is scaffolded ("128K / Text in-out") and was overridden by first-party evidence (262K native, native multimodal).
- Revisit trigger: a published SWE-bench Verified / LiveCodeBench absolute for this checkpoint, or an Artificial Analysis Intelligence-Index single number.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same headings.
