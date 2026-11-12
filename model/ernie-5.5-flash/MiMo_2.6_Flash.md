# ERNIE 5.5 Flash Preview — findings by MiMo 2.6 Flash

- Source: Baidu (`ernie-5.5-flash-preview` Qianfan API / `baidu/ERNIE-5.5-Flash-Base` open Base)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ERNIE 5.5 Flash Preview (free/cheap Flash line from Baidu; "Preview" = intermediate post-training checkpoint)
- **Short description:** Baidu's efficiency-focused 280B-total / 14B-active MoE released 2026-11-11 as the first post-trained model on the ERNIE 5.5 Flash Base (2026-11-05) — text-only, aimed at long-horizon agentic coding, 3D/CAD scripting, knowledge work and video pipelines. It is explicitly an unfinished checkpoint; official release will supersede it.
- **Provider / access:** Baidu Qianfan API (`console.bce.baidu.com/qianfan`, OpenAI-compatible Chat Completions, live 2026-11-10); a free route is listed on OpenRouter (`baidu/ernie-5.5-flash-preview:free`, rate-limited); **no OpenCode Console/Zen ID as of 2026-11-12** (verified against the Console model list). Open Base weights: Hugging Face `baidu/ERNIE-5.5-Flash-Base` (FP8/BF16, SGLang/vLLM `completions` API).
- **Release / knowledge:** Base 2026-11-05; Preview endpoint 2026-11-10, launch post 2026-11-11; Preview weights promised "Apache 2.0 soon" (trade coverage says by 2026-11-25) — not yet on HF as of 2026-11-12; knowledge cutoff not published (no model card).
- **IDs:** `ernie-5.5-flash-preview` (Qianfan), `baidu/ernie-5.5-flash-preview:free` (OpenRouter), `baidu/ERNIE-5.5-Flash-Base` / `...-Base-BF16` (HF); no Zen Free ID.
- **Context window:** 1M tokens (Qianfan spec 1,024,000 input, 921,600 max output, per OrcaRouter's reading of the endpoint sheet; launch post restates 1M). Base trains at 128K and supports 1M for fine-tuning/inference.
- **Modalities:** text in / text out — Baidu states "it is a text-only model and can't see the screen"; in Baidu's own harnesses image understanding was delegated to a tool calling Claude Opus 5.5. Reasoning yes, but Qianfan runs a single mandatory high effort that cannot be turned off; tool calls yes; no model card, so JSON mode undocumented.
- **Pricing (as of 2026-11-12):** Qianfan $0.28 in / $1.13 out / $0.028 cached read per 1M tokens (reasoning tokens billed at output rate); OpenRouter free variant $0 with rate limits; open Base weights $0 download under the restrictive ERNIE 5.5 Flash Base Model License v1.0 (excludes EU/UK/South Korea, ≤ US$50M related revenue free with "Powered by ERNIE" attribution, no distillation).
- **Architecture:** 280B total / 14B active sparse MoE — 43 layers (1 dense + 42 MoE), 512 routed experts (top-10) + 1 shared per MoE layer, latent experts (4096→2048), hybrid MLA+HCA attention (only 1 layer in 7 keeps token-level context; HCA caches 1 sparse entry per 128 tokens; MLA layers use DSA sparse attention), mHC residual streams, MultiMax output head, ECHO self-drafting speculative decoding, ~200K R2L BPE tokenizer; pre-trained on 33.5T tokens with distributed Muon + FP8.

### Raw benchmarks found

> **All Preview numbers are Baidu's own runs** (launch post appendix, 2026-11-11; transcribed to text by BenchLM and OrcaRouter — the official table ships only as an image). No independent reproduction: no Artificial Analysis row exists for this model as of 2026-11-12. Harnesses named per footnote: Claude Code 2.1.x, mini-swe-agent 2.4.6, Codex 0.162.1, DSH; judges Qwen3.8-Max, DeepSeek-V4.1-Flash-1017, Gemini 3.1 Flash-Lite.

Agent / tool use (Preview, vendor-reported):

- Terminal-Bench 4.0: **46.5%** (Baidu; note: TB 4.0 harness, not the TB 2.1 the methodology references — no TB 2.1 number exists)
- MCP Atlas: **84.6%**
- Toolathlon-Verified: **75.0%** (BenchLM transcription; OrcaRouter reads 79.0 from the same image — disputed row)
- BrowseComp: **87.4%**; AutomationBench: **61.9%**; APEX-Agents 1.1: **64.2%**; DRACO: **84.9%**; CookieBench: **88.2%**; Agents' Last Exam (CLI): **29.0%**; Terminal-Bench-Science 0.1: **21.0%**
- Tau3 / Tau2 / GDPval / Claw-Eval / BFCL: no verified public score found

Reasoning / knowledge (Preview, vendor-reported):

- HLE (w/o tools): **46.4%**
- AA-LCR v1.1: **79.0** (Baidu's run with a DeepSeek-V4-Flash judge — not the Artificial Analysis harness)
- AA-Omniscience-Public: **25.2** (Baidu's run, metric not named in the table)
- GPQA / MMLU-Pro / Intelligence Index: no verified public score found for the Preview (Base checkpoint: GPQA EM 60.2, MMLU-Pro EM 78.4, MMLU 93.3 — few-shot, not chat)

Coding (Preview, vendor-reported):

- DeepSWE v1.1: **71.2%**
- NL2Repo-Bench: **64.8%**; ProgramBench: **29.5%**
- SWE-bench Verified / SWE-Pro / LiveCodeBench: no verified public score found for the Preview (Base checkpoint: HumanEval+ 82.3, MBPP+ 81.5, LiveCodeBench 40.1, RepoBench 50.3 — few-shot base runs)

Knowledge-work / grounded (Preview, vendor-reported): SkillsBench 1.1 text-only **73.5**, OfficeQA Pro v2 **67.9**, SpreadsheetBench V2 **36.4**, BlenderWorld text-only **79.0** (vision rows run with a Claude Opus 5.5 vision tool, so they measure the harness).

Long context: no MRCR/RULER/HELMET row for the Preview (1M advertised). Base checkpoint long-context rows (vendor, same-harness): RepoQA Pass@1 **91.7**, HELMET-RAG SubEM **71.5**, HELMET-ICL **85.9**, LongBench-v2 EM **48.7**, InfiniteBench Avg **46.5**.

### Normalized scores (1–100)

- **Tool use: 75/100.** MCP Atlas 84.6 + Toolathlon ~75 + BrowseComp 87.4 + AutomationBench 61.9 + APEX 64.2 form a genuinely strong agentic profile, and Terminal-Bench 4.0 46.5 is mid-band — but every row is vendor-run, there is no Tau3/GDPval/BFCL anchor, and TB 4.0 is not comparable to the TB 2.1 reference scale, so it stops at 75.
- **Reasoning: 78/100.** HLE w/o tools 46.4 clears the 40%+ frontier reference and AA-LCR 79.0 is strong, but AA-Omniscience 25.2 is mid, both AA rows are Baidu's own runs rather than Artificial Analysis', and no GPQA/Intelligence-Index row exists for the chat model — capped below the 90s pending independent replication.
- **Context window: 95/100.** 1M tokens lands in the ≥1M tier (95–100); it takes the tier floor rather than 100 because no retrieval-at-depth result is published for the Preview (Base shows RepoQA 91.7 at 1M).
- **Multimodal: 15/100.** Text-only in and out — methodology's text-only band; Baidu itself notes vision was handled by calling a Claude Opus 5.5 tool, which scores as tool use, not modality.
- **Coding: 82/100.** DeepSWE 71.2 sits just under the 74%+ frontier reference, with NL2Repo 64.8 and the Base checkpoint's HumanEval+ 82.3 / LiveCodeBench 40.1 supporting the claim; capped below 90 because all numbers are unreproduced vendor runs, Terminal-Bench 4.0 is mid at 46.5, and SWE-bench Verified/Pro rows are missing entirely.
- **Cost efficiency: 92/100.** $0.28/$1.13 sits between the ~$0.10/$0.20 (≈98) and ~$0.60/$2.20 (≈92) reference points with a $0 OpenRouter route available — held to 92 because thinking is mandatory and every reasoning token bills at the $1.13 output rate, which inflates real long-agent task cost, and self-hosting is blocked until the promised Apache 2.0 weights ship.
- **Overall Score: 69/100.** (75 + 78 + 95 + 15 + 82) / 5 = 69.0 → 69 — best-fit: a cheap, fast 1M-context agentic coder/knowledge-worker to trial now via Qianfan or the OpenRouter free route, with text-only input and vendor-only evidence meaning it should sit beside (not replace) a trusted fallback model.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-11-12
- Method: public internet research (vendor launch posts for Preview and Base, two independent benchmark transcriptions of the image appendix, endpoint pricing analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Baidu ERNIE — Introducing ERNIE 5.5 Flash Preview (2026-11-11, spec + benchmark appendix image)](https://ernie.baidu.com/release/ernie-5-5-flash-preview/)
  - [Baidu ERNIE — ERNIE 5.5 Flash Base (2026-11-05, full 30-benchmark text table + architecture)](https://ernie.baidu.com/release/ernie-5-5-flash-base/)
  - [BenchLM — ERNIE 5.5 Flash Preview (17 transcribed benchmark rows, 2026-11-11)](https://benchlm.ai/models/ernie-5-5-flash-preview)
  - [OrcaRouter — ERNIE 5.5 Flash Preview launch post read carefully (20 rows, Qianfan pricing, caveats)](https://www.orcarouter.ai/blog/ernie-5-5-flash-preview-launch-post-benchmarks)
  - [eesel.ai — ERNIE 5.5 Flash: Baidu's 280B base model (license terms, Base analysis)](https://www.eesel.ai/blog/ernie-5-5-flash)
  - [Hugging Face — baidu/ERNIE-5.5-Flash-Base (open Base checkpoint)](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
