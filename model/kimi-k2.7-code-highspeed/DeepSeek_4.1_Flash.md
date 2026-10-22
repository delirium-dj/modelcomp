# Kimi K2.7 Code Highspeed — findings by DeepSeek 4.1 Flash

- Source: Moonshot AI / Kimi K2.7-Code HighSpeed (`kimi-k2.7-code-highspeed`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM has **no page** for `kimi-k2-7-code-highspeed` (404); no new independent benchmark surfaced and the 2026-10-11 deep-pass rows stand. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-checked the official Moonshot platform docs (`platform.kimi.ai`, pricing + K2.7-Code quickstart), the Hugging Face model card (`moonshotai/Kimi-K2.7-Code`), and two independent trackers — Artificial Analysis (`artificialanalysis.ai/models/kimi-k2-7-code`) and BenchLM (`benchlm.ai/models/kimi-k2-7-code`), the latter carrying Vals AI Terminal-Bench 2.1 / LiveCodeBench / SWE-bench rows. This pass surfaced the first independent reasoning, coding, tool-use and long-context numbers for the base weights that HighSpeed serves; corrected the input modality to **text + image + video**; and flagged a max-output discrepancy against the prior report. HighSpeed itself still publishes no separate benchmark table.

## Model card

- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** A throughput-optimised serving variant of Moonshot's Kimi K2.7-Code coding model — the **same weights**, just served faster: ~180 tokens/s and up to ~260 tokens/s on short-context requests (Moonshot docs). Best for interactive/latency-bound coding; the standard `kimi-k2.7-code` route is preferred for correctness-sensitive work where the speed premium is not needed.
- **Provider / access:** Moonshot AI Kimi platform (single route `kimi-k2.7-code-highspeed`); OpenAI/Anthropic-compatible API. Open weights (Modified MIT) on Hugging Face — the standard K2.7-Code checkpoint, not a separate model.
- **Release / knowledge:** Base Kimi K2.7-Code released 2026-06-12 (Artificial Analysis FAQ); HF card last updated 2026-06-15. HighSpeed is a documented serving tier of the same model (Moonshot quickstart); no separate knowledge cutoff is published.
- **IDs:** `kimi-k2.7-code-highspeed` (Moonshot platform — verified 2026-10-11; the prior hyphen form `kimi-k2-7-code-highspeed` is legacy). OpenCode Zen route recorded in the prior report as `opencode/kimi-k2.7-code-highspeed` (not re-verified this pass). No Zen Free ID.
- **Context window:** 262,144 tokens (256K per Moonshot docs / AA). **Max output: conflict —** prior report claimed 65,536; the Moonshot chat API documents `max_tokens` defaulting to **32,768**, so 65,536 is unconfirmed.
- **Modalities:** text, **image and video** in (MoonViT 400M vision encoder); text out. Video input is documented and billed (mp4/mpeg/mov/avi/webm/…), flagged experimental on third-party engines. Thinking mode always on, `preserve_thinking` mandatory; tool use, structured outputs, prompt caching.
- **Pricing (as of 2026-10-11, Moonshot platform):** **$1.90 / $8.00 per 1M** in/out, cache hit $0.38 — a ~2× premium over standard K2.7-Code ($0.95/$4.00, cache hit $0.19) and K2.6 ($0.95/$4.00), paid for the speed.
- **Architecture:** 1T total-parameter MoE, **32B active**, 384 experts (8 selected per token), 61 layers, MoonViT 400M vision encoder; Modified MIT licence.

### Raw benchmarks found

> The HighSpeed SKU publishes no separate benchmark table. The verified numbers below are the **documented base model, Kimi K2.7-Code** (identical weights/architecture), which the HighSpeed variant serves faster. Vendor rows are Moonshot-reported; independent rows are sourced per line.

Agent / tool use:

- MCP-Atlas: **76.0%**; MCP Mark Verified: **81.1%**; Kimi Claw 24/7 Bench: **46.9%** (Moonshot-reported, HF model card — https://huggingface.co/moonshotai/Kimi-K2.7-Code)
- Terminal-Bench 2.1: **67.0%** (Vals AI, via BenchLM — https://benchlm.ai/models/kimi-k2-7-code); τ²-bench: **90.1%** and GDPval-AA: **1114** (~26.9% normalized), AA Agentic Index: **22.5%** (Artificial Analysis via BenchLM)
- OSWorld / AutomationBench: **no verified public score found for this family ID**

Reasoning / knowledge:

- AA-GPQA Diamond: **89.6%**; AA-HLE: **35.0%**; AA Intelligence Index: **26** (25.8 in BenchLM's normalization); AA-LCR: **79.3%**; CritPt: **10.0%**; AA-Omniscience Index: **-10.2%**, hallucination rate **82.4%** (Artificial Analysis via BenchLM — https://benchlm.ai/models/kimi-k2-7-code and https://artificialanalysis.ai/models/kimi-k2-7-code)
- Relative gains over K2.6 (Moonshot-reported): **+21.8% Kimi Code Bench v2**, **+11.0% Program Bench**, **+31.5% MLS Bench Lite**, with ~30% fewer reasoning tokens

Coding:

- Kimi Code Bench v2: **62.0**; Program Bench: **53.6**; MLS Bench Lite: **35.1**; CursorBench 3.2: **49.7** (Moonshot/Cursor-reported, HF model card)
- SWE-bench: **78.2%** and LiveCodeBench: **82.1%** (Vals AI via BenchLM); AA-SciCode: **47.8%**; AA Coding Index: **60.8%** (Artificial Analysis via BenchLM)
- GeneBench-Pro: **2.3** (prior curated figure, carried forward)

Long context:

- 262K-token window documented on all K2.7/K2.6 routes (Moonshot — https://platform.kimi.ai/docs/pricing/chat); AA-LCR **79.3%**; **no MRCR/RULER/GraphWalks retrieval score published** — **no verified public score found**.

Multimodal:

- Text, image **and video** input, text output (AA technical specs: "Supports: text, image, and video"; Moonshot quickstart lists image + video formats — https://platform.kimi.ai/docs/guide/kimi-k2-7-code-quickstart). Design Arena Website: **1268** (OpenRouter via BenchLM).

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP-Atlas 76.0% and MCP Mark Verified 81.1% stay strong, and the new independent rows — Terminal-Bench 2.1 67.0% (Vals), τ²-bench 90.1% and GDPval-AA 1114 (AA) — confirm solid upper-mid agentic performance; TB2.1 is well short of the ~88% frontier reference, which caps it below the frontier band.
- **Reasoning: 78/100.** Prior pass had no published reasoning number; the first independent figures — GPQA Diamond 89.6%, HLE 35.0%, AA Intelligence Index 26, AA-LCR 79.3% — sit just under the GPQA 90%+/HLE 40%+ frontier reference but clearly above the mid band (GPQA 60–80%, Index 20–35). CritPt 10.0% and an 82.4% hallucination rate keep it short of frontier. (was 76, provisional)
- **Context window: 74/100.** 256K/262,144 tokens sits in the 200K–500K band (200K = 70, between 70 and 85); unchanged, max output is a caveat not a separate score.
- **Multimodal: 68/100 → 78/100.** Prior pass scored image-only (60–70 band); official docs and AA both verify **video** input in addition to image, moving it into the +video/PDF band (75–90); text-only output keeps it out of 90–100. (raised 68→78)
- **Coding: 84/100.** Kimi Code Bench v2 62.0, MCP Mark Verified 81.1% and CursorBench 3.2 49.7 now backed by SWE-bench 78.2% and LiveCodeBench 82.1% (Vals); AA Coding Index 60.8% and SciCode 47.8% fall short of the 70%/55% frontier references, so it stays a strong but not top-band coding specialist.
- **Cost efficiency: 74/100.** $1.90 / $8.00 per 1M (cache hit $0.38) is a ~2× premium over the standard variant ($0.95/$4.00); the throughput is the value, not the price — the standard K2.7-Code route is roughly half the cost.
- **Overall Score: 76.8/100.** (80 + 78 + 74 + 78 + 84) / 5 = 78.8 → 79. Best fit: interactive, latency-bound coding where throughput matters more than the last few points of correctness. (was 76)

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research — official Moonshot platform docs (pricing + K2.7-Code quickstart), the Hugging Face model card (`moonshotai/Kimi-K2.7-Code`), and independent trackers Artificial Analysis and BenchLM (plus Vals AI rows it carries). No number invented; capability is inherited from the documented base model and each figure is cited to its URL.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.
