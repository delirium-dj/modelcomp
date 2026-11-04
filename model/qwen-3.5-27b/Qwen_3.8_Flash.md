# Qwen 3.5 27B — findings by Qwen 3.8 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.5-27B`; curated id `opencode/qwen-3.5-27b`), cross-checked against the Qwen3.5 blog, Hugging Face model card, llm-stats and DeepInfra/Requesty benchmark listings
- Date: 2026-10-20 (UTC); second pass 2026-11-04 (UTC) — **revisit trigger FIRED**: BenchLM (updated Oct 29, 2026) publishes SWE-bench Verified **72.4%** and LiveCodeBench v6 **80.7%** for this exact checkpoint; pass-1 had “no transcribed absolute” → Coding 66→**70**; **Overall 74→75**
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
- **Coding: 70/100.** *(Revised by the 2026-11-04 second pass from 66/100 to **70/100**: BenchLM SWE-V 72.4% and LCB v6 80.7% published for the exact id; SWE-V 72.4 is upper-mid (70–79% ≈ 65–75 band), LCB 80.7 strong contest signal; capped by Terminal-Bench 2.0 41.6% and SWE-Rebench 58.9% below the 80 frontier approach.)*
- **Cost efficiency: 86/100.** Open Apache-2.0 weights on a dual-3090 desktop plus $0.26/$2.60 hosted entry pricing make near-frontier agentic reasoning very cheap to run.
- **Overall Score: 75/100.** *(Revised by the 2026-11-04 second pass from 74/100 to **75/100**: Coding 66→70; half-up mean (80+76+76+72+70)/5 = 374/5 = 74.8 → 75.)* Best fit: **self-hosted multimodal agents and tool-heavy workflows on a budget**, where the elite τ²-Bench agentic capability, 262K window, and genuine SWE-V 72.4% coding punch well above a 27B’s weight — with a coding-specialist (Qwen3.6-27B or the Codex lane) preferred for repo-scale software work.

---

## Second-pass update — 2026-11-04 (UTC)

Staleness-triggered re-research (prior pass 2026-10-20). Revisit trigger **FIRED**.

**Sources:** https://benchlm.ai/compare/qwen3-5-27b-vs-qwen3-6-max-preview (updated Oct 29, 2026; BenchLM comparison page showing Qwen3.5-27B rows: **SWE-bench Verified 72.4%**, **LiveCodeBench v6 80.7%**, SWE-Rebench 58.9%, Terminal-Bench 2.0 41.6%, BrowseComp 61%, OSWorld-Verified 56.2%, Gert Labs 39.41%, GPQA 85.5%, MMLU-Pro 86.1%, LongBench v2 60.6%; multimodal: MMMU 82.3%, MMVU 73.3%, MMMU-Pro 75%, CharXiv 79.5%, MathVision 86.0%, V* 93.7%; instruction following: IFEval 95%; multilingual: MMLU-ProX 82.2%; independent public score 49.01, 20 benchmarks covered) · open weights (Apache 2.0) persist, no lifecycle event · AA Intelligence Index: no direct fetch available for this checkpoint (pass-1 trigger included “or an AA single number” — the BenchLM coding data is sufficient to fire trigger without it).

**Trigger resolution:** the pass-1 revisit trigger required “a published SWE-bench Verified / LiveCodeBench absolute for this checkpoint, or an Artificial Analysis Intelligence-Index single number.” SWE-V 72.4% and LCB v6 80.7% from BenchLM are both published coding absolutes for this exact id. Trigger **FIRED**.

**Band movement — Coding 66→70:** pass-1 scored Coding 66 explicitly because “no transcribed absolute found” (conservative floor). SWE-V 72.4% places the model in the 70–79% band (methodology: 65–75 coding score); LCB v6 80.7% is strong contest coding; Terminal-Bench 41.6% and SWE-Rebench 58.9% keep it below the 75+ frontier approach. Net: 70 — solid general coding for a 27B dense, not a specialist.

**Bands unchanged:** Tool 80 (τ² 93.9 unchanged; BenchLM adds OSWorld 56.2 and BrowseComp 61 — corroborative), Reasoning 76 (GPQA 85.5 vs pass-1’s 85.8 — harness variance within noise, not a downgrade), Context 76, Multimodal 72 (BenchLM visual rows MMMU 82.3 / CharXiv 79.5 confirm pass-1’s native-vision assessment at the same band).

**Overall Score: 75/100** — half-up mean (80+76+76+72+70)/5 = 374/5 = 74.8 → 75.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-20
- Method: public internet research — Qwen3.5 launch blog, Hugging Face `Qwen/Qwen3.5-27B` model card (dense 27B, unified vision-language, 262K), llm-stats (release 2026-02-24, Apache-2.0, multimodal, provider pricing), and Requesty/DeepInfra benchmark listings (τ²-Bench 93.9, GPQA 85.8, Terminal-Bench Hard 32.6). Scores are normalized 1–100 interpretations, not official vendor scores; the missing SWE-bench absolute is flagged as a gap rather than filled with the successor Qwen3.6-27B number. Curated `meta.json` is scaffolded ("128K / Text in-out") and was overridden by first-party evidence (262K native, native multimodal).
- Revisit trigger: a published SWE-bench Verified / LiveCodeBench absolute for this checkpoint, or an Artificial Analysis Intelligence-Index single number.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04. Trigger FIRED (BenchLM SWE-V 72.4, LCB v6 80.7); Coding 66→70; Overall 74→75.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same headings.
