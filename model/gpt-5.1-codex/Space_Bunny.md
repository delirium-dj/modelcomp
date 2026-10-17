# GPT-5.1-Codex — findings by Space Bunny

- Source: OpenAI (`gpt-5.1-codex`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex
- **Short description:** OpenAI's Codex-tuned agentic coding model — a version of GPT-5.1 optimised for repository edits, code review and software-engineering agents rather than general chat. It is a distinct SKU with its own snapshot lifecycle, not an alias of `gpt-5.1`. OpenAI's own model page now marks it **Deprecated**, superseded by GPT-5.1-Codex-Max (SWE-bench Verified 77.9% vs this model's 73.7%).
- **Provider / access:** OpenAI **Responses API only** (`v1/responses`) — `gpt-5.1-codex`. Chat Completions, Realtime, Batch, Assistants, fine-tuning and embeddings are all explicitly unsupported, which makes it the narrowest-integration model in this dataset. Single rolling snapshot `gpt-5.1-codex` (no dated variants). Not listed in the OpenCode Zen catalogue (Zen carries `gpt-5-codex`, not the 5.1 variant).
- **Release / knowledge:** released **2025-11-13**; knowledge cutoff **2024-09-30** — the oldest cutoff of any model researched in this batch, and roughly two years stale as of 2026-10.
- **IDs:** `gpt-5.1-codex` (OpenAI first-party, snapshot and alias are the same string). No Free tier ID exists anywhere.
- **Context window:** **400,000 tokens** input, **128,000** max output — verified from OpenAI's model docs and OpenCode Data. No 1M tier; GPT-5.1-Codex-Max's cross-window compaction, which is what makes millions of tokens workable, is a Max-only capability and is **not** present here.
- **Modalities:** text + image in, text out; reasoning token support with configurable `reasoning.effort`; supported tools limited to `function_calling` and `web_search` (no file_search, code_interpreter, apply_patch, image generation, MCP or code-execution tools — those belong to base GPT-5.1). Streaming, structured outputs, prompt caching supported. No audio, no video.
- **Pricing (as of 2026-10-17):** **$1.25 input / $0.125 cached input / $10.00 output per 1M tokens.** Paid. Identical to GPT-5-Codex and to base GPT-5.1. Artificial Analysis blended 7:2:1 rate: **$1.34** per 1M. Zen/OpenCode Data list the same $1.25 / $10.00.
- **Architecture:** proprietary; OpenAI has not disclosed parameter count or MoE topology.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **52.8%** at high reasoning effort (OpenAI's official Codex-Max appendix table; the same table gives Max **58.1%**)
- SWE-Lancer IC SWE: **66.3%** (OpenAI official; Max = 79.9%)
- Supported tool surface: `function_calling` + `web_search` only — the narrowest tool set of any model in this batch
- Terminal-Bench 4.0 (AA): no verified public score published for this model
- MCP-Atlas: no verified public score found for the `gpt-5.1-codex` snapshot
- GDPval-AA / Tau2 / Tau3 / Toolathlon / Claw-Eval: no verified public score found for this model

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **24 (estimated)** at high effort — well behind Claude Opus 5 (50), Claude Opus 4.7 (41) and o3 (20); AA labels it "Estimate (independent evaluation forthcoming)"
- Humanity's Last Exam: **26%** (Artificial Analysis, high effort)
- CritPt: **6%** (Artificial Analysis)
- AA-Omniscience index: **−7** — a *negative* score, meaning more incorrect than correct answers on the knowledge-reliability set; o3 is −16, Command A+ −4
- AA-LCR v1.1 (long context): **69%**
- LLM Stats Score: **29.4 (#143 of ~250)**, Reasoning index **29.6 (#136)**; Math Index **95.7 (#10)**; AIME 2025 **#10**; MMLU-Pro **0.9 (#24)**; GPQA **0.9 (#88)**; LiveCodeBench **0.8 (#19)**; SciCode **0.4 (#159)**; IFBench **0.7 (#67)**; HLE **0.3 (#106)**
- **Conflicting GPQA Diamond figures:** LLM Stats / CloudPrice report **~0.90 (#88)**; Serenities AI reports **65.0% (#93/140)**; Vals AI does not publish GPQA for this model. A 65% GPQA Diamond would sit below Gemini 3 Flash (90.4%) and near GPT-4.1-class results, which is implausible for a 2025 frontier coding model — the ~90% figure is treated as the reliable one and the 65% as a mis-scoped aggregator artifact.

Coding:

- SWE-bench Verified (n=500): **73.7%** at high effort (OpenAI official; GPT-5.1-Codex-Max = 77.9%)
- LiveCodeBench: **85.55% ±1.00** (Vals AI, **#31 of 143**), independently consistent with LLM Stats' 0.8 (#19)
- Vibe Code Bench v1.1: **13.12% ±3.16** (Vals AI, **#91 of 112**) — a severe weakness, and the clearest signal that this model's coding strength is narrow repository patching rather than open-ended "vibe" generation
- SciCode: **0.4 (#159)** per LLM Stats — poor on scientific coding
- SWE-bench Pro / DeepSWE / CursorBench: no verified public score found for this model
- Chatbot Arena Elo: **1395 (#18 of 74)** (Serenities AI, via LMSYS blind head-to-head) — the only human-preference datapoint found

Long context:

- AA-LCR v1.1: **69%** (Artificial Analysis) — mid-pack; o3 scores 75% on the same eval with a 200K window
- MRCR / RULER / GraphWalks: no verified public score found for this model
- No compaction capability: the 400K window is a hard ceiling for a single task

Multimodal:

- Input: text + image. Output: text only. No audio, no video, no image generation.
- MMMU-Pro / MMMU / CharXiv: no verified public score found for this model

Speed (independent):

- ~**85 tokens/s** output, **400 ms** time-to-first-token (Serenities AI aggregates); LLM Stats reports p95 latency 3.00 s and 50.0 char/s

### Normalized scores (1–100)

- **Tool use: 72/100.** The model is purpose-built for agentic coding and shows it where it counts — SWE-Lancer IC SWE 66.3% is a genuinely hard freelance-work simulation, and Terminal-Bench 2.0 52.8% beats several general flagships of the same era. Capped at 72 because the *shipped* tool surface is only `function_calling` + `web_search` (no file search, no code interpreter, no MCP, no apply_patch), no MCP-Atlas or Tau-bench figure was ever published for this snapshot, and the AA-Omniscience index of −7 signals real reliability problems when it has to know something rather than read it from a repo.
- **Reasoning: 78/100.** Solid, clearly above mid-tier: HLE 26%, Math Index 95.7 (#10), AIME 2025 #10, MMLU-Pro #24, LiveCodeBench #19, AA Intelligence Index 24 at high effort. Held well below the frontier by CritPt at 6%, HLE at 26% (vs Claude Opus 5's 54%), and an AA index that is an *estimate* rather than a completed independent evaluation.
- **Context window: 72/100.** A real 400,000-token window with 128,000 max output and AA-LCR at 69% — but in a dataset where Opus 4.7, Opus 5, Gemini 3.1 Pro and Nemotron 3.5 Super VL all run at 1M, 400K is a meaningful downgrade, and unlike GPT-5.1-Codex-Max this model has **no compaction**, so long tasks simply fail at the ceiling instead of rolling over.
- **Multimodal: 55/100.** The minimum honest band: text and image in, text out, reasoning on — so it is not text-only, but there is no audio, no video, no image or file generation, and no published MMMU-Pro/CharXiv evidence of vision quality. Restricted further by the fact that on a Responses API route this model cannot call the code interpreter or file-search tools that would make image and file reasoning useful in practice.
- **Coding: 76/100.** Strong where it was aimed: SWE-bench Verified 73.7% at high effort and LiveCodeBench 85.6% (#31) are respectable frontier-adjacent results, and Arena Elo 1395 (#18) confirms real human preference. Capped well below the leaders because Vibe Code Bench is 13.1% (#91/112) and SciCode is #159 — the model is a precise repository patcher, not a general coder — and because OpenAI has already superseded it with Codex-Max, whose 77.9% / 79.9% / 58.1% sweep it loses on every axis.
- **Cost efficiency: 52/100.** $1.25 in / $10.00 out sits mid-table: cheaper than Claude Opus 4.7/4.8/5 at $5/$25, dearer than Gemini 3.5 Flash ($1.50/$9 is similar but the Flash line is far cheaper on input), GPT-5.6 Luna ($0.20/$1.20) and every open-weight Nemotron/Qwen/DeepSeek tier. The $10 output rate is brutal for a reasoning model that thinks at length on agentic coding loops.
- **Overall Score: 71/100.** Mean of the five non-cost dims (72 + 78 + 72 + 55 + 76) / 5 = 70.6, half-up to 71. Best-fit recommendation: a narrow, well-priced choice for Teams/ChatGPT-Codex users who want a dedicated repository-editing and code-review agent on the Responses API and do not need long context, broad multimodality, or a maintained model — for anything else, GPT-5.1-Codex-Max or a current frontier model is the better buy.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17
- Method: public internet research across OpenAI's official model documentation (`developers.openai.com/api/docs/models/gpt-5.1-codex` and the `.md` variant, which carries the full endpoint/feature/price table), OpenAI's GPT-5.1-Codex-Max launch post (the authoritative source for this model's SWE-bench Verified, SWE-Lancer and Terminal-Bench figures), Artificial Analysis comparison pages for GPT-5.1 Codex at high effort, Vals AI's model profile, LLM Stats and CloudPrice index rankings, OpenCode Data, and Serenities AI's aggregate. Conflicting third-party numbers (GPQA Diamond 65% vs ~90%, Gemini-family figures bleeding across model IDs, and the absence of any MCP-Atlas or Tau-bench row for this snapshot) were identified and resolved in favour of OpenAI primaries plus Vals AI / Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.