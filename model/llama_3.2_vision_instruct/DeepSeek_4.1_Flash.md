# Llama 3.2 11B Vision Instruct — findings by DeepSeek 4.1 Flash

- Source: Meta / Llama 3.2 11B Vision Instruct (`llama_3.2_vision_instruct`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-09-25)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). This pass scores the **11B** size (not the 90B sibling) and reconciles the prior file, which leaned on a deprecated BenchmarkList page whose rows disagreed sharply with the vendor card. Sources used: (1) Meta's official Hugging Face model card for `meta-llama/Llama-3.2-11B-Vision-Instruct` (vendor numbers, retrieved 2026-10-11); (2) Artificial Analysis model page `llama-3-2-instruct-11b-vision` (independent composite); (3) IDP Leaderboard `llama-3-2-vision-11b` (independent document-AI harness); (4) RankedAGI `llama-3.2-(vision)-11b` (independent aggregator). **Conflicts surfaced:** GPQA Diamond is reported at 32.8 by Meta but 26.0 by RankedAGI; AA Intelligence Index is given as 5 (v4.3.2, estimate) here vs the prior file's 3.33 on an older index version; IDP lists release as 2025-09-25 while Meta and every other source say 2024-09-25 (IDP typo). Where the vendor card and independent aggregators differ, both are shown and Reasoning/Coding are nudged up only to the degree the newly retrieved vendor rows support it.

## Model card

- **Name:** Llama 3.2 11B Vision Instruct (`llama-3.2-11b-vision-instruct`); trackers shorten it to Llama 3.2 11B Vision or Llama 3.2 Instruct 11B (Vision). No "Free" wording — gated open weights, no Zen Free ID.
- **Short description:** Meta's 11B-parameter (10.6B) instruction-tuned vision-language model from the Llama 3.2 generation, the lighter sibling of the 90B Vision Instruct. It is the oldest entry in this comparison; its text reasoning is far behind current frontier models, but it remains a widely served, cheap image-understanding and OCR baseline.
- **Provider / access:** gated open weights (`meta-llama/Llama-3.2-11B-Vision-Instruct`, Llama 3.2 Community License) on Hugging Face (~64k downloads/month as of 2026-10-11); also served through third-party endpoints (Artificial Analysis and RankedAGI both list an OpenAI-compatible hosted route). No Zen Free ID.
- **Release / knowledge:** released 2024-09-25 (Meta model card; Artificial Analysis; RankedAGI — IDP's 2025-09-25 is a typo). Knowledge cutoff 2023-12 (Meta: "December 2023").
- **IDs:** `llama_3.2_vision_instruct` (project slug / `opencode/llama_3.2_vision_instruct` in `meta.json`); HF `meta-llama/Llama-3.2-11B-Vision-Instruct`.
- **Context window:** 128K tokens (Meta model card; this folder's `meta.json`). No retrieval measurement published by Meta.
- **Modalities:** text and image in; text out; no reasoning mode, no audio or video input. Tool/function calling is not a first-class feature of this generation and no tool-use benchmark is published for it.
- **Pricing (as of 2026-10-11):** $0.345 in / $0.345 out per 1M on the tracked hosted route (Artificial Analysis median across providers, matches prior BenchmarkList row); RankedAGI lists a lower $0.19/$0.19 route. Open weights make self-hosting free, subject to the Llama 3.2 Community License.
- **Architecture:** 11B-parameter (10.6B) dense model built on Llama 3.1 with a separately trained cross-attention vision adapter (Meta Llama 3.2 family, GQA); gated community licence, not Apache/MIT.

### Raw benchmarks found

Agent / tool use:

- RankedAGI Agentic: **30.9%** (independent composite, 2026-04-11 snapshot) — the only agentic-style number; no Terminal-Bench/Tau/OSWorld row exists for the 11B.
- Tau2-Bench Telecom / Terminal-Bench Hard / Tau3-Banking / GDPval-AA / OSWorld / Claw-Eval / MCP-Atlas: no verified public score found (Meta publishes none; the prior file's 14.6%/0.8% came from a deprecated BenchmarkList page that this pass could not re-retrieve — 404).

Reasoning / knowledge:

- MMLU (CoT): **73.0%** (Meta model card, text-general) — corroborated by RankedAGI MMLU 73.0%.
- GPQA Diamond: **32.8%** (Meta card, 0-shot) vs **26.0%** (RankedAGI) — harness conflict, both shown.
- MATH (CoT, Final_em): **51.9%** (Meta card); RankedAGI Math **43.2%**.
- RankedAGI Reasoning **29.7%**; Hugging Face Open LLM benchmark MATH Level 5 **22.0%** (prior pass).
- Artificial Analysis Intelligence Index: **5** (v4.3.2, estimated / independent evaluation forthcoming) vs prior file's **3.33** on an older index version; AA Class rank #56/74.
- MGSM (CoT): **68.9%** (Meta card, multilingual).
- HLE / AA-Omniscience accuracy / hallucination rate / CritPt: no verified public score found (AA shows no public API and marks CritPt "under review").

Coding:

- RankedAGI Coding: **27.7%** (independent composite).
- SciCode: prior pass cited 11.2% from a deprecated BenchmarkList page — not re-verified this pass.
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / DeepSWE / Vibe Code Bench / Aider: no verified public score found.

Multimodal:

- MMMU (val, CoT): **50.7%** (Meta card, 11B); MMMU-Pro Standard **33.0%**; MMMU-Pro Vision **23.7%** (Meta card).
- ChartQA (test, CoT): **83.4%**; DocVQA (test): **88.4%** ANLS; AI2 Diagram **91.1%**; TextVQA (val) **73.1%**; VQAv2 (test) **75.2%**; MathVista **51.5%** (all Meta model card, instruction-tuned 11B).
- IDP Leaderboard overall **50.8%** (#24/29; KIE 76.1, OCR 65.8, Table 41.1, VQA 51.5); OlmOCR Bench 44.6; OmniDocBench 44.6.
- Prior pass: Visual-Language Understanding 20.5% (2nd percentile), OpenVLM 57.7, MechVQA 25.5%, PhysicsMind 47.5% — carried forward as weaker cross-harness rows.

Long context:

- No vendor retrieval benchmark. Prior AA-LCR 15.7% (28th percentile) is the only long-context datapoint; AA's v4.3.2 LCR row is not public for this model this pass — treat the 128K window as nominally large but weakly retrieved.

### Normalized scores (1–100)

- **Tool use: 25/100.** RankedAGI Agentic 30.9% is a low composite and no Terminal-Bench/Tau/OSWorld/GDPval row is published; function calling is not a first-class feature of this generation. Unchanged from the prior pass.
- **Reasoning: 38/100.** Raised from 30: Meta's own card shows MMLU 73.0% and MATH 51.9%, with GPQA Diamond 32.8%, sitting just below the 60–80% mid band but far above the prior degenerate BenchmarkList rows. The AA Intelligence Index of 5 and RankedAGI Reasoning 29.7% keep it well short of the mid band.
- **Context window: 52/100.** 128K maps to the middle of the 100K–200K tier (50–64); no retrieval measurement is published, so the lower half of that tier stands. Unchanged.
- **Multimodal: 60/100.** Image in / text out is the 60–70 band's floor, and the strong vendor vision rows (DocVQA 88.4, AI2D 91.1, ChartQA 83.4, MMMU 50.7) are offset by weak MMMU-Pro Vision 23.7, IDP table extraction 41.1, and no audio/video input. Unchanged.
- **Coding: 38/100.** Raised from 32: RankedAGI Coding 27.7% plus MATH 51.9% and no verified SWE-bench/LiveCodeBench/SciCode result keeps it far below the mid coding band (65–75), but above the prior pass's unsupported fetch.
- **Cost efficiency: 90/100.** $0.345/$0.345 per 1M is cheap per token (RankedAGI even lists $0.19/$0.19) and the gated community weights cost nothing to self-host, but the licence gate and the lack of a free Zen tier keep it below the 97–99 band. Unchanged.
- **Overall Score: 43/100.** (25 + 38 + 52 + 60 + 38) / 5 = 42.6 → 43. Best fit: legacy, cheap image captioning/VQA/OCR at small scale — a 2024-generation vision baseline, not a competitive agentic or coding model in 2026.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: public internet research (Meta Llama-3.2-11B-Vision-Instruct Hugging Face model card; Artificial Analysis `llama-3-2-instruct-11b-vision`; IDP Leaderboard `llama-3-2-vision-11b`; RankedAGI `llama-3.2-(vision)-11b`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
