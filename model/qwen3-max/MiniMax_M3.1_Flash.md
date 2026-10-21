# Qwen 3 Max — findings by MiniMax M3.1 Flash

- Source: Alibaba (Qwen3 Max), `qwen3-max`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3 Max
- **Short description:** Alibaba's September 2025 proprietary flagship (closed weights, no public checkpoint) — 262K context, thinking-mode capable, priced at $1.20/$6.00 per 1M, now a legacy tier behind Qwen 3.6/3.7/3.8 Max. Its measured profile is modest for a flagship: AA Intelligence Index 15.6, HLE 11.9%.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3-max`, also `qwen3-max-preview`; OpenAI-compatible base `https://dashscope-intl.aliyuncs.com/compatible-mode/v1`), OpenCode Zen `opencode/qwen3-max`, third-party routes `Qwen/Qwen3-Max` (DeepInfra/Eden AI), `alibaba/qwen3-max` (Cloudflare AI Gateway), `qwen/qwen3-max` (Merge Gateway). **Not on OpenRouter.**
- **Release / knowledge:** GA **2025-09-23**; preview `qwen3-max-preview` on 2025-09-05. Knowledge cutoff not published.
- **IDs:** `qwen3-max` (Model Studio / Zen), `qwen3-max-preview` (legacy preview), `Qwen/Qwen3-Max` (third-party closed-weights route).
- **Context window:** **262,144** tokens, **65,536** max output (models.dev canonical across 13 providers; DeepInfra/Eden list 256,000). AA says 260k; BenchLM lists 1M — conflicts noted.
- **Modalities:** text in / text out.
- **Pricing (as of 2026-10-20):** **$1.20/M in, $6.00/M out** (Alibaba international); AIHubMix $0.45/$2.70, LLM Gateway $0.85/$3.38, several resellers $0.36/$1.43. The claimed tiering above 32K/128K could not be verified — Alibaba's `qwen3-max` doc page 404s and the model is no longer in Model Studio's text-generation list.
- **Architecture:** proprietary, closed weights — there is **no** open checkpoint (the HF `Qwen` org has no Max repo).

### Raw benchmarks found

> The base `qwen3-max` is non-reasoning; a separate **Qwen3 Max Thinking** release (2026-01-26, AA Intelligence Index 21) is the reasoning variant and is a different entry.

Reasoning / knowledge:

- GPQA Diamond: **76.4%** (AA) · HLE: **11.9%** (AA) · LiveCodeBench: **76.7%** (AA) · AIME 2025: **80.67%** (AA)
- Artificial Analysis Intelligence Index: **15.6 (estimated)**, #45/296 among non-reasoning models · AA-LCR: **50.0%** · CritPt: **0%** · IFBench: **44.1%** · Tau2-bench: **74.3%**
- Omniscience Index / Accuracy / Hallucination Rate: **−43.5 / 24.4% / 89.9%** (AA) · Terminal-Bench Hard: **20.5%** (AA) · MMLU-Pro: **78.0%** (AA)
- BenchLM overall: **39.53/100**, #144 of 972 (12 of 668 benchmarks covered) · Gert Labs: **43.74%** · Vibe Code Bench v1.1: **3.51%** (Vals)
- SWE-bench Verified / Terminal-Bench 2.x / MMMU-Pro / AIME (official): **no verified public score found** in any Model Studio doc, model card, tracker or gateway listing

Agent / tool use:

- Tau2-bench: **74.3%** (AA) · Terminal-Bench Hard: **20.5%** (AA) · GDPval-AA: no verified public score found (AA field null) · OSWorld / AutomationBench / Toolathlon / MCP-Atlas: no verified public score found

Coding:

- LiveCodeBench: **76.7%** (AA) · Vibe Code Bench v1.1: **3.51%** (Vals) · SWE-bench: no verified public score found

Long context:

- No MRCR / RULER measurement published for Qwen3 Max.

### Normalized scores (1–100)

- **Tool use: 48/100.** Tau2-bench 74.3% shows decent tool calling, but Terminal-Bench Hard is 20.5% and there is no GDPval, OSWorld or MCP-Atlas number at all.
- **Reasoning: 56/100.** GPQA 76.4%, AIME 2025 80.7%, LiveCodeBench 76.7% and MMLU-Pro 78.0% are mid-band, capped by HLE 11.9%, CritPt 0%, an AA Intelligence Index of 15.6 and an 89.9% hallucination rate.
- **Context window: 70/100.** 262,144 tokens is the 200K–500K tier and no retrieval measurement was published.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 50/100.** LiveCodeBench 76.7% is the only code-facing number, and Vibe Code Bench at 3.51% shows the repo-level weakness.
- **Cost efficiency: 78/100.** $1.20/M in and $6.00/M out is mid-market for a flagship (resellers run $0.36/$1.43).
- **Overall Score: 48/100.** Mean of the five quality dims = (48 + 56 + 70 + 15 + 50) / 5 = 47.8 → **48**. Best fit: reference only — the Max tier has moved on to Qwen 3.6/3.7/3.8 Max, and the base model is deprecated on Artificial Analysis.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Alibaba Cloud Model Studio listings, models.dev canonical entries, Artificial Analysis, BenchLM + Vals AI, Hugging Face API, OpenRouter API, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
