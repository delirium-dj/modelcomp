# GPT-6 Astra — findings by Grok 4.6

- Source: OpenAI (`openai/gpt-6-astra`; OpenCode Zen `opencode/gpt-6-astra`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI’s GPT-6 flagship for hardest end-to-end reasoning, coding, computer use, research, and document/slide creation. Distinct from GPT-5.6 Sol/Terra/Luna; not a Free-tier SKU.
- **Provider / access:** OpenAI API `gpt-6-astra` on Chat Completions (`v1/chat/completions`) and Responses (`v1/responses`). OpenCode Zen `opencode/gpt-6-astra`. Reasoning effort: `low` / `medium` / `high` / `xhigh` / `max`. Fast mode at 2× Standard price.
- **Release / knowledge:** API announced 2026-09-03, API ID 2026-09-04; knowledge cutoff **2026-04-30** (OpenAI API model page).
- **IDs:** `openai/gpt-6-astra`; Zen `opencode/gpt-6-astra`. No Zen Free ID; Free API tier “Not supported”.
- **Context window:** 1,050,000 total / 128,000 max output (OpenAI API docs, models.dev). Prompts >272K input use 2× input/cache and 1.5× output for the full request.
- **Modalities:** Text in/out; **image input only**; audio and video **not** native. Function calling, structured outputs, web/file search, code interpreter, hosted shell, apply patch, MCP, computer use, tool search; image generation as a Responses tool (not native multimodal out).
- **Pricing (as of 2026-09-19):** Standard **$10.00 in / $1.00 cached / $12.50 cache write / $50.00 out** per 1M tokens. Batch/Flex 50% of Standard; Fast 2×. Zen lists **$10.00 / $50.00**. Paid.
- **Architecture:** Proprietary closed weights (OpenAI GPT-6 line). Param count not disclosed.

### Raw benchmarks found

> OpenAI launch table (max at any effort) vs BenchLM / Artificial Analysis. LLMPodium SWE/LiveCode figures marked provisional (not on the OpenAI card).

Agent / tool use:

- Terminal-Bench 2.1: **87.3%** (Vals / BenchLM).
- Terminal-Bench 4.0: **57.9%** (OpenAI launch; AA article cites **59%** / **56%** in Coding Agent Index).
- Terminal-Bench Science 0.1: **64.6%** (OpenAI).
- Tau3-Banking: **41.4%** (AA / BenchLM).
- GDPval-AA: **1562–1580 Elo** (BenchLM lists both 1562 Briefcase-adjacent and 1580 GDPval-AA); percent row **54.0%** also listed — treat Elo as the AA scale.
- OSWorld 2.0: **72.6%** (BenchLM; LLM-stats notes offline partial).
- AutomationBench-AA: **68.5%** (AA article **69%**; BenchLM AutomationBench **41.4%** — different harness).
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon: **no verified public score found**.
- SWE Atlas Codebase QnA: AA article SWE-Atlas-QnA **62%** (Coding Agent Index component).

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI); AA-GPQA Diamond **96.1%** (BenchLM).
- HLE: **57.2%** w/ tools (OpenAI); AA-HLE **54.7%** (BenchLM).
- LCR / MLCR: AA-LCR **80.7%**; MLCR-AA **35.0%** (BenchLM).
- CritPt: **31.7%** (BenchLM).
- Artificial Analysis Intelligence Index: **61.2** (OpenAI table v4.1.1); BenchLM also lists **52.8%** on a percent-scaled AA Index row — prefer the 61.2 index points from the launch table.
- Omniscience Accuracy / Hallucination Rate: **62.6% / 51.3%** (AA-Omniscience, BenchLM); internal hallucination bench **4.2%** (OpenAI, lower-better, not the AA rate).
- ARC-AGI-2: **95.0%**; ARC-AGI-1 **98.5%**; ARC-AGI-3 **99.9%** Responses harness (OpenAI) vs **62.7%** (BenchLM — harness split).

Coding:

- SWE-bench Verified: **no verified public score found** on the OpenAI card. LLMPodium **90.2%** — provisional, unverified here.
- LiveCodeBench: **no verified public score found** on the OpenAI card. LLMPodium **76.2%** — provisional.
- SciCode / AA-SciCode: **56.5%** (BenchLM).
- Vibe Code Bench: **no verified public score found**.
- DeepSWE v1.1: **74.1%** (OpenAI / BenchLM). AA Coding Agent Index cites a lower DeepSWE **68%** in Codex — harness note.
- AA Coding Index: **76.9%**; Coding Agent Index v1.4: **67.0** (OpenAI) / AA article Codex **62**.
- FrontierCode 1.1 Main / Extended: **53.3% / 64.5%** (OpenAI).

Long context:

- OpenAI MRCR v2 8-needle: **100.0%** at 256K–512K; **96.3%** at 512K–1M (BenchLM / DataCamp; OpenAI table). AA-LCR **80.7%**. Window **1.05M**.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Overall Score = mean of the five quality
> dimensions — Cost efficiency is scored independently and excluded from Overall.

- **Tool use: 91/100.** Independent TB2.1 87.3% is on the ~88%+ frontier ref; OSWorld 72.6% and TB4.0 lead (57.9%) are strong. Caps: Tau3-Banking 41.4% under the ~50%+ ref, GDPval Elo ~1580 vs ~1750+, missing Claw-Eval.
- **Reasoning: 94/100.** GPQA Diamond 96% and HLE 54.7–57.2% plus Intelligence Index 61.2 meet frontier GPQA 90%+ / HLE 40%+ / Index 60+. Caps: CritPt 31.7%, MLCR 35%, AA Omniscience hallucination 51.3%.
- **Context window: 98/100.** 1.05M is the ≥1M tier; MRCR 100% at 256K–512K is elite, but 512K–1M is **96.3%** (methodology 100 only if ≥98% at 512K+).
- **Multimodal: 68/100.** Official: image in, text out; audio/video unsupported. Maps to “+image in = 60–70”; image-gen is a tool, not native non-text model output, so not the 90–100 band.
- **Coding: 91/100.** DeepSWE 74.1% and SciCode 56.5% hit frontier DeepSWE 74%+ / SciCode 55%+; TB2.1 87.3% and Coding Index 76.9% support 90–100. Caps: FrontierCode Main 53.3%, AA Codex DeepSWE 68%, no OpenAI-card SWE-Verified/LiveCode.
- **Cost efficiency: 30/100.** Standard **$10 / $50** matches the methodology $10/$50 ≈30 band. Cache reads at $1 help long sessions but do not change the evaluated list price. Not a Free tier.
- **Overall Score: 88/100.** Mean of (91 + 94 + 98 + 68 + 91) / 5 = 88.4 → **88** half-up. Best-fit: paid flagship for 1M-context computer-use/coding when image-in is enough; too expensive for bulk Flash work and not an omni A/V model.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: public internet research (OpenAI API docs, openai.com launch post, BenchLM, Artificial Analysis article, models.dev, DataCamp); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
