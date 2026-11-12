# LongCat 2.5 Preview — findings by MiniMax M3.1 Flash

- Source: Meituan LongCat (`LongCat-2.5`, GA id measured; folder tracks the preview line)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview (folder display name; the model now measured behind it is the **LongCat-2.5 GA**)
- **Short description:** Meituan's native multimodal MoE (1.6T total / ~48B active) for long-horizon agentic coding, released **2026-11-02** with **MIT-licensed open weights** — the successor to the API-only `LongCat-2.5-Preview` this folder was created for. **Identity note:** the folder's original preview slot (`opencode/longcat-2.5-preview-free`) was retired and replaced by the Zen slot `opencode/longcat-2.5-free` (canonical id `meituan/longcat-2.5`, release_date 2026-11-02), so every benchmark number below is measured on the GA id **`LongCat-2.5`**, the model the preview slot now serves.
- **Provider / access:** **Meituan LongCat API Platform** (model id `LongCat-2.5`; OpenAI-compatible and Anthropic-compatible request formats) and **OpenCode Zen** `opencode/longcat-2.5-free` — Chat Completions at `https://opencode.ai/inference/openai/v1/chat/completions`. Weights: `huggingface.co/meituan-longcat/LongCat-2.5` (MIT, 208 safetensors shards, ~3.56 TB stored), also on ModelScope; NPU deployment documented via SGLang-FluentLLM.
- **Release / knowledge:** GA **2026-11-02** (LongCat platform changelog; Zen release_date 2026-11-02); Hugging Face repo created 2026-11-04, last modified 2026-11-10. Training-data cutoff not published.
- **IDs:** `meituan/longcat-2.5` (Zen canonical id), `opencode/longcat-2.5-free` (Zen free slot), `LongCat-2.5` (LongCat API Platform), `meituan-longcat/LongCat-2.5` (Hugging Face). The earlier `opencode/longcat-2.5-preview-free` id is **deprecated**; `longcat-2.5` as a standalone slug is a retired phantom in the repo roster — research belongs in this folder.
- **Context window:** **1,048,576 / 1M tokens** total with **262,144 (256K) max output** on the Zen slot (live models endpoint); the platform API lists the same 1M / 256K envelope. Verified by the vendor's own eval settings: DeepSWE v1.1 ran with `max_seq_length = 1M`, Terminal-Bench with 512K, HLE with 256K max generation.
- **Modalities:** text and image in (native visual modeling, native-resolution features converted to discrete tokens; the released chat message format also carries a `video_url` content type), text out; thinking mode on/off via `enable_thinking`, `reasoning_content` preserved, tool calling with a `tool_choice`/`tools` schema; no audio.
- **Pricing (as of 2026-11-12):** Zen slot **$0 in / $0 out** (free, limited time, **100 requests per day**, provider is **zero-retention** and does not train on prompts, but it is **hosted in China**). LongCat platform pay-as-you-go: **$0.30 in / $0.006 cached read / $1.20 out** per 1M tokens (limited-time price; the GA is now the platform's only pay-as-you-go model).
- **Architecture:** native multimodal **Mixture-of-Experts, 1.6T total / ~48B active per token** (HF safetensors metadata reports ~1.78T parameters including the vision tower and embeddings), built on LongCat-2.0 and LongCat-Next; hybrid thinking/non-thinking; W4A4 expert quantization (FlatQuant-style) with W4A4KV8 KV-cache quantization for serving efficiency; long-context SFT with supernode-aware parallelism.

### Raw benchmarks found

> All rows are from the **vendor's own model card** (Hugging Face `meituan-longcat/LongCat-2.5`, 2026-11-10) — Meituan-run evals unless marked with an asterisk as cited from a public leaderboard. Harness and sampling settings are the vendor's, and are stated per row where the card states them. Thinking was on, temperature 1.0, top_p 0.95 throughout.

Agent / tool use:

- Terminal-Bench 2.1: **88.4** (Claude Code v2.1.280, 512K max sequence, mean of three runs) — the vendor's own number; Terminal-Bench 4.0: **38.5** (same harness)
- AutomationBench v1.0.6: **51.8** (all 600 public tasks, official evaluation code)
- MCP Atlas: **83.1** (reasoning effort "max", temperature 0.7, 256K context)
- Claw-Eval (Pass^3): **78.3**; LongCatClawBench (FORTE): **83.3**
- JobBench: **65.4** (Claude Code v2.1.280, official LLM-as-judge protocol); SkillsBench v1.1: **63.3** (Codex harness, 87 tasks)
- GDPVal-AA rubrics: **84.8** (rubric score, not an ELO)
- Toolathon: **no verified public score found**; Tau2 / Tau3 Banking: **no verified public score found**

Reasoning / knowledge:

- HLE (with tools): **63.1** (Claude Code v2.1.116, max generation 256K)
- BrowseComp: **91.9** (custom lightweight harness, Discard-All threshold 256K, up to 1,024 exploration rounds)
- ResearchRubrics: **81.0**; FrontierScience: **77.0**; ALE v1.1: **38.5**
- FinSearchComp (T3): **63.4**; SpreadsheetBench 2: **34.9**
- MathVision (with tools): **96.5**; CharXiv-RQ (with tools): **90.2**
- GPQA Diamond / HLE text-only / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (BenchLM lists the model with 25 provider-run rows, unranked — no index value published)

Coding:

- Terminal-Bench 2.1: **88.4** (as above); Terminal-Bench 4.0: **38.5**
- DeepSWE v1.1: **64.6** (mini-swe-agent, 1M max sequence, mean of three runs)
- SWE Atlas — Codebase QnA: **58.3**, Refactoring: **55.2**, Test Writing: **47.8** (Claude Code v2.1.116, Claude Opus 4.5 judge, majority vote over three judgments)
- NL2Repo: **60.5** (Claude Code v2.1.280); ProgramBench (Almost Resolved): **25.5** (same harness)
- PaperBench: **82.1**; LongCat AppDev (internal): **73.7** (vendor-internal, not comparable)
- SWE-bench Verified / SWE-Pro: **no verified public score found**; LiveCodeBench / SciCode: **no verified public score found**

Long context:

- BrowseComp **91.9** at up to 1,024 exploration rounds with a 256K Discard-All threshold; ResearchRubrics **81.0**; FrontierScience **77.0**
- RULER / MRCR / AA-LCR / LongBench v2: **no verified public score found** (no published long-context retrieval row for this id)

Visual:

- VideoMME: **85.2** (up to 2,048 frames at 1 fps, 256 tokens per frame)
- Vision2Web: **78.6** (Claude Code v2.1.7, 256K sequence); PosterBench: **77.4**
- LongCatClawBench-MM (FORTE-MM): **72.1**; 3DCodeBench (text-to-3D): **55.4**
- MMMU-Pro: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 at 88.4 (Claude Code harness, three-run average) is the frontier reference itself, and it is backed by MCP Atlas 83.1, Claw-Eval 78.3, FORTE 83.3, JobBench 65.4 and AutomationBench 51.8; the score stops short of the top of the band because AutomationBench (51.8) is mid-tier and there is no public Tau2/Tau3 or Toolathon row.
- **Reasoning: 84/100.** HLE with tools 63.1, BrowseComp 91.9, MathVision with tools 96.5, ResearchRubrics 81.0 and FrontierScience 77.0 are strong long-horizon-reasoning evidence, capped by the absence of any GPQA Diamond, text-only HLE, CritPt or independent AA Index number and by mid-tier SpreadsheetBench 2 (34.9).
- **Context window: 96/100.** A vendor-published 1M-token window with 256K max output, exercised in the vendor's own DeepSWE run at 1M and Terminal-Bench at 512K; held below 100 because no published retrieval-at-length probe (RULER/MRCR/AA-LCR) exists for this model.
- **Multimodal: 84/100.** Native visual modeling with image and video input and real numbers — VideoMME 85.2, CharXiv-RQ 90.2, Vision2Web 78.6, PosterBench 77.4, FORTE-MM 72.1 — lands it in the video/PDF-in band, short of the 90+ tier because MMMU-Pro is unreported and the strongest visual rows carry tools.
- **Coding: 80/100.** Terminal-Bench 2.1 88.4 and PaperBench 82.1 are frontier-grade, but DeepSWE 64.6 and SWE-Atlas 47.8–58.3 are mid-tier, ProgramBench is 25.5 and Terminal-Bench 4.0 38.5, and no SWE-bench Verified or LiveCodeBench row is published at all.
- **Cost efficiency: 100/100.** The evaluated Zen tier is $0 in / $0 out (limited time, 100 requests/day) with zero-retention; the China-hosting caveat is noted and the paid platform price of $0.30/$1.20 recorded as the fallback.
- **Overall Score: 86.8/100.** Mean of the five non-cost dimensions (90 + 84 + 96 + 84 + 80) / 5 — best fit as a long-horizon, multimodal, tool-heavy open-weight coder on a temporary free tier, with SWE-bench Verified and long-context retrieval as the two missing measurements.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research (Meituan LongCat model card and blog, Hugging Face API and README, LongCat platform changelog and pricing docs, OpenCode Zen model endpoint and docs, BenchLM index); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [LongCat-2.5 model card — Meituan LongCat on Hugging Face](https://huggingface.co/meituan-longcat/LongCat-2.5)
  - [LongCat-2.5 technical blog](https://longcat.ai/blog/longcat-2.5/)
  - [LongCat platform changelog](https://longcat.ai/platform/docs/change-log)
  - [LongCat platform pricing — LongCat-2.5](https://longcat.ai/platform/docs/pricing/longcat-2.5)
  - [OpenCode Zen model list, free-tier and privacy notes](https://opencode.ai/docs/zen)
  - [OpenCode live model endpoint (metadata, ids, limits, prices)](https://opencode.ai/inference/v1/models)
- Future sources: add a new file next to this one, e.g. `LongCat_2.5_Tech_Report.md`, using the same headings.

---

## Archived research pass — `MiniMax_M3.1_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `MiniMax_M3.1_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## LongCat 2.5 Preview — findings by MiniMax M3.1 Flash

> SELF-EXCLUDED REPORT — no scored findings file is provided for this model.
> LongCat 2.5 Preview is a real hosted API product, but **zero verified public
> benchmark numbers** were ever published for it (no model card, no technical
> report, no tracker entries). Per the project template
> (`model-report-TEMPLATE.md`, "SELF-EXCLUSION") this file is saved as
> `MiniMax_M3.1_Flash.md.excluded`: it is skipped by `pnpm sync` (never parsed,
> averaged or registered) and contains only the negative findings.
>
> **Folder note:** this folder (`model/longcat-2.5-preview/`, hyphenated) is the
> canonical slug for the model, but a near-duplicate folder
> `model/longcat_2.5_preview/` (underscored, 28 findings files) also exists.
> Both describe the same Meituan preview; merging the two needs user sign-off.

- Source: Meituan (LongCat 2.5 Preview, hosted API), `meituan/longcat-2.5-preview`
- Archived date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's hosted-API preview of the LongCat 2 generation — released **2026-09-25** with a new image-understanding path and "superior coding capability", served at $0.30/$1.20 per 1M with a free OpenCode Zen slot. **API-only: no weights, no model card, no technical report, and no published benchmark numbers.**
- **Provider / access:** LongCat API Platform (`https://api.longcat.chat/openai/v1` and `/anthropic/v1`, model `LongCat-2.5-Preview`), Vercel AI Gateway (`meituan/longcat-2.5-preview`), NanoGPT, **OpenCode Zen `longcat-2.5-preview-free`** (free, limited time, zero-retention provider). Not on OpenRouter, not on Artificial Analysis, not on BenchLM.
- **Release / knowledge:** **2026-09-25** (LongCat platform change log "LongCat-2.5-Preview Now Available"). Knowledge cutoff not published.
- **IDs:** `LongCat-2.5-Preview` (Meituan API), `meituan/longcat-2.5-preview` (Vercel/NanoGPT canonical), `longcat-2.5-preview-free` (Zen).
- **Context window:** **1,048,576** tokens, **131,072** max output (LongCat quick-start: "1M token context window with a maximum output length of 128K tokens"; Vercel gateway and models.dev agree).
- **Modalities:** text and image input, text output; thinking on by default (switchable), tool calling; video listed on some third-party pages.
- **Pricing (as of 2026-10-20):** **$0.30/M in, $0.006/M cached read, $1.20/M out** (limited-time promo; list $0.75/$2.95) — https://longcat.chat/platform/docs/pricing/longcat-2.5
- **Architecture:** not published. The widely repeated "~1.6T total / ~48B active MoE" is inference from LongCat 2.0's lineage, not a Meituan figure for 2.5.

## Raw benchmarks found

> No standard benchmark row exists for LongCat-2.5-Preview on any source. The checks
> and the two third-party data points below are listed so the absence is auditable.

- Artificial Analysis: no model page — `https://artificialanalysis.ai/models/longcat-2-5-preview` → **404** (verified live 2026-10-21)
- BenchLM: no model page — `https://benchlm.ai/models/longcat-2-5-preview` → **404** (verified live 2026-10-21); only `longcat-2-0` is tracked
- OpenRouter: `https://openrouter.ai/meituan/longcat-2.5-preview` → 404 (only `meituan/longcat-2.0` is listed)
- Hugging Face: no `LongCat-2.5*` repository; the `meituan-longcat` org ships Flash/2.0/Image/Video/Audio only
- Explicit vendor-side silence: "Meituan published no benchmarks for this preview" (BenchmarkList, 0 rows); "Meituan has not yet published a full technical report with independently verifiable benchmark numbers" (explainx.ai, 2026-10-20 review)
- Terminal-Bench / Tau2 / Tau3 / GDPval / GPQA / HLE / LCR / MRCR / SWE-bench / LiveCodeBench / DeepSWE / MMMU-Pro: **no verified public score found**
- Only third-party evaluations that exist (not standard benchmarks): AI Coding Daily coding leaderboard **46.65/70, rank #44** (evaluated 2026-10-02, agent OpenCode) and a TOKRACE micro-suite (15/15 text tasks, 2/3 JS coding tasks, 4/8 SVG renders).

#### Negative findings summary

- No verified public benchmark exists for this preview; only one niche coding leaderboard row and a small independent test suite.
- No parameter count, architecture, model card or weights are published.
- The nearest **real** neighbouring model for orientation only (not used as a proxy): **LongCat 2.0** (MIT, 1.6T/48B active, 1M context) with its own card numbers — Terminal-Bench 2.1 70.8 (self-reported) vs 50.19% (AA), SWE-bench Pro 59.5, GPQA-D 88.9 vs 77.98%.

---
