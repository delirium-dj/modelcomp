# ERNIE 5.5 Flash Preview — findings by GLM 5.3 Flash

- Source: Baidu (`ernie-5.5-flash-preview` — Qianfan; OpenRouter free lane `baidu/ernie-5.5-flash-preview:free`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ERNIE 5.5 Flash Preview
- **Short description:** Baidu's first post-trained model on the ERNIE 5.5 Flash Base checkpoint (Nov 5): a 280B-total/14B-active sparse MoE with 1M context, 921.6K output ceiling, mandatory high-effort reasoning and strong long-horizon agentic coding (game dev, Blender/CAD 3D modeling, knowledge work, video pipelines). Launched as a billed preview 2026-11-10 with the launch post and 20 benchmark rows following 2026-11-11; weights promised under Apache 2.0 "soon" (the Base ships today under a restricted community licence excluding EU/UK/South Korea).
- **Provider / access:** Baidu Qianfan (billed endpoint, live 2026-11-10) and OpenRouter free lane `baidu/ernie-5.5-flash-preview:free` (no public standard endpoint yet). OpenAI-compatible Chat Completions with `reasoning`/`reasoning_effort`, `response_format` (JSON), and `tools`/`tool_choice`.
- **Release / knowledge:** endpoint live 2026-11-10; launch post 2026-11-11; Base checkpoint announced 2026-11-05 (HF `baidu/ERNIE-5.5-Flash-Base`, 286B params, created 2026-10-21); knowledge cutoff not stated.
- **IDs:** `ernie-5.5-flash-preview` (Qianfan: am-abe18d298d70; OpenRouter `baidu/ernie-5.5-flash-preview`).
- **Context window:** 1,024,000 (1M) total; 921,600 max output (endpoint spec — the largest published output ceiling tracked here); cached input reads $0.028/1M. The folder meta's 131,072-output figure understates the endpoint spec.
- **Modalities:** Text in, text out — explicitly text-only ("it can't see the screen"); vision-dependent tasks are handled through a tool powered by Claude Opus 5.5 (per Baidu's own benchmark footnote). Mandatory reasoning at a single high effort level (cannot be disabled — all thinking is billed at the output rate). No image/audio/file input, no non-text output.
- **Pricing (as of 2026-11-11):** $0.28 in / $1.13 out per 1M (Qianfan, ~2/8 CNY), cached reads $0.028; off-peak/promotional ~1/4 CNY (~$0.14/$0.56) per the folder's curated tiers; free on the OpenRouter `:free` lane during preview.
- **Architecture:** sparse MoE, 280B total / 14B active; HCA + MLA-DSA attention (Base: 37 of 43 layers attend over a 128×-compressed sequence, 6 full MLA-DSA layers); 33.5T tokens pretraining; vendor-cited >200 tok/s decoding. Baidu's own caution: "an intermediate checkpoint from post-training… because training is not finished, some capabilities may still fall short."

### Raw benchmarks found

All 20 rows are vendor-reported (Baidu's own harnesses — Claude Code 2.1.x, mini-swe-agent 2.4.6, Codex 0.162.1, DSH — with judge models Qwen3.8-Max, DeepSeek-V4.1-Flash-1017, Gemini 3.1 Flash-Lite), published as an image table in the official launch post, and unreproduced by any third party as of 2026-11-11:

- Agentic coding: Terminal-Bench 4.0 **46.5**, DeepSWE v1.1 **71.2**, ProgramBench (Almost Solved) **29.5**, NL2Repo-Bench **64.8**, Terminal-Bench-Science 0.1 **21.0**
- Computer use / automation: CookieBench **88.2**, AutomationBench **61.9**, APEX-Agents 1.1 **64.2**, DRACO **84.9**
- Knowledge work: SpreadsheetBench V2 **36.4**, OfficeQA Pro V2 **67.9**, Agents' Last Exam (CLI) **29.0**, SkillsBench 1.1 text-only **73.5**
- General agents / tool use: Toolathlon-Verified **79.0**, MCP-Atlas **84.6**, BrowseComp **87.4**
- Reasoning: HLE without tools **46.4** (footnoted), AA-Omniscience-Public **25.2**, AA-LCR v1.1 **79.0**
- 3D: BlenderWorld text-only **79.0**
- Context: comparison set in the table: GPT-6.1 Sol, Claude Opus 5.5, GLM-5.3, GLM-5.3-Flash, DeepSeek-V4.1-Flash-1017, Hy4; SWE-bench Verified / LiveCodeBench / GPQA: no verified public score found; no independent Artificial Analysis row exists yet

Long context:

- no long-context retrieval reported (1M window official; the Base release notes 6 MLA-DSA layers keeping long-context performance strong, but no MRCR/RULER number is published for the Preview)

### Normalized scores (1–100)

- **Tool use: 88/100.** Broad agentic-tool strength across independent harness families: MCP-Atlas 84.6, Toolathlon-Verified 79.0, BrowseComp 87.4, CookieBench 88.2, DRACO 84.9, AutomationBench 61.9 — with the caveat that vision-dependent rows measure the harness (Claude Opus 5.5-powered tool), not the model alone.
- **Reasoning: 73/100.** AA-LCR v1.1 79.0 and OfficeQA Pro V2 67.9 are solid; HLE no-tools 46.4 is respectable; AA-Omniscience-Public 25.2, Agents' Last Exam CLI 29.0 and TB-Science 21.0 expose real reasoning gaps — all Baidu-run and unreproduced.
- **Context window: 96/100.** 1M total with a 921.6K output ceiling — the top published tier and the largest output cap tracked here; no retrieval measurement keeps it below 100.
- **Multimodal: 18/100.** Text-only input and output by design; the BlenderWorld 79.0 text-only row shows strong visual-construction-through-code, but native image understanding is absent (delegated to an external tool) — bottom text-only band.
- **Coding: 78/100.** DeepSWE v1.1 71.2 and Terminal-Bench 4.0 46.5 (above Haiku 5.5's 39.2 and GPT-6 Luna's 16.4 on the same benchmark) show genuinely strong long-horizon agentic coding; ProgramBench 29.5 and TB-Science 21.0 cap the single-shot/Science side.
- **Cost efficiency: 93/100.** $0.28/$1.13 per 1M with $0.028 cached reads sits between the ~$0.10/$0.20=97–99 and $0.60/$2.20≈92 anchors; the free OpenRouter preview lane helps, but mandatory reasoning means every thinking token bills at the output rate — the token-per-task cost is unpublished.
- **Overall Score: 71/100.** Mean of the five non-cost dims (88+73+96+18+78)/5 = 70.6. Best-fit recommendation: a strong cheap long-horizon agentic coder for text-only pipelines (game dev, Blender/CAD scripting, report generation) — with the explicit caveats that every number is vendor-reported and unreproduced, the checkpoint is officially intermediate, and thinking cannot be turned off.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-11
- Method: public internet research (official Baidu ERNIE release post, Qianfan/OpenRouter endpoint listings, OrcaRouter's independent read of the 20-row benchmark table and endpoint spec); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Baidu — Introducing ERNIE 5.5 Flash Preview (official release post + benchmark appendix)](https://ernie.baidu.com/release/ernie-5-5-flash-preview/)
  - [Baidu — ERNIE 5.5 Flash Base release (predecessor checkpoint, architecture)](https://ernie.baidu.com/release/ernie-5-5-flash-base/)
  - [OrcaRouter — ERNIE 5.5 Flash Preview: launch post, twenty benchmarks and a weights promise (independent analysis)](https://www.orcarouter.ai/blog/ernie-5-5-flash-preview-launch-post-benchmarks)
  - [OpenRouter — baidu/ernie-5.5-flash-preview API listing](https://openrouter.ai/baidu/ernie-5.5-flash-preview)
  - [Hugging Face — baidu/ERNIE-5.5-Flash-Base (open base weights)](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
